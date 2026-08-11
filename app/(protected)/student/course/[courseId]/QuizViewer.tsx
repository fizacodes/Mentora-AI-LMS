import { getQuizAction } from "@/actions/students/course/quizAction";
import QuizForm from "./QuizForm";
import { AlertCircle, ClipboardCheck } from "lucide-react";

type Props = {
  courseId: string;
  lessonId: string;
};

export default async function QuizViewer({
  courseId,
  lessonId,
}: Props) {
  const result = await getQuizAction({
    courseId,
    lessonId,
  });

  if (!result.success) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-6">
        <div
          className="
            w-full
            max-w-md
            rounded-2xl
            border border-red-400/10
            bg-[#081B2D]
            p-8
            text-center
            shadow-2xl
          "
        >
          <div
            className="
              mx-auto
              flex h-12 w-12
              items-center justify-center
              rounded-xl
              border border-red-400/20
              bg-red-400/10
              text-red-400
            "
          >
            <AlertCircle size={22} />
          </div>

          <h2 className="mt-5 text-lg font-semibold text-white">
            Quiz unavailable
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            {result.message}
          </p>
        </div>
      </div>
    );
  }

  const quiz = result.data;

  return (
    <div className="min-h-full bg-[#061521] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl">

        {/* Quiz Header */}
        <header
          className="
            mb-6
            overflow-hidden
            rounded-2xl
            border border-slate-800
            bg-[#081B2D]
            shadow-lg
          "
        >
          <div className="p-6 sm:p-7">
            <div className="flex items-start gap-4">
              
              {/* Icon */}
              <div
                className="
                  flex h-11 w-11
                  shrink-0
                  items-center justify-center
                  rounded-xl
                  border border-sky-400/20
                  bg-sky-400/10
                  text-sky-400
                "
              >
                <ClipboardCheck size={21} />
              </div>

              {/* Title */}
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                  Knowledge Check
                </p>

                <h1 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Lesson Quiz
                </h1>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Test your understanding of this lesson
                  and see how well you've mastered the
                  material.
                </p>
              </div>
            </div>

            {/* Quiz Info */}
            <div
              className="
                mt-6
                flex
                items-center
                justify-between
                border-t
                border-slate-800
                pt-5
              "
            >
              <span className="text-sm text-slate-500">
                Passing score
              </span>

              <span
                className="
                  rounded-full
                  border border-sky-400/20
                  bg-sky-400/10
                  px-3
                  py-1
                  text-sm
                  font-semibold
                  text-sky-400
                "
              >
                {quiz.passingScore}%
              </span>
            </div>
          </div>
        </header>

        {/* Quiz */}
        <QuizForm quiz={quiz} />

      </div>
    </div>
  );
}