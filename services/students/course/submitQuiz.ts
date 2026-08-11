import { prisma } from "@/lib/prisma";

type SubmitQuizData = {
  userId: string;
  quizId: string;
  answers: {
    questionId: string;
    answer: string;
  }[];
};

export async function submitQuiz({
  userId,
  quizId,
  answers,
}: SubmitQuizData) {
  const quiz = await prisma.lessonQuiz.findUnique({
    where: {
      id: quizId,
    },
    include: {
      questions: true,
    },
  });

  if (!quiz) {
    return {
      success: false as const,
      message: "Quiz not found.",
    };
  }

  let correctAnswers = 0;

  const results = quiz.questions.map((question) => {
    const submittedAnswer = answers.find(
      (answer) => answer.questionId === question.id
    );

    const isCorrect =
      submittedAnswer?.answer === question.correctAnswer;

    if (isCorrect) {
      correctAnswers++;
    }

    return {
      questionId: question.id,
      question: question.question,
      selectedAnswer: submittedAnswer?.answer ?? null,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation,
      isCorrect,
    };
  });

  const score = Math.round(
    (correctAnswers / quiz.questions.length) * 100
  );

  const passed = score >= quiz.passingScore;

  await prisma.$transaction(async (tx) => {
    // Save quiz attempt
    await tx.quizAttempt.create({
      data: {
        userId,
        quizId,
        score,
        passed,
      },
    });

    // Complete lesson only when quiz is passed
    if (passed) {
      await tx.lessonProgress.upsert({
        where: {
          userId_lessonId: {
            userId,
            lessonId: quiz.lessonId,
          },
        },
        update: {
          completed: true,
          completedAt: new Date(),
        },
        create: {
          userId,
          lessonId: quiz.lessonId,
          completed: true,
          completedAt: new Date(),
        },
      });
    }
  });

  return {
    success: true as const,
    message: "Quiz submitted successfully.",
    data: {
      score,
      passed,
      totalQuestions: quiz.questions.length,
      correctAnswers,
      results,
    },
  };
}