import { prisma } from "@/lib/prisma";
import type { CourseDetailsPayload } from "@/type/response";

type GetCourseDetailsResult =
  | {
      success: true;
      data: CourseDetailsPayload;
      progress: number;
    }
  | {
      success: false;
      error: string;
    };

export async function getCourseDetails(
  courseId: string,
  userId: string
): Promise<GetCourseDetailsResult> {
  // 1. Verify enrollment
  const enrollment = await prisma.userCourse.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId,
      },
    },
  });

  if (!enrollment) {
    return {
      success: false,
      error: "You are not enrolled in this course",
    };
  }

  // 2. Get course with modules, lessons and
  //    progress belonging to the current user
  const course = await prisma.course.findUnique({
    where: {
      id: courseId,
    },

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
  });

  if (!course) {
    return {
      success: false,
      error: "Course not found",
    };
  }

  // 3. Get all lessons from all modules
  const lessons = course.modules.flatMap(
    (module) => module.lessons
  );

  // 4. Count completed lessons
  const completedLessons = lessons.filter(
    (lesson) =>
      lesson.progress.some(
        (progress) => progress.completed
      )
  ).length;

  // 5. Calculate course progress
  const progress =
    lessons.length === 0
      ? 0
      : Math.round(
          (completedLessons / lessons.length) * 100
        );

  // 6. Return course + progress
  return {
    success: true,
    data: course,
    progress,
  };
}