import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  Layers3,
} from "lucide-react";

type Props = {
  course: {
    id: string;
    title: string;
    description: string;
    difficulty: string;
    estimatedDuration: number;
  };
};

export default function EnrolledCourseCard({
  course,
}: Props) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        border border-slate-700/50
        bg-[#081B2D]
        shadow-lg shadow-black/10
        transition-all duration-300
        hover:-translate-y-1
        hover:border-sky-400/30
        hover:shadow-xl
        hover:shadow-sky-950/10
      "
    >
      {/* Top accent */}
      <div
        className="
          h-px
          bg-gradient-to-r
          from-transparent
          via-sky-400/50
          to-transparent
          opacity-60
          transition-opacity
          group-hover:opacity-100
        "
      />

      <div className="p-5 sm:p-6">

        {/* Course Header */}
        <div className="flex items-start gap-4">
          <div
            className="
              flex h-11 w-11 shrink-0
              items-center justify-center
              rounded-xl
              border border-sky-400/20
              bg-sky-400/10
              text-sky-400
            "
          >
            <BookOpen size={19} />
          </div>

          <div className="min-w-0 flex-1">
            <h2
              className="
                truncate
                text-lg
                font-semibold
                tracking-tight
                text-white
              "
            >
              {course.title}
            </h2>

            <p
              className="
                mt-1.5
                line-clamp-2
                text-sm
                leading-6
                text-slate-500
              "
            >
              {course.description}
            </p>
          </div>
        </div>

        {/* Course Info */}
        <div className="mt-5 flex flex-wrap gap-2">

          {/* Difficulty */}
          <span
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-lg
              border border-slate-700/60
              bg-[#061521]
              px-3 py-1.5
              text-xs
              font-medium
              text-slate-400
            "
          >
            <Layers3 size={13} className="text-sky-400" />
            {course.difficulty}
          </span>

          {/* Duration */}
          <span
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-lg
              border border-slate-700/60
              bg-[#061521]
              px-3 py-1.5
              text-xs
              font-medium
              text-slate-400
            "
          >
            <Clock3 size={13} className="text-sky-400" />
            {course.estimatedDuration} hrs
          </span>
        </div>

        {/* Progress */}
        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">
              Course Progress
            </span>

            <span className="text-xs font-semibold text-slate-400">
              0%
            </span>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
            <div
              className="
                h-full
                w-0
                rounded-full
                bg-gradient-to-r
                from-[#0F6CBD]
                to-[#38BDF8]
              "
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-5">
          <span className="text-xs text-slate-600">
            Ready to continue?
          </span>

          <Link
            href={`/student/course/${course.id}`}
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              border border-sky-400/20
              bg-sky-400/10
              px-3.5 py-2
              text-xs
              font-semibold
              text-sky-400
              transition-all
              duration-200
              hover:border-sky-400/40
              hover:bg-sky-400/15
              hover:text-sky-300
            "
          >
            Continue Learning
            <ArrowRight
              size={14}
              className="
                transition-transform
                duration-200
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>

      </div>
    </div>
  );
}