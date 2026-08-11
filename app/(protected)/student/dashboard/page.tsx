// import Link from "next/link";
// import { getStudentDashboardAction } from "@/actions/students/getStudentDashboardAction";

import { getStudentDashboardAction } from "@/actions/students/getStudentDashboardAction";
import ContinueLearning from "./ContinueLearning";
import CourseProgressChart from "./CourseProgressChart";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import DashboardStats from "./DashboardStat";
import RecentQuizScores from "./RecentQuizScores";

// export default async function StudentDashboardPage() {
//   const result = await getStudentDashboardAction();

//   if (!result.success) {
//     return (
//       <div className="min-h-screen bg-[#061521] p-6 text-white">
//         <p className="text-red-400">{result.message}</p>
//       </div>
//     );
//   }

//   const {
//     enrolledCourses,
//     overallProgress,
//     completedCourses,
//     continueLearning,
//     recentQuizScores,
//   } = result.data;

//   return (
//     <div className="min-h-screen bg-[#061521] text-white">
//       <div className="flex min-h-screen">
//         {/* Sidebar */}
//         <aside className="hidden w-64 shrink-0 border-r border-slate-800 bg-[#0B2340] lg:block">
//           <div className="sticky top-0 flex h-screen flex-col p-5">
//             {/* Logo */}
//             <div className="mb-10">
//               <h1 className="text-2xl font-bold text-[#38BDF8]">
//                 Mentora AI
//               </h1>

//               <p className="mt-1 text-xs text-slate-400">
//                 Student Learning Portal
//               </p>
//             </div>

//             {/* Navigation */}
//             <nav className="space-y-2">
//               <Link
//                 href="/student/dashboard"
//                 className="block rounded-xl bg-[#0F6CBD] px-4 py-3 font-medium"
//               >
//                 Dashboard
//               </Link>

//               <Link
//                 href="/student/courses"
//                 className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
//               >
//                 My Courses
//               </Link>

//               <Link
//                 href="/student/chat"
//                 className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
//               >
//                 AI Tutor
//               </Link>

//               <Link
//                 href="/student/profile"
//                 className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
//               >
//                 Profile
//               </Link>
//             </nav>

//             {/* Bottom */}
//             <div className="mt-auto rounded-xl border border-slate-700 bg-[#061521] p-4">
//               <p className="text-sm font-medium">
//                 Keep learning 🚀
//               </p>

//               <p className="mt-1 text-xs text-slate-400">
//                 Consistency is the key to mastering new skills.
//               </p>
//             </div>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="min-w-0 flex-1">
//           <div className="mx-auto max-w-7xl p-6 lg:p-8">
//             {/* Header */}
//             <header className="mb-8">
//               <p className="text-sm font-medium text-[#38BDF8]">
//                 Student Dashboard
//               </p>

//               <h1 className="mt-2 text-3xl font-bold tracking-tight">
//                 Welcome back 👋
//               </h1>

//               <p className="mt-2 text-slate-400">
//                 Track your progress and continue your learning journey.
//               </p>
//             </header>

//             {/* Top Stats */}
//             <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
//               {/* Overall Progress */}
//               <div className="rounded-2xl border border-slate-800 bg-[#0B2340] p-5">
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <p className="text-sm text-slate-400">
//                       Overall Progress
//                     </p>

//                     <p className="mt-2 text-3xl font-bold">
//                       {overallProgress}%
//                     </p>
//                   </div>

//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F6CBD]/20 text-xl text-[#38BDF8]">
//                     📈
//                   </div>
//                 </div>

//                 <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
//                   <div
//                     className="h-full rounded-full bg-[#0F6CBD]"
//                     style={{
//                       width: `${overallProgress}%`,
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* Enrolled Courses */}
//               <div className="rounded-2xl border border-slate-800 bg-[#0B2340] p-5">
//                 <p className="text-sm text-slate-400">
//                   Enrolled Courses
//                 </p>

//                 <p className="mt-2 text-3xl font-bold">
//                   {enrolledCourses.length}
//                 </p>

//                 <p className="mt-2 text-sm text-slate-500">
//                   Courses you're currently learning
//                 </p>
//               </div>

//               {/* Completed Courses */}
//               <div className="rounded-2xl border border-slate-800 bg-[#0B2340] p-5">
//                 <p className="text-sm text-slate-400">
//                   Completed Courses
//                 </p>

//                 <p className="mt-2 text-3xl font-bold">
//                   {completedCourses.length}
//                 </p>

//                 <p className="mt-2 text-sm text-slate-500">
//                   Courses successfully completed
//                 </p>
//               </div>
//             </section>

//             {/* Continue Learning */}
//             {continueLearning && (
//               <section className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-[#0B2340]">
//                 <div className="p-6">
//                   <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
//                     <div>
//                       <p className="text-sm font-medium text-[#38BDF8]">
//                         Continue Learning
//                       </p>

//                       <h2 className="mt-2 text-2xl font-bold">
//                         {continueLearning.title}
//                       </h2>

//                       <p className="mt-2 max-w-2xl text-sm text-slate-400">
//                         {continueLearning.description}
//                       </p>
//                     </div>

