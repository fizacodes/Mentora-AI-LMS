import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma/client";

export type EnrolledCoursePayload =
  Prisma.UserCourseGetPayload<{
    select: {
      course: {
        select: {
          id: true;
          title: true;
          description: true;
          difficulty: true;
          estimatedDuration: true;
        };
      };
    };
  }>;

export async function getEnrolledCourses(
  userId: string
): Promise<EnrolledCoursePayload[]> {
  return prisma.userCourse.findMany({
    where: {
      userId,
    },

    select: {
      course: {
        select: {
          id: true,
          title: true,
          description: true,
          difficulty: true,
          estimatedDuration: true,
        },
      },
    },

    orderBy: {
      enrolledAt: "desc",
    },
  });
}