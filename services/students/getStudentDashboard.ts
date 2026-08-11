import { prisma } from "@/lib/prisma";
import { StudentDashboardData } from "@/type/response";
type GetStudentDashboardResult =
  | {
      success: true;
      data: StudentDashboardData;
    }
  | {
      success: false;
      message: string;
    };

export async function getStudentDashboard(
  userId: string
):Promise<GetStudentDashboardResult> {
  // Get all enrolled courses
  const enrollments = await prisma.userCourse.findMany({
    where: {
      userId,
    },

    orderBy: {
      enrolledAt: "desc",
    },

    include: {
      course: {
        include: {
          modules: {
            orderBy: {
              order: "asc",
            },

            include: {
              lessons: {
                orderBy: {
                  order: "asc",
                },

                include: {
                  progress: {
                    where: {
                      userId,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  // Build course progress information
  const courses = enrollments.map((enrollment) => {
    const lessons = enrollment.course.modules.flatMap(
      (module) => module.lessons
    );

    const completedLessons = lessons.filter(
      (lesson) =>
        lesson.progress[0]?.completed === true
    ).length;

    const totalLessons = lessons.length;

    const progress =
      totalLessons === 0
        ? 0
        : Math.round(
            (completedLessons / totalLessons) * 100
          );

    // Find first incomplete lesson
    const nextLesson = lessons.find(
      (lesson) =>
        !lesson.progress[0]?.completed
    );

    return {
      id: enrollment.course.id,
      title: enrollment.course.title,
      description: enrollment.course.description,
      thumbnail: enrollment.course.thumbnail,
      difficulty: enrollment.course.difficulty,
      progress,
      completedLessons,
      totalLessons,

      nextLesson: nextLesson
        ? {
            id: nextLesson.id,
            title: nextLesson.title,
          }
        : null,

      enrolledAt: enrollment.enrolledAt,
    };
  });

  // Overall progress across all enrolled courses
  const totalLessons = courses.reduce(
    (total, course) =>
      total + course.totalLessons,
    0
  );

  const completedLessons = courses.reduce(
    (total, course) =>
      total + course.completedLessons,
    0
  );

  const overallProgress =
    totalLessons === 0
      ? 0
      : Math.round(
          (completedLessons / totalLessons) * 100
        );

  // Completed courses
  const completedCourses = courses.filter(
    (course) => course.progress === 100
  );

  // Course to continue
  const continueLearning =
    courses.find(
      (course) =>
        course.progress > 0 &&
        course.progress < 100
    ) ??
    courses.find(
      (course) => course.progress < 100
    ) ??
    null;

  // Recent quiz attempts
  const recentQuizAttempts =
    await prisma.quizAttempt.findMany({
      where: {
        userId,
      },

      orderBy: {
        attemptedAt: "desc",
      },

      take: 5,

      include: {
        quiz: {
          include: {
            lesson: {
              include: {
                module: {
                  include: {
                    course: true,
                  },
                },
              },
            },
          },
        },
      },
    });

  const recentQuizScores =
    recentQuizAttempts.map((attempt) => ({
      id: attempt.id,
      score: attempt.score,
      passed: attempt.passed,
      attemptedAt: attempt.attemptedAt,

      quizId: attempt.quizId,

      lessonTitle: attempt.quiz.lesson.title,

      courseId:
        attempt.quiz.lesson.module.course.id,

      courseTitle:
        attempt.quiz.lesson.module.course.title,
    }));

  return {
    success: true as const,

    data: {
      enrolledCourses: courses,

      overallProgress,

      completedCourses,

      continueLearning,

      recentQuizScores,
    },
  };
}