"use client";

import { useState } from "react";
import SubmitQuizButton from "./SubmitQuizButton";

type Question = {
  id: string;
  question: string;
  options: unknown;
};

type Quiz = {
  id: string;
  passingScore: number;
  questions: Question[];
};

type QuizResult = {
  score: number;
  passed: boolean;
  totalQuestions: number;
  correctAnswers: number;
};

type Props = {
  quiz: Quiz;
};

export default function QuizForm({ quiz }: Props) {
  const [answers, setAnswers] =
    useState<Record<string, string>>({});

  const [result, setResult] =
    useState<QuizResult | null>(null);

  function handleAnswer(
    questionId: string,
    answer: string
  ) {
    setAnswers((previous) => ({
      ...previous,
      [questionId]: answer,
    }));
  }

  const formattedAnswers = quiz.questions
    .filter(
      (question) =>
        answers[question.id] !== undefined
    )
    .map((question) => ({
      questionId: question.id,
      answer: answers[question.id],
    }));

  /*
   * =========================
   * QUIZ RESULT
   * =========================
   */

  if (result) {
    return (
      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-slate-800
          bg-[#081B2D]
          shadow-2xl
          shadow-black/20
        "
      >
        {/* Result Header */}
        <div
          className="
            border-b
            border-slate-800
            bg-gradient-to-br
            from-[#0B2340]
            to-[#081B2D]
            px-6
            py-8
            text-center
            sm:px-10
          "
        >
          <div
            className={`
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              ${
                result.passed
                  ? "border-emerald-400/20 bg-emerald-400/10"
                  : "border-red-400/20 bg-red-400/10"
              }
            `}
          >
            <span className="text-2xl">
              {result.passed ? "✓" : "!"}
            </span>
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Quiz Completed
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
            Quiz Result
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Here's how you performed on this
            knowledge check.
          </p>
        </div>

        {/* Score */}
        <div className="px-6 py-8 sm:px-10">
          <div className="text-center">
            <p className="text-6xl font-bold tracking-tight text-white">
              {result.score}%
            </p>

            <p className="mt-2 text-sm text-slate-400">
              {result.correctAnswers} /{" "}
              {result.totalQuestions} correct
            </p>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div
              className="
                rounded-xl
                border
                border-slate-800
                bg-[#061521]
                p-4
                text-center
              "
            >
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Passing Score
              </p>

              <p className="mt-1 text-lg font-semibold text-sky-400">
                {quiz.passingScore}%
              </p>
            </div>

            <div
              className="
                rounded-xl
                border
                border-slate-800
                bg-[#061521]
                p-4
                text-center
              "
            >
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Correct
              </p>

              <p className="mt-1 text-lg font-semibold text-white">
                {result.correctAnswers}/
                {result.totalQuestions}
              </p>
            </div>
          </div>

          {/* Status */}
          {result.passed ? (
            <div
              className="
                mt-6
                rounded-xl
                border
                border-emerald-400/20
                bg-emerald-400/10
                px-4
                py-4
              "
            >
              <p className="text-center font-semibold text-emerald-400">
                🎉 Congratulations! You passed.
              </p>

              <p className="mt-1 text-center text-sm text-emerald-400/70">
                Great work. Keep building your knowledge.
              </p>
            </div>
          ) : (
            <div
              className="
                mt-6
                rounded-xl
                border
                border-red-400/20
                bg-red-400/10
                px-4
                py-4
              "
            >
              <p className="text-center font-semibold text-red-400">
                You did not pass the quiz.
              </p>

              <p className="mt-1 text-center text-sm text-red-400/70">
                Review the lesson and try again.
              </p>

              <div className="mt-5 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setResult(null);
                    setAnswers({});
                  }}
                  className="
                    rounded-xl
                    bg-gradient-to-r
                    from-[#0F6CBD]
                    to-[#38BDF8]
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-sky-900/20
                    transition
                    hover:-translate-y-0.5
                    hover:shadow-sky-500/20
                  "
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  /*
   * =========================
   * QUIZ
   * =========================
   */

  return (
    <div className="w-full space-y-5">
      {/* Quiz Progress */}
      <div
        className="
          flex
          items-center
          justify-between
          rounded-xl
          border
          border-slate-800
          bg-[#081B2D]
          px-5
          py-4
        "
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Assessment
          </p>

          <p className="mt-1 text-sm font-medium text-slate-300">
            {quiz.questions.length} questions
          </p>
        </div>

        <div
          className="
            rounded-full
            border
            border-sky-400/20
            bg-sky-400/10
            px-3
            py-1.5
          "
        >
          <span className="text-xs font-semibold text-sky-400">
            Passing: {quiz.passingScore}%
          </span>
        </div>
      </div>

      {/* Questions */}
      {quiz.questions.map((question, index) => {
        const options = Array.isArray(
          question.options
        )
          ? (question.options as string[])
          : [];

        return (
          <section
            key={question.id}
            className="
              overflow-hidden
              rounded-2xl
              border
              border-slate-800
              bg-[#081B2D]
              shadow-lg
              shadow-black/10
            "
          >
            {/* Question Header */}
            <div
              className="
                border-b
                border-slate-800
                bg-[#0B2340]/50
                px-5
                py-4
                sm:px-6
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-sky-400/10
                    text-sm
                    font-bold
                    text-sky-400
                  "
                >
                  {index + 1}
                </div>

                <h2
                  className="
                    pt-1
                    text-base
                    font-semibold
                    leading-6
                    text-white
                    sm:text-lg
                  "
                >
                  {question.question}
                </h2>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3 p-5 sm:p-6">
              {options.map(
                (option, optionIndex) => {
                  const selected =
                    answers[question.id] ===
                    option;

                  return (
                    <button
                      key={`${question.id}-${optionIndex}`}
                      type="button"
                      onClick={() =>
                        handleAnswer(
                          question.id,
                          option
                        )
                      }
                      className={`
                        group
                        flex
                        w-full
                        cursor-pointer
                        items-center
                        gap-4
                        rounded-xl
                        border
                        px-4
                        py-3.5
                        text-left
                        transition-all
                        duration-200
                        focus:outline-none
                        focus:ring-2
                        focus:ring-sky-400/20
                        ${
                          selected
                            ? "border-sky-400/50 bg-sky-400/10 shadow-sm shadow-sky-900/20"
                            : "border-slate-800 bg-[#061521] hover:border-slate-700 hover:bg-[#0B2340]/60"
                        }
                      `}
                    >
                      {/* Radio Visual */}
                      <span
                        className={`
                          flex
                          h-5
                          w-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          transition
                          ${
                            selected
                              ? "border-sky-400 bg-sky-400"
                              : "border-slate-600 group-hover:border-slate-400"
                          }
                        `}
                      >
                        {selected && (
                          <span className="h-2 w-2 rounded-full bg-[#061521]" />
                        )}
                      </span>

                      {/* Option */}
                      <span
                        className={`
                          flex
                          min-w-0
                          flex-1
                          items-center
                          gap-3
                          text-sm
                          leading-5
                          ${
                            selected
                              ? "text-sky-100"
                              : "text-slate-300"
                          }
                        `}
                      >
                        {/* A/B/C/D */}
                        <span
                          className={`
                            flex
                            h-6
                            w-6
                            shrink-0
                            items-center
                            justify-center
                            rounded-md
                            text-xs
                            font-semibold
                            ${
                              selected
                                ? "bg-sky-400/15 text-sky-400"
                                : "bg-slate-800 text-slate-500"
                            }
                          `}
                        >
                          {String.fromCharCode(
                            65 + optionIndex
                          )}
                        </span>

                        <span className="break-words">
                          {option}
                        </span>
                      </span>
                    </button>
                  );
                }
              )}
            </div>
          </section>
        );
      })}

      {/* Submit */}
      <div
        className="
          mt-7
          border-t
          border-slate-800
          bg-[#061521]
          px-1
          py-5
        "
      >
        <div
          className="
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-sm text-slate-500">
            {formattedAnswers.length ===
            quiz.questions.length
              ? "All questions answered."
              : `Answered ${formattedAnswers.length} of ${quiz.questions.length} questions.`}
          </p>

          <SubmitQuizButton
            quizId={quiz.id}
            answers={formattedAnswers}
            totalQuestions={quiz.questions.length}
            onSuccess={(quizResult) => {
              setResult(quizResult);
            }}
          />
        </div>
      </div>
    </div>
  );
}