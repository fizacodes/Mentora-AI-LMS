import { prisma } from "@/lib/prisma";
import { chatModel } from "@/lib/ai/model";
import { quizResponseSchema } from "@/lib/validators/courseSchema";

export async function generateQuiz(
  lessonId: string
) {
  const lesson = await prisma.lesson.findUnique({
    where: {
      id: lessonId,
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

  if (!lesson.content) {
    return {
      success: false,
      message: "Lesson content has not been generated yet.",
    };
  }

  const prompt = `
You are an expert teacher.

Create a quiz based ONLY on the lesson below.

Course:
${lesson.module.course.title}

Module:
${lesson.module.title}

Lesson:
${lesson.title}

Lesson Content:
${lesson.content}

Return ONLY valid JSON.

{
  "passingScore": 70,
  "questions": [
    {
      "question": "",
      "options": [
        "",
        "",
        "",
        ""
      ],
      "correctAnswer": "",
      "explanation": ""
    }
  ]
}

Rules:
- Create exactly 10 multiple choice questions.
- Each question must have exactly 4 options.
- Only one option should be correct.
- Questions should test understanding, not memorization.
- Return only JSON.
`;

  const response = await chatModel.invoke(prompt);

  const quizData = quizResponseSchema.parse(
    JSON.parse(response.content.toString())
  );

  const quiz = await prisma.lessonQuiz.create({
    data: {
      lessonId,
      passingScore: quizData.passingScore,

      questions: {
        create: quizData.questions.map(
          (question, index) => ({
            question: question.question,
            options: question.options,
            correctAnswer: question.correctAnswer,
            explanation: question.explanation,
            order: index + 1,
          })
        ),
      },
    },

    include: {
      questions: {
        orderBy: {
          order: "asc",
        },
      },
    },
  });

  return {
    success: true,
    message: "Quiz generated successfully.",
    data: quiz,
  };
}