//                     {continueLearning.nextLesson && (
//                       <Link
//                         href={`/student/course/${continueLearning.id}/lesson/${continueLearning.nextLesson.id}`}
//                         className="shrink-0 rounded-xl bg-[#0F6CBD] px-5 py-3 text-center text-sm font-semibold transition hover:bg-[#0F6CBD]/80"
//                       >
//                         Continue Learning
//                       </Link>
//                     )}
//                   </div>

//                   <div className="mt-6">
//                     <div className="mb-2 flex justify-between text-sm">
//                       <span className="text-slate-400">
//                         Course progress
//                       </span>

//                       <span className="font-semibold text-[#38BDF8]">
//                         {continueLearning.progress}%
//                       </span>
//                     </div>

//                     <div className="h-2 overflow-hidden rounded-full bg-slate-800">
//                       <div
//                         className="h-full rounded-full bg-[#38BDF8]"
//                         style={{
//                           width: `${continueLearning.progress}%`,
//                         }}
//                       />
//                     </div>
//                   </div>

//                   {continueLearning.nextLesson && (
//                     <p className="mt-4 text-sm text-slate-400">
//                       Next lesson:{" "}
//                       <span className="text-slate-200">
//                         {continueLearning.nextLesson.title}
//                       </span>
//                     </p>
//                   )}
//                 </div>
//               </section>
//             )}

//             {/* Course Progress */}
//             <section className="mt-8">
//               <div className="mb-5">
//                 <h2 className="text-xl font-bold">
//                   Course Progress
//                 </h2>

//                 <p className="mt-1 text-sm text-slate-400">
//                   See how far you've progressed in each course.
//                 </p>
//               </div>

//               <div className="grid gap-5 md:grid-cols-2">
//                 {enrolledCourses.map((course) => (
//                   <div
//                     key={course.id}
//                     className="rounded-2xl border border-slate-800 bg-[#0B2340] p-5"
//                   >
//                     <div className="flex items-start justify-between gap-4">
//                       <div>
//                         <h3 className="font-semibold">
//                           {course.title}
//                         </h3>

//                         <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
//                           {course.difficulty}
//                         </p>
//                       </div>

//                       <span className="text-lg font-bold text-[#38BDF8]">
//                         {course.progress}%
//                       </span>
//                     </div>

//                     <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
//                       <div
//                         className="h-full rounded-full bg-[#0F6CBD]"
//                         style={{
//                           width: `${course.progress}%`,
//                         }}
//                       />
//                     </div>

//                     <div className="mt-3 flex justify-between text-xs text-slate-500">
//                       <span>
//                         {course.completedLessons} /{" "}
//                         {course.totalLessons} lessons
//                       </span>

//                       <Link
//                         href={
//                           course.nextLesson
//                             ? `/student/course/${course.id}/lesson/${course.nextLesson.id}`
//                             : `/student/course/${course.id}`
//                         }
//                         className="text-[#38BDF8] hover:underline"
//                       >
//                         {course.progress === 100
//                           ? "View Course"
//                           : "Continue"}
//                       </Link>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* Recent Quiz Scores */}
//             <section className="mt-8">
//               <div className="mb-5">
//                 <h2 className="text-xl font-bold">
//                   Recent Quiz Scores
//                 </h2>

//                 <p className="mt-1 text-sm text-slate-400">
//                   Your latest quiz performance.
//                 </p>
//               </div>

//               <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0B2340]">
//                 {recentQuizScores.length === 0 ? (
//                   <div className="p-6 text-center text-sm text-slate-500">
//                     No quiz attempts yet.
//                   </div>
//                 ) : (
//                   <div className="divide-y divide-slate-800">
//                     {recentQuizScores.map((quiz) => (
//                       <div
//                         key={quiz.id}
//                         className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"
//                       >
//                         <div>
//                           <h3 className="font-medium">
//                             {quiz.lessonTitle}
//                           </h3>

//                           <p className="mt-1 text-sm text-slate-500">
//                             {quiz.courseTitle}
//                           </p>
//                         </div>

//                         <div className="flex items-center gap-5">
//                           <span className="text-xl font-bold">
//                             {quiz.score}%
//                           </span>

//                           <span
//                             className={`rounded-full px-3 py-1 text-xs font-medium ${
//                               quiz.passed
//                                 ? "bg-green-500/10 text-green-400"
//                                 : "bg-red-500/10 text-red-400"
//                             }`}
//                           >
//                             {quiz.passed
//                               ? "Passed"
//                               : "Failed"}
//                           </span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </section>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
export default async function StudentDashboardPage() {
  const result = await getStudentDashboardAction();

  if (!result.success) {
    return <div>{result.message}</div>;
  }

  const { data } = result;

  return (
    <div className="flex h-screen overflow-hidden bg-[#061521]">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Dashboard Content */}
      <main className="min-w-0 flex-1 overflow-y-auto">
        <DashboardHeader />

        <div className="space-y-6 px-4 py-6 sm:px-6 lg:px-8">
          <DashboardStats
            enrolledCourses={data.enrolledCourses.length}
            completedCourses={data.completedCourses.length}
            overallProgress={data.overallProgress}
          />

          <CourseProgressChart
            courses={data.enrolledCourses}
          />

          <ContinueLearning
            course={data.continueLearning}
          />

          <RecentQuizScores
            scores={data.recentQuizScores}
          />
        </div>
      </main>
    </div>
  );
}