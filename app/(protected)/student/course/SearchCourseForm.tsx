"use client";

import { useActionState } from "react";

import { generateCoursePreviewAction } from "@/actions/students/course/courseAction";
import CoursePreviewCard from "./CoursePreviewForm";

export default function SearchCourseForm() {
  const [state, action, isPending] = useActionState(
    generateCoursePreviewAction,
    {
      success: false,
      error: "",
      data: null,
    }
  );

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form action={action} className="space-y-4">
        <input
          type="text"
          name="topic"
          placeholder="What do you want to learn?"
          className="w-full rounded-xl border px-4 py-3"
        />

        <button
          type="submit"
          disabled={isPending}
          className="rounded-xl bg-sky-600 px-6 py-3 text-white disabled:opacity-50"
        >
          {isPending ? "Generating..." : "Generate Course"}
        </button>
      </form>

      {state.error && (
        <p className="mt-4 text-red-500">
          {state.error}
        </p>
      )}
      {state.success && state.data && (
  <CoursePreviewCard course={state.data} />
)}
    </div>
  );
}