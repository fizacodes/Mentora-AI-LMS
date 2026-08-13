import {
  Brain,
  BookOpen,
  FileText,
  BarChart3,
  Target,
  Clock3,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Tutor",
    description:
      "Ask anything and receive personalized explanations in seconds.",
  },
  {
    icon: BookOpen,
    title: "Smart Notes",
    description:
      "Generate summarized notes from PDFs, lectures, and textbooks.",
  },
  {
    icon: FileText,
    title: "AI Practice Tests",
    description:
      "Create unlimited quizzes with instant feedback and solutions.",
  },
  {
    icon: BarChart3,
    title: "Learning Analytics",
    description:
      "Track your strengths, weaknesses, and daily progress.",
  },
  {
    icon: Target,
    title: "Study Roadmaps",
    description:
      "Receive AI-generated learning plans tailored to your goals.",
  },
  {
    icon: Clock3,
    title: "24/7 Tutor",
    description:
      "Your AI teacher is available anytime, anywhere.",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-28" id="features">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-sky-400">
            Features
          </span>

          <h2 className="mt-4 text-2xl font-bold text-white md:text-4xl">
            Everything You Need To
            <span className="block bg-gradient-to-r from-[#0F6CBD] to-[#38BDF8] bg-clip-text text-transparent">
              Learn Smarter
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] text-slate-400">
            Mentora AI combines intelligent tutoring, personalized learning,
            quizzes, notes, and progress tracking into one platform.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-sky-400/40
                  hover:bg-white/[0.06]
                  hover:shadow-[0_0_40px_rgba(56,189,248,.18)]
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#0F6CBD]
                    to-[#38BDF8]
                    shadow-[0_0_25px_rgba(56,189,248,.35)]
                  "
                >
                  <Icon size={28} className="text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}