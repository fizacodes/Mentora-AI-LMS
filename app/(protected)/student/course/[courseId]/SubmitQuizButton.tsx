"use client";

import { useState } from "react";
import { submitQuizAction } from "@/actions/students/course/quizAction";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react";

type QuizResult = {
  score: number;
  passed: boolean;
  totalQuestions: number;
  correctAnswers: number;
};

type Props = {
  quizId: string;
  answers: {
    questionId: string;
    answer: string;
  }[];
  totalQuestions: number;
  onSuccess: (result: QuizResult) => void;
};

export default function SubmitQuizButton({
  quizId,
  answers,
  totalQuestions,
  onSuccess,
}: Props) {
  const [submitting, setSubmitting] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  async function handleSubmit() {
    if (submitting) return;

    setError(null);

    if (answers.length !== totalQuestions) {
      setError(
        "Please answer all questions before submitting."
      );
      return;
    }

    try {
      setSubmitting(true);

      const result = await submitQuizAction({
        quizId,
        answers,
      });

      if (!result.success) {
        setError(result.message);
        return;
      }

      onSuccess(result.data);
    } catch (error) {
      console.error(
        "Quiz submission error:",
        error
      );

      setError(
        "Something went wrong while submitting the quiz."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex w-full flex-col items-end gap-3 sm:w-auto">
      {error && (
        <div
          className="
            flex
            w-full
            items-center
            gap-2
            rounded-xl
            border
            border-red-400/15
            bg-red-400/5
            px-4
            py-3
            text-sm
            text-red-400
            sm:w-auto
          "
        >
          <AlertCircle
            size={17}
            className="shrink-0"
          />

          <span>{error}</span>
        </div>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={submitting}
        className="
          inline-flex
          min-w-[150px]
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-sky-400/20
          bg-gradient-to-r
          from-[#0F6CBD]
          to-[#38BDF8]
          px-6
          py-3
          text-sm
          font-semibold
          text-white
          shadow-lg
          shadow-sky-950/20
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:shadow-sky-500/10
          disabled:cursor-not-allowed
          disabled:translate-y-0
          disabled:opacity-50
        "
      >
        {submitting ? (
          <>
            <Loader2
              size={17}
              className="animate-spin"
            />
            Submitting...
          </>
        ) : (
          <>
            <CheckCircle2 size={17} />
            Submit Quiz
          </>
        )}
      </button>
    </div>
  );
}