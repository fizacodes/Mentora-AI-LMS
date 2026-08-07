import { prisma } from "@/lib/prisma";


export async function getEnrolledCourses(
  userId: string
) {

  const courses = await prisma.userCourse.findMany({

    where: {
      userId,
    },

    include: {

      course: {

        include: {

          modules: {
            include: {
              lessons: true,
            },

            orderBy: {
              order: "asc",
            },
          },

        },

      },

    },

    orderBy: {
      enrolledAt: "desc",
    },

  });


  return courses;
}