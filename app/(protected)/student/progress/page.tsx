import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";

import { getStudentProfileAction } from "@/actions/students/profile";
import DashboardSidebar from "../dashboard/DashboardSidebar";

export default async function ProgressPage() {
  const result = await getStudentProfileAction();

  if (!result.success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#061521] px-6">
        <p className="text-red-400">{result.error}</p>
      </div>
    );
  }

  const { stats } = result.data;

  return (
    <div className="fixed inset-0 flex overflow-hidden bg-[#061521] text-white">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}
      <DashboardSidebar />

      {/* =====================================================
          MAIN CONTENT
          ONLY THIS AREA SCROLLS
      ===================================================== */}
      <main
        className="
          min-h-0
          min-w-0
          flex-1
          overflow-y-auto
          overscroll-contain
          scrollbar-thin
          scrollbar-track-transparent
          scrollbar-thumb-slate-700
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-6xl
            space-y-8
            px-4
            pb-10
            pt-20
            sm:px-6
            lg:px-8
            lg:pt-8
          "
        >

          {/* =================================================
              HEADER
          ================================================= */}
          <div>
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-sky-400/20
                  bg-sky-400/10
                  text-sky-400
                "
              >
                <BarChart3 size={20} />
              </div>

              <div className="min-w-0">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Learning Progress
                </h1>

                <p className="mt-1 text-sm text-slate-400">
                  Track your learning journey and see how far you've come.
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              OVERALL PROGRESS
          ================================================= */}
          <section
            className="
              rounded-2xl
              border
              border-slate-700
              bg-[#0B2340]
              p-5
              sm:p-6
            "
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

              {/* Progress Circle */}
              <div className="flex shrink-0 justify-center sm:justify-start">
                <div
                  className="
                    flex
                    h-32
                    w-32
                    items-center
                    justify-center
                    rounded-full
                    border-[10px]
                    border-sky-400/20
                  "
                >
                  <div className="text-center">
                    <p className="text-3xl font-bold text-sky-400">
                      {stats.progressPercentage}%
                    </p>

                    <p className="text-xs text-slate-400">
                      Overall
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress Information */}
              <div className="min-w-0 flex-1">

                <h2 className="text-xl font-semibold text-white">
                  Overall Learning Progress
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Keep learning and completing lessons to improve your
                  overall progress.
                </p>

                {/* Progress Bar */}
                <div className="mt-5">

                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      Course completion
                    </span>

                    <span className="text-xs font-medium text-sky-400">
                      {stats.progressPercentage}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
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
                        width: `${stats.progressPercentage}%`,
                      }}
                    />
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              LEARNING STATISTICS
          ================================================= */}
          <section>
            <h2 className="mb-4 text-lg font-semibold sm:text-xl">
              Learning Statistics
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {/* Enrolled Courses */}
              <div
                className="
                  rounded-2xl
                  border
                  border-slate-700
                  bg-[#0B2340]
                  p-5
                "
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">
                    Enrolled Courses
                  </p>

                  <BookOpen
                    size={20}
                    className="text-sky-400"
                  />
                </div>

                <p className="mt-3 text-3xl font-bold">
                  {stats.enrolledCourses}
                </p>
              </div>

              {/* Completed Lessons */}
              <div
                className="
                  rounded-2xl
                  border
                  border-slate-700
                  bg-[#0B2340]
                  p-5
                "
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">
                    Completed Lessons
                  </p>

                  <CheckCircle2
                    size={20}
                    className="text-emerald-400"
                  />
                </div>

                <p className="mt-3 text-3xl font-bold">
                  {stats.completedLessons}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  of {stats.totalLessons} lessons
                </p>
              </div>

              {/* Passed Quizzes */}
              <div
                className="
                  rounded-2xl
                  border
                  border-slate-700
                  bg-[#0B2340]
                  p-5
                "
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">
                    Passed Quizzes
                  </p>

                  <ClipboardCheck
                    size={20}
                    className="text-sky-400"
                  />
                </div>

                <p className="mt-3 text-3xl font-bold">
                  {stats.passedQuizzes}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {stats.quizAttempts} attempts
                </p>
              </div>

              {/* Remaining Lessons */}
              <div
                className="
                  rounded-2xl
                  border
                  border-slate-700
                  bg-[#0B2340]
                  p-5
                "
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">
                    Remaining Lessons
                  </p>

                  <TrendingUp
                    size={20}
                    className="text-amber-400"
                  />
                </div>

                <p className="mt-3 text-3xl font-bold">
                  {Math.max(
                    stats.totalLessons - stats.completedLessons,
                    0
                  )}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Keep going!
                </p>
              </div>

            </div>
          </section>

          {/* =================================================
              LESSON PROGRESS
          ================================================= */}
          <section
            className="
              rounded-2xl
              border
              border-slate-700
              bg-[#0B2340]
              p-5
              sm:p-6
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold sm:text-xl">
                  Lesson Progress
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Your completed lessons compared to the total.
                </p>
              </div>

              <BookOpen
                size={22}
                className="hidden text-sky-400 sm:block"
              />
            </div>

            <div className="mt-6">

              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-slate-400">
                  Completed
                </span>

                <span className="text-sm font-medium text-white">
                  {stats.completedLessons} / {stats.totalLessons}
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-[#0F6CBD]
                    to-[#38BDF8]
                  "
                  style={{
                    width:
                      stats.totalLessons > 0
                        ? `${Math.min(
                            (stats.completedLessons /
                              stats.totalLessons) *
                              100,
                            100
                          )}%`
                        : "0%",
                  }}
                />
              </div>

            </div>
          </section>

          {/* =================================================
              QUIZ PERFORMANCE
          ================================================= */}
          <section
            className="
              rounded-2xl
              border
              border-slate-700
              bg-[#0B2340]
              p-5
              sm:p-6
            "
          >
            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-sky-400/10
                  text-sky-400
                "
              >
                <ClipboardCheck size={20} />
              </div>

              <div className="min-w-0">
                <h2 className="text-lg font-semibold sm:text-xl">
                  Quiz Performance
                </h2>

                <p className="text-sm text-slate-400">
                  Keep testing your knowledge.
                </p>
              </div>

            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

              {/* Total Attempts */}
              <div className="rounded-xl bg-[#081B2D] p-4">
                <p className="text-sm text-slate-400">
                  Total Attempts
                </p>

                <p className="mt-2 text-2xl font-bold">
                  {stats.quizAttempts}
                </p>
              </div>

              {/* Passed */}
              <div className="rounded-xl bg-[#081B2D] p-4">
                <p className="text-sm text-slate-400">
                  Passed
                </p>

                <p className="mt-2 text-2xl font-bold text-emerald-400">
                  {stats.passedQuizzes}
                </p>
              </div>

              {/* Pass Rate */}
              <div className="rounded-xl bg-[#081B2D] p-4">
                <p className="text-sm text-slate-400">
                  Pass Rate
                </p>

                <p className="mt-2 text-2xl font-bold text-sky-400">
                  {stats.quizAttempts > 0
                    ? Math.round(
                        (stats.passedQuizzes /
                          stats.quizAttempts) *
                          100
                      )
                    : 0}
                  %
                </p>
              </div>

            </div>
          </section>

        </div>
      </main>
    </div>
  );
}