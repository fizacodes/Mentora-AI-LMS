"use client";

// import { useActionState } from "react";

// import { generateCoursePreviewAction } from "@/actions/students/course/courseAction";
// import CoursePreviewCard from "./CoursePreviewForm";

// export default function SearchCourseForm() {
//   const [state, action, isPending] = useActionState(
//     generateCoursePreviewAction,
//     {
//       success: false,
//       error: "",
//       data: null,
//     }
//   );

//   return (
//     <div className="w-full max-w-3xl mx-auto">
//       <form action={action} className="space-y-4">
//         <input
//           type="text"
//           name="topic"
//           placeholder="What do you want to learn?"
//           className="w-full rounded-xl border px-4 py-3"
//         />

//         <button
//           type="submit"
//           disabled={isPending}
//           className="rounded-xl bg-sky-600 px-6 py-3 text-white disabled:opacity-50"
//         >
//           {isPending ? "Generating..." : "Generate Course"}
//         </button>
//       </form>

//       {state.error && (
//         <p className="mt-4 text-red-500">
//           {state.error}
//         </p>
//       )}
//       {state.success && state.data && (
//   <CoursePreviewCard course={state.data} />
// )}
//     </div>
//   );
// }"use client";

import { useActionState } from "react";
import { Sparkles } from "lucide-react";

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
    <div className="mx-auto w-full max-w-3xl">
      {/* Generator Card */}
      <div
        className="
          overflow-hidden
          rounded-2xl
          border border-slate-700/50
          bg-[#081B2D]
          shadow-xl shadow-black/20
        "
      >
        {/* Subtle top accent */}
        <div
          className="
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#38BDF8]/60
            to-transparent
          "
        />

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="mb-7 flex items-start gap-4">
            <div
              className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                rounded-xl
                border border-sky-400/20
                bg-sky-400/10
                text-sky-400
              "
            >
              <Sparkles size={20} />
            </div>

            <div>
              <h1 className="text-xl font-semibold tracking-tight text-white">
                Create a New Course
              </h1>

              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                Tell Mentora AI what you want to learn and
                generate a personalized course for you.
              </p>
            </div>
          </div>

          {/* Form */}
          <form action={action} className="space-y-5">
            <div>
              <label
                htmlFor="topic"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                What do you want to learn?
              </label>

              <input
                id="topic"
                type="text"
                name="topic"
                placeholder="e.g. React, Python, Machine Learning..."
                disabled={isPending}
                className="
                  w-full
                  rounded-xl
                  border border-slate-700/60
                  bg-[#061521]
                  px-4 py-3.5
                  text-sm
                  text-white
                  outline-none
                  transition
                  placeholder:text-slate-600
                  hover:border-slate-600
                  focus:border-sky-400/50
                  focus:ring-4
                  focus:ring-sky-400/10
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              />

              <p className="mt-2 text-xs text-slate-600">
                Enter a topic you'd like Mentora AI to teach you.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isPending}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-[#0F6CBD]
                to-[#38BDF8]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-sky-950/30
                transition-all
                duration-200
                hover:brightness-110
                active:scale-[0.99]
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              <Sparkles size={16} />

              {isPending
                ? "Generating..."
                : "Generate Course"}
            </button>
          </form>

          {/* Error */}
          {state.error && (
            <div
              className="
                mt-5
                rounded-xl
                border border-red-400/20
                bg-red-400/5
                px-4
                py-3
              "
            >
              <p className="text-sm text-red-400">
                {state.error}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Course Preview */}
      {state.success && state.data && (
        <div className="mt-6">
          <CoursePreviewCard course={state.data} />
        </div>
      )}
    </div>
  );
}