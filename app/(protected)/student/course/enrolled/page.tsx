import {
  BookOpen,
  GraduationCap,
} from "lucide-react";

import { getEnrolledCoursesAction } from "@/actions/students/course/enrollCourseAction";

import EmptyCourseState from "./EmptyCourseState";
import EnrolledCourseCard from "./EnrolledCourseCard";

export default async function EnrolledCoursesPage() {
  const result = await getEnrolledCoursesAction();

  if (!result.success) {
    return (
      <main className="h-screen bg-[#061521] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div
            className="
              rounded-2xl
              border border-red-400/20
              bg-red-400/5
              px-5 py-4
              text-sm
              text-red-400
            "
          >
            {result.error}
          </div>
        </div>
      </main>
    );
  }

  if (!result.data || result.data.length === 0) {
    return (
      <main className="min-h-full bg-[#061521] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <EmptyCourseState />
        </div>
      </main>
    );
  }

  return (
    <main className="relative h-screen overflow-hidden bg-[#061521] px-4 py-8 sm:px-6 lg:px-8">

      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute -right-40 -top-40
          h-96 w-96
          rounded-full
          bg-sky-500/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute -bottom-40 -left-40
          h-96 w-96
          rounded-full
          bg-blue-600/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>
              {/* Small label */}
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
                  <GraduationCap size={16} />
                </div>

                <span
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-sky-400
                  "
                >
                  Learning Space
                </span>
              </div>

              <h1
                className="
                  text-2xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-3xl
                "
              >
                My Courses
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Continue your learning journey and pick up
                where you left off.
              </p>
            </div>

            {/* Course count */}
            <div
              className="
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-xl
                border border-slate-700/60
                bg-[#081B2D]
                px-4 py-2.5
              "
            >
              <BookOpen
                size={16}
                className="text-sky-400"
              />

              <span className="text-sm font-medium text-slate-300">
                {result.data.length}
                {" "}
                {result.data.length === 1
                  ? "Course"
                  : "Courses"}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-7 h-px bg-slate-800/80" />
        </header>

        {/* Course Grid */}
        <section>
          <div
            className="
              grid
              gap-5
              sm:grid-cols-2
              xl:grid-cols-3
            "
          >
            {result.data.map((item) => (
              <EnrolledCourseCard
                key={item.course.id}
                course={item.course}
              />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}