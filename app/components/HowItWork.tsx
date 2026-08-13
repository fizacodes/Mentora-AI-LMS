
import {
  Upload,
  BrainCircuit,
  FileCheck,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Material",
    description:
      "Upload PDFs, lecture notes, books, or your syllabus.",
  },
  {
    icon: BrainCircuit,
    title: "AI Understands",
    description:
      "Mentora AI analyzes your content and builds personalized lessons.",
  },
  {
    icon: FileCheck,
    title: "Practice",
    description:
      "Generate quizzes, flashcards, and mock exams instantly.",
  },
  {
    icon: TrendingUp,
    title: "Improve",
    description:
      "Track your progress and receive recommendations every day.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-28" id="howitworks">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <span className="text-sky-400 uppercase tracking-[0.25em] text-sm">
            Process
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            How Mentora AI Works
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg">
            Four simple steps to transform the way you learn.
          </p>
        </div>

        <div className="relative mt-24">

          {/* Line */}
          <div
            className="
              absolute
              top-10
              left-0
              right-0
              hidden
              lg:block
              h-[2px]
              bg-gradient-to-r
              from-transparent
              via-sky-500/40
              to-transparent
            "
          />

          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative text-center"
                >
                  <div
                    className="
                      mx-auto
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center

                      rounded-full

                      bg-gradient-to-br
                      from-[#0F6CBD]
                      to-[#38BDF8]

                      shadow-[0_0_30px_rgba(56,189,248,.35)]
                    "
                  >
                    <Icon className="text-white" size={34} />
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-slate-400 leading-7">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}