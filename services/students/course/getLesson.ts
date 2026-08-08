import { prisma } from "@/lib/prisma";
import { generateLessonContent } from "./generateLessonContent";
import { ActionResponse, LessonPayload } from "@/type/response";


export async function getLesson(
  userId: string,
  courseId: string,
  lessonId: string
):Promise<ActionResponse<LessonPayload>> {

  // Verify the user is enrolled in the course
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
      message: "You are not enrolled in this course.",
    };
  }


  // Fetch lesson
  const lesson =
    await prisma.lesson.findFirst({
      where: {
        id: lessonId,
        module: {
          courseId,
        },
      },

      include: {
        module: {
          include: {
            course: true,
          },
        },
      },
    });


  if (!lesson) {
    return {
      success: false,
      message: "Lesson not found.",
    };
  }


  // Return existing generated content
  if (lesson.content) {
    return {
      success: true,
      message:"Success",
      data: lesson,
    };
  }


  // Generate lesson content using AI
  const content =
    await generateLessonContent({
      courseTitle: lesson.module.course.title,
      moduleTitle: lesson.module.title,
      lessonTitle: lesson.title,
    });


  // Save generated content
  const updatedLesson =
    await prisma.lesson.update({
      where: {
        id: lesson.id,
      },

      data: {
        content,
        generatedAt: new Date(),
      },

      include: {
        module: {
          include: {
            course: true,
          },
        },
      },
    });


  return {
    success: true,
    message:"Lesson loaded successfully.",
    data: updatedLesson,
  };
}