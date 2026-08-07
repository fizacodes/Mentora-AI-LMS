import { prisma } from "@/lib/prisma";
import type { CoursePreview } from "@/type/response";


export async function enrollCourse(
  userId: string,
  coursePreview: CoursePreview
) {

  const course = await prisma.course.create({
    data: {
      title: coursePreview.title,

      description: coursePreview.description,

      slug: crypto.randomUUID(),

      searchQuery: coursePreview.title,

      difficulty: coursePreview.difficulty,

      estimatedDuration: coursePreview.estimatedDuration,

      status: "READY",

      modules: {
        create: coursePreview.modules.map(
          (module, moduleIndex) => ({
            title: module.title,

            order: moduleIndex + 1,

            lessons: {
              create: module.lessons.map(
                (lesson, lessonIndex) => ({
                  title: lesson.title,

                  order: lessonIndex + 1,
                })
              ),
            },
          })
        ),
      },
    },
  });


  const enrollment = await prisma.userCourse.create({
    data: {
      userId,

      courseId: course.id,
    },
  });


  return {
    course,
    enrollment,
  };
}