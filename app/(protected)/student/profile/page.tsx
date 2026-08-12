import { getStudentProfileAction } from "@/actions/students/profile";
import ProfileForm from "./ProfileForm";
import DashboardSidebar from "../dashboard/DashboardSidebar";

export default async function ProfilePage() {
  const result = await getStudentProfileAction();

  if (!result.success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#061521] px-6">
        <p className="text-red-400">{result.error}</p>
      </div>
    );
  }

  const { user, stats } = result.data;

  return (
    <div className="fixed inset-0 flex overflow-hidden bg-[#061521]">

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
            max-w-5xl
            space-y-6
            px-4
            pb-10
            pt-20
            sm:space-y-8
            sm:px-6
            lg:px-8
            lg:pt-8
          "
        >

          {/* =================================================
              HEADER
          ================================================= */}
          <div>
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              Profile
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Manage your account and track your learning progress.
            </p>
          </div>

          {/* =================================================
              PROFILE CARD
          ================================================= */}
          <div className="rounded-2xl border border-slate-700 bg-[#0B2340] p-5 sm:p-6">
            <div className="flex flex-col items-center gap-4 sm:flex-row">

              {/* Avatar */}
              <div
                className="
                  flex
                  h-20
                  w-20
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  bg-[#0F6CBD]
                  text-2xl
                  font-bold
                  text-white
                  sm:h-24
                  sm:w-24
                  sm:text-3xl
                "
              >
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name ?? "Student"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  user.name?.charAt(0).toUpperCase() ?? "S"
                )}
              </div>

              {/* User Info */}
              <div className="min-w-0 text-center sm:text-left">
                <h2 className="break-words text-xl font-semibold text-white sm:text-2xl">
                  {user.name ?? "Student"}
                </h2>

                <p className="mt-1 break-all text-sm text-slate-400">
                  {user.email}
                </p>

                <span
                  className="
                    mt-3
                    inline-block
                    rounded-full
                    bg-[#0F6CBD]/20
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-[#38BDF8]
                  "
                >
                  {user.role}
                </span>
              </div>

            </div>
          </div>

          {/* =================================================
              PERSONAL INFORMATION
          ================================================= */}
          <div className="rounded-2xl border border-slate-700 bg-[#0B2340] p-5 sm:p-6">

            <h2 className="text-lg font-semibold text-white sm:text-xl">
              Personal Information
            </h2>

            <div className="mt-5 sm:mt-6">
              <ProfileForm
                name={user.name}
                email={user.email}
              />
            </div>

          </div>

          {/* =================================================
              LEARNING OVERVIEW
          ================================================= */}
          <div>

            <h2 className="mb-4 text-lg font-semibold text-white sm:text-xl">
              Learning Overview
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {/* Enrolled Courses */}
              <div className="rounded-2xl border border-slate-700 bg-[#0B2340] p-5">
                <p className="text-sm text-slate-400">
                  Enrolled Courses
                </p>

                <p className="mt-2 text-3xl font-bold text-white">
                  {stats.enrolledCourses}
                </p>
              </div>

              {/* Overall Progress */}
              <div className="rounded-2xl border border-slate-700 bg-[#0B2340] p-5">
                <p className="text-sm text-slate-400">
                  Overall Progress
                </p>

                <p className="mt-2 text-3xl font-bold text-[#38BDF8]">
                  {stats.progressPercentage}%
                </p>
              </div>

              {/* Completed Lessons */}
              <div className="rounded-2xl border border-slate-700 bg-[#0B2340] p-5">
                <p className="text-sm text-slate-400">
                  Completed Lessons
                </p>

                <p className="mt-2 text-3xl font-bold text-white">
                  {stats.completedLessons}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  of {stats.totalLessons} lessons
                </p>
              </div>

              {/* Passed Quizzes */}
              <div className="rounded-2xl border border-slate-700 bg-[#0B2340] p-5">
                <p className="text-sm text-slate-400">
                  Passed Quizzes
                </p>

                <p className="mt-2 text-3xl font-bold text-white">
                  {stats.passedQuizzes}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {stats.quizAttempts} attempts
                </p>
              </div>

            </div>
          </div>

          {/* =================================================
              ACCOUNT INFORMATION
          ================================================= */}
          <div className="rounded-2xl border border-slate-700 bg-[#0B2340] p-5 sm:p-6">

            <h2 className="text-lg font-semibold text-white sm:text-xl">
              Account
            </h2>

            <div className="mt-4">

              <p className="text-sm text-slate-400">
                Member since
              </p>

              <p className="mt-1 text-white">
                {user.createdAt.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

            </div>

          </div>

        </div>
      </main>
    </div>
  );
}