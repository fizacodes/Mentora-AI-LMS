import { prisma } from "@/lib/prisma";
import type { CourseDetailsPayload } from "@/type/response";

type GetCourseDetailsResult =
  | {
      success: true;
      data: CourseDetailsPayload;
    }
  | {
      success: false;
      error: string;
    };

export async function getCourseDetails(
  courseId: string,
  userId: string
): Promise<GetCourseDetailsResult> {

  const enrollment =
    await prisma.userCourse.findUnique({
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


  const course =
    await prisma.course.findUnique({
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


  return {
    success: true,
    data: course,
  };
}