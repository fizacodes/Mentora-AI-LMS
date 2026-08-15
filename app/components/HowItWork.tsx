import {
  Upload,
  BrainCircuit,
  FileCheck,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Material",
    description:
      "Add PDFs, lecture notes, books, or your syllabus.",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI Understands",
    description:
      "Mentora analyzes your material and understands what you need to learn.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Practice",
    description:
      "Generate quizzes and practice questions based on your content.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Improve",
    description:
      "Track your progress and continuously improve your weak areas.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="howitworks"
      className="
        relative
        overflow-hidden
        px-6
        py-10
      "
    >
      {/* ================= Background Glow ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#0F6CBD]/[0.05]
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-6xl">

        {/* ================= Heading ================= */}

        <div className="mx-auto max-w-2xl text-center">

          <span
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.25em]
              text-[#38BDF8]
            "
          >
            How it works
          </span>

          <h2
            className="
              mt-4
              text-3xl
              font-semibold
              tracking-tight
              text-[#F8FAFC]
              md:text-4xl
            "
          >
            From material to{" "}
            <span
              className="
                bg-gradient-to-r
                from-[#0F6CBD]
                to-[#38BDF8]
                bg-clip-text
                text-transparent
              "
            >
              mastery
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-lg
              text-sm
              leading-6
              text-[#94A3B8]
              md:text-base
            "
          >
            Mentora turns your learning material into a
            personalized learning experience.
          </p>

        </div>

        {/* ================= Process ================= */}

        <div className="relative mt-20">

          {/* Static Connecting Line */}

          <div
            className="
              absolute
              left-[12.5%]
              right-[12.5%]
              top-[38px]
              hidden
              h-px
              bg-white/[0.08]
              lg:block
            "
          />

          {/* Animated Connecting Line */}

          <div
            className="
              absolute
              left-[12.5%]
              top-[38px]
              hidden
              h-px
              w-[75%]
              origin-left
              bg-gradient-to-r
              from-[#0F6CBD]
              via-[#20A4E8]
              to-[#38BDF8]
              opacity-70
              lg:block
              animate-[processLine_4s_ease-in-out_infinite]
            "
          />

          {/* Steps */}

          <div
            className="
              grid
              gap-14
              sm:grid-cols-2
              lg:grid-cols-4
              lg:gap-8
            "
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="
                    group
                    relative
                    text-center
                  "
                >

                  {/* ================= Number ================= */}

                  <div
                    className="
                      mb-4
                      text-[11px]
                      font-medium
                      tracking-[0.2em]
                      text-[#475569]
                      transition-colors
                      duration-300
                      group-hover:text-[#38BDF8]
                    "
                  >
                    {step.number}
                  </div>

                  {/* ================= Icon Circle ================= */}

                  <div
                    className="
                      relative
                      z-10
                      mx-auto
                      flex
                      h-[76px]
                      w-[76px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-[#061521]
                      text-[#64748B]
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:border-[#38BDF8]/50
                      group-hover:text-[#38BDF8]
                      group-hover:shadow-[0_0_35px_rgba(56,189,248,.18)]
                    "
                  >

                    {/* Inner Ring */}

                    <div
                      className="
                        absolute
                        inset-2
                        rounded-full
                        border
                        border-white/[0.05]
                        transition-all
                        duration-500
                        group-hover:border-[#38BDF8]/20
                      "
                    />

                    {/* Icon */}

                    <Icon
                      size={25}
                      strokeWidth={1.7}
                      className="
                        relative
                        z-10
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    />

                    {/* Pulse Ring */}

                    <span
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-full
                        border
                        border-[#38BDF8]/0
                        transition-all
                        duration-500
                        group-hover:scale-[1.35]
                        group-hover:border-[#38BDF8]/10
                      "
                    />

                  </div>

                  {/* ================= Content ================= */}

                  <div
                    className="
                      mx-auto
                      mt-7
                      max-w-[220px]
                    "
                  >

                    <h3
                      className="
                        text-base
                        font-semibold
                        text-[#F8FAFC]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-[#64748B]
                      "
                    >
                      {step.description}
                    </p>

                  </div>

                  {/* ================= Mobile Connector ================= */}

                  {index !== steps.length - 1 && (
                    <div
                      className="
                        absolute
                        left-1/2
                        top-[115px]
                        h-14
                        w-px
                        -translate-x-1/2
                        bg-gradient-to-b
                        from-[#38BDF8]/20
                        to-transparent
                        sm:hidden
                      "
                    />
                  )}

                </div>
              );
            })}
          </div>

        </div>

        {/* ================= Bottom Statement ================= */}

        <div className="mt-20 text-center">

          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/[0.06]
              bg-white/[0.02]
              px-5
              py-2.5
              text-xs
              text-[#64748B]
            "
          >

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#38BDF8]
                shadow-[0_0_8px_#38BDF8]
              "
            />

            Learn at your own pace

          </div>

        </div>

      </div>
    </section>
  );
}