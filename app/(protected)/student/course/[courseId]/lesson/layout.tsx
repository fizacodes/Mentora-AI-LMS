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

      {/* =====================================================
          COURSE SIDEBAR
          CourseSidebar handles desktop + mobile itself
      ===================================================== */}
      <CourseSidebar
        course={result.data}
        progress={0}
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <main className="min-h-0 min-w-0 flex-1 overflow-y-auto">
        <div
          className="
            mx-auto
            w-full
            max-w-5xl
            px-4
            pb-8
            pt-10
            sm:px-6
            sm:pt-10
            lg:px-10
            lg:pt-8
          "
        >
          {children}
        </div>
      </main>
    </div>
  );
}