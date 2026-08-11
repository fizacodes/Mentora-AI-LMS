
import Link from "next/link";
import { ArrowRight, BookOpen, PlayCircle } from "lucide-react";

type Course = {
  id: string;
  title: string;
  progress: number;
  nextLesson: {
    id: string;
    title: string;
  } | null;
};

type Props = {
  course: Course | null;
};

export default function ContinueLearning({
  course,
}: Props) {
  if (!course) {
    return (
      <section
        className="
          rounded-2xl
          border border-[#163A5C]
          bg-[#0B2340]
          p-5
        "
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
            <BookOpen size={19} />
          </div>

          <div>
            <h2 className="text-base font-semibold text-white">
              Continue Learning
            </h2>

            <p className="mt-0.5 text-xs text-slate-400">
              Pick a course and start learning.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="
        relative overflow-hidden
        rounded-2xl
        border border-[#163A5C]
        bg-[#0B2340]
        p-5
        transition-all duration-200
        hover:border-sky-400/30
        mx-4 mb-10
      "
    >
      {/* Subtle background glow */}
      <div
        className="
          pointer-events-none
          absolute -right-16 -top-16
          h-40 w-40
          rounded-full
          bg-sky-400/10
          blur-3xl
        "
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-3">
            <div
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-xl
                border border-sky-400/20
                bg-sky-400/10
                text-sky-400
              "
            >
              <PlayCircle size={19} />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wider text-sky-400">
                Continue Learning
              </p>

              <h2 className="mt-1 truncate text-lg font-semibold text-white">
                {course.title}
              </h2>
            </div>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-xl font-bold text-white">
              {course.progress}%
            </p>

            <p className="text-[10px] text-slate-500">
              completed
            </p>
          </div>
        </div>

        {/* Next lesson */}
        {course.nextLesson && (
          <div
            className="
              mt-5
              rounded-xl
              border border-[#163A5C]
              bg-[#081B2D]
              px-4 py-3
            "
          >
            <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
              Next Lesson
            </p>

            <div className="mt-1.5 flex items-center gap-2">
              <BookOpen
                size={15}
                className="shrink-0 text-sky-400"
              />

              <p className="truncate text-sm font-medium text-slate-200">
                {course.nextLesson.title}
              </p>
            </div>
          </div>
        )}

        {/* Progress */}
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Course progress
            </span>

            <span className="text-xs font-medium text-slate-400">
              {course.progress}%
            </span>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-slate-700/70">
            <div
              className="
                h-full rounded-full
                bg-sky-400
                transition-all duration-500
              "
              style={{
                width: `${course.progress}%`,
              }}
            />
          </div>
        </div>

        {/* Action */}
        {course.nextLesson && (
          <Link
            href={`/student/course/${course.id}/lesson/${course.nextLesson.id}`}
            className="
              mt-5 inline-flex
              items-center justify-center
              gap-2
              rounded-lg
              bg-sky-500
              px-4 py-2.5
              text-sm font-semibold
              text-white
              shadow-lg shadow-sky-950/20
              transition-all
              hover:bg-sky-400
              hover:shadow-sky-400/10
              active:scale-[0.98]
            "
          >
            Continue
            <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </section>
  );
}
