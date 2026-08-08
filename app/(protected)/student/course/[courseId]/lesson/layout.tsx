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

  const result =
    await getCourseDetailsAction(courseId);

  if (!result.success) {
    return (
      <div className="p-6">
        {result.message}
      </div>
    );
  }

  return (
    <div className="grid min-h-screen grid-cols-12">
      <aside className="col-span-3 border-r hidden lg:block">
        <CourseSidebar course={result.data} />
      </aside>

      <main className="col-span-12 lg:col-span-9">
        {children}
      </main>
    </div>
  );
}