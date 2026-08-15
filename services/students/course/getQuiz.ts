
import { prisma } from "@/lib/prisma";
import { generateQuiz } from "./generateQuiz";

export async function getQuiz(
  userId: string,
  courseId: string,
  lessonId: string
) {
  // Verify enrollment
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
      success: false as const,
      message: "You are not enrolled in this course.",
    };
  }

  // Verify lesson exists
  const lesson = await prisma.lesson.findFirst({
    where: {
      id: lessonId,
      module: {
        courseId,
      },
    },
    include: {
      quiz: {
        include: {
          questions: {
            orderBy: {
              order: "asc",
            },
          },
        },
      },
    },
  });

  if (!lesson) {
    return {
      success: false as const,
      message: "Lesson not found.",
    };
  }

  // Quiz already exists
  if (lesson.quiz) {
    return {
      success: true as const,
      data: lesson.quiz,
    };
  }

  // Generate quiz
  const result = await generateQuiz(lesson.id);

  if (!result.success) {
    return {
      success: false as const,
      message: "Learn the lesson first to generate the quiz.",
    };
  }

  return {
    success: true as const,
    data: result.data,
  };
}