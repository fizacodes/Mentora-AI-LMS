import { ReactNode } from "react";

import { getCourseDetailsAction } from "@/actions/students/course/courseAction";
import CourseSidebar from "../CourseSidebar";

type Props = {
  children: ReactNode;

  params: Promise<{
    courseId: string;
  }>;
};

export default async function LessonLayout({
  children,
  params,
}: Props) {
  const { courseId } = await params;

  const result = await getCourseDetailsAction(courseId);

  if (!result.success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#061521] px-6">
        <div className="rounded-2xl border border-red-500/20 bg-[#081B2D] p-8 text-red-400">
          {result.message}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex overflow-hidden bg-[#061521]">
      {/* ================= SIDEBAR ================= */}

      <aside className="hidden h-full w-80 shrink-0 overflow-hidden border-r border-slate-800 lg:block">
        <CourseSidebar
          course={result.data}
          progress={0}
        />
      </aside>

      {/* ================= MAIN CONTENT ================= */}

      <main className="min-h-0 min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-5xl px-6 py-8 lg:px-10">
          {children}
        </div>
      </main>
    </div>
  );
}