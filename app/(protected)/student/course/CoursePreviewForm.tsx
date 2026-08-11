"use client";

import { useState } from "react";
import {
  BookOpen,
  ChevronDown,
  Clock3,
  Layers3,
  Sparkles,
} from "lucide-react";

import type { CoursePreview } from "@/type/response";
import EnrollButton from "./EnrollButton";

type Props = {
  course: CoursePreview;
};

export default function CoursePreviewCard({
  course,
}: Props) {
  const [showCurriculum, setShowCurriculum] =
    useState(false);

  const totalLessons = course.modules.reduce(
    (total, module) => total + module.lessons.length,
    0
  );

  return (
    <div
      className="
        mt-6 overflow-hidden rounded-2xl
        border border-slate-700/50
        bg-[#081B2D]
        shadow-2xl shadow-black/20
      "
    >
      {/* Accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#38BDF8]/70 to-transparent" />

      <div className="p-6 sm:p-8">

        {/* Header */}
        <div className="flex items-start gap-4">
          <div
            className="
              flex h-12 w-12 shrink-0 items-center
              justify-center rounded-xl
              border border-sky-400/20
              bg-sky-400/10
              text-sky-400
            "
          >
            <Sparkles size={21} />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-sky-400">
              AI Course Preview
            </p>

            <h2 className="mt-1 text-2xl font-bold text-white">
              {course.title}
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              {course.description}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-7 grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-slate-700/50 bg-[#061521] p-4">
            <div className="flex items-center gap-2 text-slate-500">
              <Layers3 size={15} />
              <span className="text-xs">Difficulty</span>
            </div>

            <p className="mt-2 text-sm font-semibold text-white">
              {course.difficulty}
            </p>
          </div>

          <div className="rounded-xl border border-slate-700/50 bg-[#061521] p-4">
            <div className="flex items-center gap-2 text-slate-500">
              <Clock3 size={15} />
              <span className="text-xs">Duration</span>
            </div>

            <p className="mt-2 text-sm font-semibold text-white">
              {course.estimatedDuration} Hours
            </p>
          </div>

          <div className="rounded-xl border border-slate-700/50 bg-[#061521] p-4">
            <div className="flex items-center gap-2 text-slate-500">
              <BookOpen size={15} />
              <span className="text-xs">Content</span>
            </div>

            <p className="mt-2 text-sm font-semibold text-white">
              {course.modules.length} Modules
            </p>
          </div>
        </div>

        {/* Curriculum Preview */}
        <div className="mt-8 rounded-xl border border-slate-700/50 bg-[#061521]/70">

          <div className="flex items-center justify-between gap-4 p-5">
            <div>
              <h3 className="font-semibold text-white">
                Course Curriculum
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                {course.modules.length} modules · {totalLessons} lessons
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setShowCurriculum((previous) => !previous)
              }
              className="
                flex shrink-0 items-center gap-2
                rounded-lg
                border border-sky-400/20
                bg-sky-400/10
                px-3 py-2
                text-xs font-medium
                text-sky-400
                transition
                hover:bg-sky-400/15
              "
            >
              {showCurriculum
                ? "Hide Curriculum"
                : "View Curriculum"}

              <ChevronDown
                size={15}
                className={`
                  transition-transform
                  ${showCurriculum ? "rotate-180" : ""}
                `}
              />
            </button>
          </div>

          {/* Expandable Curriculum */}
          {showCurriculum && (
            <div className="border-t border-slate-800 p-5">
              <div className="space-y-3">
                {course.modules.map(
                  (module, moduleIndex) => (
                    <div
                      key={moduleIndex}
                      className="
                        rounded-xl
                        border border-slate-700/50
                        bg-[#081B2D]
                        p-4
                      "
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="
                            flex h-8 w-8 shrink-0
                            items-center justify-center
                            rounded-lg
                            bg-sky-400/10
                            text-xs font-semibold
                            text-sky-400
                          "
                        >
                          {moduleIndex + 1}
                        </div>

                        <div className="min-w-0">
                          <h4 className="font-medium text-slate-200">
                            {module.title}
                          </h4>

                          <p className="mt-1 text-xs text-slate-600">
                            {module.lessons.length}{" "}
                            {module.lessons.length === 1
                              ? "lesson"
                              : "lessons"}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 ml-11 space-y-2">
                        {module.lessons.map(
                          (lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className="
                                flex items-center gap-3
                                rounded-lg
                                border border-slate-800
                                bg-[#061521]
                                px-3 py-2.5
                              "
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-sky-400" />

                              <span className="text-sm text-slate-400">
                                {lesson.title}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-slate-800" />

        {/* Enrollment */}
        <div
          className="
            flex flex-col gap-4
            rounded-xl
            border border-sky-400/10
            bg-sky-400/[0.03]
            p-5
            sm:flex-row sm:items-center
            sm:justify-between
          "
        >
          <div>
            <h3 className="font-medium text-white">
              Ready to start learning?
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Enroll and start your learning journey.
            </p>
          </div>

          <EnrollButton course={course} />
        </div>
      </div>
    </div>
  );
}