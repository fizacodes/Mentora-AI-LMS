import type { CourseDetailsPayload } from "@/type/response";
import Link from "next/link";
import {
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Layers3,
} from "lucide-react";

type Props = {
  course: CourseDetailsPayload;
  progress: number;
};

export default function CourseSidebar({
  course,
  progress,
}: Props) {
  return (
    <aside
      className="
        flex
        h-screen
        min-h-0
        flex-col
        border-r border-slate-800/80
        bg-[#061521]
      "
    >
      {/* Fixed Header */}
      <div className="shrink-0 px-5 pt-6">
        <div className="mb-3 flex items-center gap-2">
          <div
            className="
              flex h-8 w-8
              items-center justify-center
              rounded-lg
              border border-sky-400/20
              bg-sky-400/10
              text-sky-400
            "
          >
            <BookOpen size={16} />
          </div>

          <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
            Course
          </span>
        </div>

        <h2 className="text-lg font-semibold leading-7 text-white">
          {course.title}
        </h2>
      </div>

      {/* Fixed Progress */}
      <div className="shrink-0 px-5 py-6">
        <div
          className="
            rounded-xl
            border border-slate-700/60
            bg-[#081B2D]
            p-4
          "
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-300">
              Course Progress
            </span>

            <span className="text-sm font-semibold text-sky-400">
              {progress}%
            </span>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
            <div
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-[#0F6CBD]
                to-[#38BDF8]
                transition-all
                duration-500
              "
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* ONLY THIS PART SCROLLS */}
      <div
        className="
          min-h-0
          flex-1
          overflow-y-auto
          px-5
          pb-6
          scrollbar-thin
          scrollbar-track-transparent
          scrollbar-thumb-slate-700
        "
      >
        <div className="space-y-7">
          {course.modules.map((module) => (
            <div key={module.id}>
              {/* Module */}
              <div className="mb-3 flex items-center gap-2">
                <div
                  className="
                    flex h-6 w-6 shrink-0
                    items-center justify-center
                    rounded-md
                    bg-slate-800
                    text-slate-400
                  "
                >
                  <Layers3 size={13} />
                </div>

                <h3 className="truncate text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {module.title}
                </h3>
              </div>

              {/* Lessons */}
              <div className="ml-3 space-y-1 border-l border-slate-800 pl-3">
                {module.lessons.map((lesson) => {
                  const completed =
                    lesson.progress?.[0]?.completed ?? false;

                  return (
                    <div key={lesson.id}>
                      {/* Lesson */}
                      <Link
                        href={`/student/course/${course.id}/lesson/${lesson.id}`}
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          gap-3
                          rounded-lg
                          px-3
                          py-2.5
                          text-sm
                          transition-all
                          hover:bg-slate-800/70
                        "
                      >
                        <span className="flex min-w-0 items-center gap-2.5">
                          <BookOpen
                            size={14}
                            className="shrink-0 text-slate-500 group-hover:text-sky-400"
                          />

                          <span
                            className={`truncate ${
                              completed
                                ? "text-slate-400"
                                : "text-slate-300"
                            }`}
                          >
                            {lesson.title}
                          </span>
                        </span>

                        {completed && (
                          <CheckCircle2
                            size={15}
                            className="shrink-0 text-emerald-400"
                          />
                        )}
                      </Link>

                      {/* Quiz */}
                      <Link
                        href={`/student/course/${course.id}/lesson/${lesson.id}?tab=quiz`}
                        className="
                          group
                          ml-7
                          flex
                          items-center
                          justify-between
                          gap-3
                          rounded-lg
                          px-3
                          py-2
                          text-xs
                          transition-all
                          hover:bg-slate-800/60
                        "
                      >
                        <span className="flex min-w-0 items-center gap-2">
                          <ClipboardCheck
                            size={13}
                            className="shrink-0 text-slate-600 group-hover:text-sky-400"
                          />

                          <span className="truncate text-slate-500 group-hover:text-slate-300">
                            Quiz: {lesson.title}
                          </span>
                        </span>

                        {completed && (
                          <CheckCircle2
                            size={14}
                            className="shrink-0 text-emerald-400"
                          />
                        )}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}