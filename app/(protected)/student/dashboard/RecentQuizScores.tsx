
import { CheckCircle2, XCircle, Trophy } from "lucide-react";

type QuizScore = {
  id: string;
  score: number;
  passed: boolean;
  lessonTitle: string;
  courseTitle: string;
  attemptedAt: Date;
};

type Props = {
  scores: QuizScore[];
};

export default function RecentQuizScores({
  scores,
}: Props) {
  return (
    <section
      className="
        overflow-hidden
        rounded-2xl
        border border-[#163A5C]
        bg-[#0B2340]
        mx-4
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#163A5C] px-5 py-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
              <Trophy size={16} />
            </div>

            <h2 className="text-base font-semibold text-white">
              Recent Quiz Scores
            </h2>
          </div>

          <p className="mt-1 ml-10 text-xs text-slate-400">
            Your latest quiz performance
          </p>
        </div>
      </div>

      {/* Empty state */}
      {scores.length === 0 ? (
        <div className="flex flex-col items-center justify-center px-6 py-10 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-slate-500">
            <Trophy size={20} />
          </div>

          <p className="mt-3 text-sm font-medium text-slate-300">
            No quiz attempts yet
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Complete a lesson quiz to see your results here.
          </p>
        </div>
      ) : (
        <div>
          {scores.map((quiz, index) => (
            <div
              key={quiz.id}
              className={`
                flex items-center justify-between
                gap-4 px-5 py-4
                transition-colors
                hover:bg-[#102D4A]
                ${
                  index !== scores.length - 1
                    ? "border-b border-[#163A5C]"
                    : ""
                }
              `}
            >
              {/* Quiz information */}
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">
                  {quiz.lessonTitle}
                </p>

                <p className="mt-1 truncate text-xs text-slate-400">
                  {quiz.courseTitle}
                </p>
              </div>

              {/* Score + status */}
              <div className="flex shrink-0 items-center gap-4">
                <div className="text-right">
                  <p className="text-lg font-bold text-white">
                    {quiz.score}%
                  </p>

                  <p className="text-[10px] text-slate-500">
                    Score
                  </p>
                </div>

                {quiz.passed ? (
                  <span
                    className="
                      flex items-center gap-1.5
                      rounded-full
                      border border-emerald-400/20
                      bg-emerald-400/10
                      px-2.5 py-1
                      text-xs font-medium
                      text-emerald-400
                    "
                  >
                    <CheckCircle2 size={14} />
                    Passed
                  </span>
                ) : (
                  <span
                    className="
                      flex items-center gap-1.5
                      rounded-full
                      border border-red-400/20
                      bg-red-400/10
                      px-2.5 py-1
                      text-xs font-medium
                      text-red-400
                    "
                  >
                    <XCircle size={14} />
                    Failed
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
