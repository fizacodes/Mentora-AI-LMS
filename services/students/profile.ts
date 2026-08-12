
import { prisma } from "@/lib/prisma";
import { UpdateProfileSchema } from "@/lib/validators/authSchema";

export type StudentProfileResult =
  | {
      success: true;
      data: {
        user: {
          id: string;
          name: string | null;
          email: string;
          image: string | null;
          role: "STUDENT" | "ADMIN";
          createdAt: Date;
        };
        stats: {
          enrolledCourses: number;
          totalLessons: number;
          completedLessons: number;
          progressPercentage: number;
          quizAttempts: number;
          passedQuizzes: number;
        };
      };
    }
  | {
      success: false;
      error: string;
    };

export async function getStudentProfileService(
  userId: string
): Promise<StudentProfileResult> {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },

    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      role: true,
      createdAt: true,

      enrolledCourses: {
        select: {
          course: {
            select: {
              modules: {
                select: {
                  lessons: {
                    select: {
                      id: true,
                    },
                  },
                },
              },
            },
          },
        },
      },

      lessonProgress: {
        select: {
          lessonId: true,
          completed: true,
        },
      },

      quizAttempts: {
        select: {
          id: true,
          passed: true,
          score: true,
        },
      },
    },
  });

  if (!user) {
    return {
      success: false,
      error: "User not found",
    };
  }

  // --------------------------------
  // Enrolled courses
  // --------------------------------

  const enrolledCourses = user.enrolledCourses.length;

  // --------------------------------
  // Get all lessons from enrolled courses
  // --------------------------------

  const enrolledLessonIds = new Set(
    user.enrolledCourses.flatMap((enrollment) =>
      enrollment.course.modules.flatMap((module) =>
        module.lessons.map((lesson) => lesson.id)
      )
    )
  );

  const totalLessons = enrolledLessonIds.size;

  // --------------------------------
  // Completed lessons
  // --------------------------------

  const completedLessons = user.lessonProgress.filter(
    (progress) =>
      progress.completed &&
      enrolledLessonIds.has(progress.lessonId)
  ).length;

  // --------------------------------
  // Overall progress
  // --------------------------------

  const progressPercentage =
    totalLessons > 0
      ? Math.round((completedLessons / totalLessons) * 100)
      : 0;

  // --------------------------------
  // Quiz statistics
  // --------------------------------

  const quizAttempts = user.quizAttempts.length;

  const passedQuizzes = user.quizAttempts.filter(
    (attempt) => attempt.passed
  ).length;

  // --------------------------------
  // Return
  // --------------------------------

  return {
    success: true,

    data: {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        role: user.role,
        createdAt: user.createdAt,
      },

      stats: {
        enrolledCourses,
        totalLessons,
        completedLessons,
        progressPercentage,
        quizAttempts,
        passedQuizzes,
      },
    },
  };
}



export async function updateStudentProfileService(
  userId: string,
  data: UpdateProfileSchema
) {
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name: data.name,
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
    },
  });

  return {
    success: true as const,
    data: user,
  };
}