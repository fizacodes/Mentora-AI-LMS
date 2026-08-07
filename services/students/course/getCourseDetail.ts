import { prisma } from "@/lib/prisma";


export async function getCourseDetails(
  courseId: string,
  userId: string
) {

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
    throw new Error(
      "You are not enrolled in this course"
    );
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
    throw new Error(
      "Course not found"
    );
  }


  return course;
}