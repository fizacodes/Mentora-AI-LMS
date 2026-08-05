import {
  Brain,
  BookOpen,
 Sparkles,
  BarChart3,
  Target,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Personalized Learning",
    description: "AI adapts every lesson to your pace and understanding.",
  },
  {
    icon: Sparkles,
    title: "AI Quizzes",
    description: "Generate unlimited quizzes with instant feedback.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed insights.",
  }
];

export default function AIShowcase() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">
              Meet Your AI Study Partner
            </span>

            <h2 className="mt-2 text-3xl font-bold leading-tight text-white md:text-4xl">
              Everything You Need
              <span className="block bg-gradient-to-r from-[#0F6CBD] to-[#38BDF8] bg-clip-text text-transparent">
                To Learn Faster
              </span>
            </h2>

            <p className="mt-2 max-w-lg text-s, leading-8 text-slate-400">
              One intelligent platform that teaches, explains, quizzes,
              summarizes, and tracks your progress—all in one place.
            </p>

            {/* Feature List */}
            <div className="mt-5 space-y-5">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group flex items-start gap-4"
                  >
                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#0F6CBD] group-hover:to-[#38BDF8] group-hover:text-white">
                      <Icon size={20} />
                    </div>

                    {/* Text */}
                    <div className="flex-1 border-b border-white/10 pb-5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">
                          {feature.title}
                        </h3>

                        <ArrowRight
                          size={18}
                          className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-sky-400"
                        />
                      </div>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            {/* Glow */}
            <div className="absolute h-[600px] w-[420px] rounded-full bg-sky-500/20 blur-[100px]" />

            {/* Dashboard */}
            <div className="relative w-full max-w-xl rounded-[32px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl shadow-[0_20px_80px_rgba(56,189,248,.15)]">
              <img
                src="/image.png"
                alt="Mentora Dashboard"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}