"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

import type { CoursePreview } from "@/type/response";
import { enrollCourseAction } from "@/actions/students/course/enrollCourseAction";

type Props = {
  course: CoursePreview;
};

const initialState = {
  success: false,
  error: "",
};

export default function EnrollButton({
  course,
}: Props) {
  const router = useRouter();

  const [state, action, isPending] = useActionState(
    enrollCourseAction,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      router.push("/student/course/enrolled");
    }
  }, [state, router]);

  return (
   <form action={action}>
  <input
    type="hidden"
    name="course"
    value={JSON.stringify(course)}
  />

  <button
    type="submit"
    disabled={isPending}
    className="rounded-xl bg-sky-600 px-6 py-3 text-white disabled:opacity-50"
  >
    {isPending ? "Enrolling..." : "Enroll Course"}
  </button>

  {state.error && (
    <p className="mt-2 text-red-500">
      {state.error}
    </p>
  )}
</form>
  );
}