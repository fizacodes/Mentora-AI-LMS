"use server"

import { getQuiz } from "@/services/students/course/getQuiz";
import { generateQuizSchema, submitQuizSchema } from "@/lib/validators/courseSchema";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { submitQuiz } from "@/services/students/course/submitQuiz";
import { ActionResponse } from "@/type/response";





export type QuizPayload = {
  id: string;
  lessonId: string;
  passingScore: number;

  questions: {
    id: string;
    question: string;
    options: string[];
    explanation: string | null;
    order: number;
  }[];
};

export async function getQuizAction(
  data: unknown
): Promise<ActionResponse<QuizPayload>> {
  const user = await getCurrentUser();

  if (!user.success) {
    return {
      success: false,
      message: user.message,
    };
  }

  const validated = generateQuizSchema.safeParse(data);

  if (!validated.success) {
    return {
      success: false,
      message: "Invalid quiz data.",
    };
  }

  try {
    const result = await getQuiz(
      user.userId,
      validated.data.courseId,
      validated.data.lessonId
    );

    // IMPORTANT:
    // getQuiz() can now return success:false
    if (!result.success) {
      return {
        success: false,
        message: result.message,
      };
    }

    // IMPORTANT:
    // Return result.data, NOT result itself
    return {
      success: true,
      message: "Successful",
      data: result.data as QuizPayload,
    };
  } catch (error) {
    console.error("Get quiz error:", error);

    return {
      success: false,
      message: "Failed to load quiz.",
    };
  }
}



export async function submitQuizAction(
  data: unknown
) {
  const user = await getCurrentUser();

  if (!user.success) {
    return {
      success: false as const,
      message: user.message,
    };
  }

  const validated =
    submitQuizSchema.safeParse(data);

  if (!validated.success) {
    return {
      success: false as const,
      message: "Invalid quiz submission.",
    };
  }

  try {
    const result = await submitQuiz({
      userId: user.userId,
      quizId: validated.data.quizId,
      answers: validated.data.answers,
    });

    if (!result.success) {
      return {
        success: false as const,
        message: result.message,
      };
    }

    return {
      success: true as const,
      message: result.message,
      data: result.data,
    };
  } catch (error) {
    console.error(
      "Submit quiz error:",
      error
    );

    return {
      success: false as const,
      message: "Failed to submit quiz.",
    };
  }
}