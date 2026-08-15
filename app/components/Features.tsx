import {
  Brain,
  BookOpen,
  FileText,
  BarChart3,
  Target,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Tutor",
    description:
      "Ask questions and get clear, personalized explanations instantly.",
  },
  {
    icon: BookOpen,
    title: "Smart Notes",
    description:
      "Turn PDFs, lectures, and textbooks into concise, useful notes.",
  },
  {
    icon: FileText,
    title: "AI Practice Tests",
    description:
      "Generate quizzes with instant feedback and detailed solutions.",
  },
  {
    icon: BarChart3,
    title: "Learning Analytics",
    description:
      "Understand your strengths, weaknesses, and learning progress.",
  },
  {
    icon: Target,
    title: "Study Roadmaps",
    description:
      "Follow personalized learning paths designed around your goals.",
  },
  {
    icon: Clock3,
    title: "24/7 Tutor",
    description:
      "Get help whenever you need it, wherever you are.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden px-6 py-24 md:py-10"
    >
      {/* Background glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#0F6CBD]/[0.06]
          blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-6xl">
        {/* ================= Heading ================= */}

        <div className="mx-auto max-w-2xl text-center">
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#38BDF8]/15
              bg-[#38BDF8]/[0.05]
              px-3
              py-1.5
              text-xs
              font-medium
              tracking-wide
              text-[#38BDF8]
            "
          >
            Everything you need
          </div>

          <h2
            className="
              mt-5
              text-3xl
              font-semibold
              tracking-tight
              text-[#F8FAFC]
              md:text-4xl
            "
          >
            Learn smarter with{" "}
            <span
              className="
                bg-gradient-to-r
                from-[#0F6CBD]
                to-[#38BDF8]
                bg-clip-text
                text-transparent
              "
            >
              Mentora AI
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-[#94A3B8]
              md:text-base
            "
          >
            AI-powered tools that help you understand concepts,
            practice what you learn, and stay on track.
          </p>
        </div>

        {/* ================= Cards ================= */}

        <div
          className="
            mt-14
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#38BDF8]/20
                  hover:bg-white/[0.045]
                "
              >
                {/* Top subtle line */}

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#38BDF8]/30
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* Header */}

                <div className="flex items-start justify-between">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#38BDF8]/10
                      bg-gradient-to-br
                      from-[#0F6CBD]/20
                      to-[#38BDF8]/10
                      text-[#38BDF8]
                      transition-all
                      duration-300
                      group-hover:border-[#38BDF8]/25
                      group-hover:shadow-[0_0_20px_rgba(56,189,248,.12)]
                    "
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <span
                    className="
                      text-[11px]
                      font-medium
                      text-[#334155]
                      transition-colors
                      duration-300
                      group-hover:text-[#64748B]
                    "
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}

                <div className="mt-5">
                  <h3
                    className="
                      text-base
                      font-semibold
                      tracking-tight
                      text-[#F8FAFC]
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-[#64748B]
                      transition-colors
                      duration-300
                      group-hover:text-[#94A3B8]
                    "
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Bottom arrow */}

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-1.5
                    text-xs
                    font-medium
                    text-[#475569]
                    transition-all
                    duration-300
                    group-hover:text-[#38BDF8]
                  "
                >
                  Explore

                  <ArrowUpRight
                    size={13}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}