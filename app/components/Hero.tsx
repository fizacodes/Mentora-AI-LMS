import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        px-6
        pt-32
      "
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#38BDF8]/10 blur-[120px]" />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-6xl
          items-center
          gap-16
          md:grid-cols-2
        "
      >
        {/* ================= Left Content ================= */}
        <div>
          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.06]
              px-4
              py-2
              text-sm
              text-[#CBD5E1]
              backdrop-blur-xl
            "
          >
            <Sparkles size={16} className="text-[#38BDF8]" />
            AI Powered Learning
          </div>

          {/* Heading */}
          <h1
            className="
              mt-6
              text-5xl
              font-bold
              leading-tight
              text-[#F8FAFC]
              md:text-6xl
            "
          >
            Your Personal
            <br />

            <span
              className="
                bg-gradient-to-r
                from-[#0F6CBD]
                to-[#38BDF8]
                bg-clip-text
                text-transparent
              "
            >
              AI Tutor
            </span>

            <br />

            Anytime
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-xl
              text-lg
              leading-relaxed
              text-[#CBD5E1]
            "
          >
            Learn smarter with an AI tutor that understands your goals,
            explains concepts, creates personalized quizzes, and helps you
            master every subject faster.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              className="
                rounded-full
                bg-gradient-to-r
                from-[#0F6CBD]
                to-[#38BDF8]
                px-7
                py-3
                font-medium
                text-white
                shadow-[0_0_25px_rgba(56,189,248,.35)]
                transition
                duration-300
                hover:scale-105
              "
            >
              Start Learning
            </button>

            <button
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.06]
                px-7
                py-3
                text-[#F8FAFC]
                backdrop-blur-xl
                transition
                duration-300
                hover:bg-white/10
              "
            >
              Explore Features
            </button>
          </div>
        </div>

        {/* ================= Right Content ================= */}
        <div
          className="
            relative
            flex
            items-center
            justify-center
            rounded-full
          "
        >
          {/* Blue Glow */}
          <div
            className="
              absolute
              h-[420px]
              w-[420px]
              rounded-full
              bg-[#38BDF8]/20
              blur-[90px]
            "
          />

          {/* Extra Glow */}
          <div
            className="
              absolute
              top-10
              left-8
              h-24
              w-24
              rounded-full
              bg-[#0F6CBD]/30
              blur-3xl
            "
          />

          <div
            className="
              absolute
              bottom-10
              right-10
              h-32
              w-32
              rounded-full
              bg-[#38BDF8]/20
              blur-3xl
            "
          />

          {/* Hero Image */}
          <Image
            src="/Hero.png"
            alt="AI Tutor"
            width={600}
            height={600}
            priority
            className="
              relative
              z-10
              h-auto
              w-full
             
              object-contain
              animate-float
              drop-shadow-[0_25px_60px_rgba(56,189,248,.35)]
              transition-transform
              duration-500
              hover:scale-105
            "
          />
        </div>
      </div>
    </section>
  );
}