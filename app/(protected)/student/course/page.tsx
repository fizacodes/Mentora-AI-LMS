import {
  ArrowDown,
  BookOpen,
  BrainCircuit,
  Sparkles,
  WandSparkles,
} from "lucide-react";

import SearchCourseForm from "./SearchCourseForm";
import BackButton from "@/app/components/BackButton";

export default function CoursePage() {
  return (
    <main className="min-h-full bg-[#061521] px-4 py-6 sm:px-6 lg:px-8">
      <BackButton/>
      <div className="mx-auto w-full max-w-5xl">

        {/* Hero */}
        <section
          className="
            relative
            overflow-hidden
            rounded-3xl
            border border-slate-700/40
            bg-[#081B2D]
            px-6 py-12
            shadow-2xl
            shadow-black/20
            sm:px-10
            sm:py-16
          "
        >
          {/* Decorative glow */}
          <div
            className="
              pointer-events-none
              absolute -right-24 -top-24
              h-72 w-72
              rounded-full
              bg-sky-400/10
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute -bottom-32 -left-20
              h-72 w-72
              rounded-full
              bg-blue-600/10
              blur-3xl
            "
          />

          {/* Small badge */}
          <div className="relative flex justify-center">
            <div
              className="
                inline-flex
                items-center gap-2
                rounded-full
                border border-sky-400/20
                bg-sky-400/10
                px-3.5 py-1.5
                text-xs
                font-medium
                text-sky-400
              "
            >
              <Sparkles size={14} />

              AI-Powered Learning
            </div>
          </div>

          {/* Heading */}
          <div className="relative mx-auto mt-6 max-w-3xl text-center">
            <h1
              className="
                text-4xl
                font-bold
                tracking-tight
                text-white
                sm:text-3xl
                lg:text-5xl
              "
            >
              Discover Your
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-sky-400
                  via-cyan-300
                  to-blue-400
                  bg-clip-text
                  text-transparent
                "
              >
                Next Course
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-3
                max-w-2xl
                text-sm
                leading-7
                text-slate-400
                sm:text-base
              "
            >
              Search any topic and let Mentora AI create
              a personalized learning path designed around
              what you want to learn.
            </p>
          </div>

          {/* Feature indicators */}
          <div
            className="
              relative
              mx-auto mt-5
              flex max-w-xl
              flex-wrap
              justify-center
              gap-3
            "
          >
            <Feature
              icon={BrainCircuit}
              text="AI Generated"
            />

            <Feature
              icon={BookOpen}
              text="Structured Lessons"
            />

            <Feature
              icon={WandSparkles}
              text="Personalized Path"
            />
          </div>

          {/* Search / Generator */}
          <div className="relative mx-auto mt-10 max-w-3xl">
            <SearchCourseForm />
          </div>
        </section>

        {/* Bottom hint */}
        <div className="mt-5 flex justify-center">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span>Explore</span>

            <ArrowDown
              size={14}
              className="animate-bounce text-sky-400/60"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

function Feature({
  icon: Icon,
  text,
}: {
  icon: typeof BrainCircuit;
  text: string;
}) {
  return (
    <div
      className="
        flex items-center gap-2
        rounded-full
        border border-slate-700/50
        bg-[#061521]/60
        px-3.5 py-2
        text-xs
        text-slate-400
        backdrop-blur-sm
      "
    >
      <Icon
        size={14}
        className="text-sky-400"
      />

      {text}
    </div>
  );
}