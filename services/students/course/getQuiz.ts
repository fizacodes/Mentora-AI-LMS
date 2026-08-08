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
    throw new Error("You are not enrolled in this course.");
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
    throw new Error("Lesson not found.");
  }

  // Quiz already exists
  if (lesson.quiz) {
    return lesson.quiz;
  }

  // Generate quiz
  const quiz = await generateQuiz(lesson.id);

  return quiz;
}