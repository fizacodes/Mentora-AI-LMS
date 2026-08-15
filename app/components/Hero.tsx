
import {
  BookOpen,
  Bot,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  MessageCircle,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        px-6
        pb-2
        pt-34
      "
    >
      {/* ================= Background ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-20
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-[#0F6CBD]/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-[-100px]
            top-[35%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#38BDF8]/[0.07]
            blur-[120px]
          "
        />
      </div>

      {/* ================= Main Hero ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-16
          lg:grid-cols-[0.9fr_1.1fr]
        "
      >
        {/* ================= LEFT ================= */}

        <div>
          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#38BDF8]/20
              bg-[#38BDF8]/[0.06]
              px-4
              py-2
              text-sm
              text-[#CBD5E1]
              backdrop-blur-xl
            "
          >
            <Sparkles
              size={15}
              className="text-[#38BDF8]"
            />

            AI Powered Learning
          </div>

          {/* Heading */}

          <h1
            className="
              mt-7
              max-w-2xl
              text-4xl
              font-bold
              leading-[1.08]
              tracking-tight
              text-[#F8FAFC]
              sm:text-3xl
              lg:text-4xl
            "
          >
            Your Personal

            <br />

            <span
              className="
                bg-gradient-to-r
                from-[#0F6CBD]
                via-[#20A4E8]
                to-[#38BDF8]
                bg-clip-text
                text-transparent
              "
            >
              AI Tutor
            </span>

            <br />

            for Smarter Learning
          </h1>

          {/* Description */}

          <p
            className="
              mt-7
              max-w-xl
              text-base
              leading-7
              text-[#94A3B8]
              sm:text-sm
            "
          >
            Learn smarter with an AI tutor that understands
            your goals, explains concepts clearly, creates
            personalized quizzes, and helps you master
            every subject faster.
          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-[#0F6CBD]
                to-[#38BDF8]
                px-6
                py-3
                text-sm
                font-medium
                text-white
                shadow-[0_0_30px_rgba(56,189,248,0.22)]
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:shadow-[0_0_40px_rgba(56,189,248,0.32)]
              "
            >
              Start Learning

              <ChevronRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

            <button
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-6
                py-3
                text-sm
                font-medium
                text-[#E2E8F0]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-white/20
                hover:bg-white/[0.08]
              "
            >
              <MessageCircle size={17} />

              Explore Features
            </button>
          </div>

          {/* Small Benefits */}

          <div
            className="
              mt-10
              grid
              max-w-xl
              grid-cols-3
              gap-5
            "
          >
            <MiniBenefit
              icon={<Bot size={18} />}
              title="Personalized"
              description="For you"
            />

            <MiniBenefit
              icon={<Sparkles size={18} />}
              title="24/7"
              description="Available"
            />

            <MiniBenefit
              icon={<TrendingUp size={18} />}
              title="Track"
              description="Your progress"
            />
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="relative">
          {/* Dashboard Glow */}

          <div
            className="
              pointer-events-none
              absolute
              inset-10
              rounded-[40px]
              bg-[#0F6CBD]/20
              blur-[90px]
            "
          />

          {/* Floating Personalized Badge */}

          <div
            className="
              absolute
              -right-3
              -top-8
              z-30
              hidden
              rounded-2xl
              border
              border-[#38BDF8]/30
              bg-[#071A2A]/90
              px-4
              py-3
              shadow-2xl
              backdrop-blur-xl
              sm:block
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#38BDF8]/10
                  text-[#38BDF8]
                "
              >
                <Sparkles size={18} />
              </div>

              <div>
                <p className="text-xs text-[#94A3B8]">
                  Learning experience
                </p>

                <p className="text-sm font-medium text-white">
                  Personalized for you
                </p>
              </div>
            </div>
          </div>

          {/* ================= Dashboard ================= */}

          <div
            className="
              relative
              z-20
              overflow-hidden
              rounded-[28px]
              border
              border-[#38BDF8]/20
              bg-[#071724]/95
              shadow-[0_30px_100px_rgba(0,0,0,0.45)]
              backdrop-blur-xl
            "
          >
            {/* Dashboard Top */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/[0.07]
                px-5
                py-4
              "
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-[#0F6CBD]
                    to-[#38BDF8]
                    text-white
                  "
                >
                  <Sparkles size={17} />
                </div>

                <span className="font-semibold text-white">
                  Mentora <span className="text-[#38BDF8]">AI</span>
                </span>
              </div>

              <div
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-3
                  py-1.5
                  text-xs
                  text-[#CBD5E1]
                "
              >
                Streak 🔥 7
              </div>
            </div>

            {/* Dashboard Body */}

            <div className="grid min-h-[420px] grid-cols-[145px_1fr]">
              {/* Sidebar */}

              <div
                className="
                  border-r
                  border-white/[0.07]
                  p-4
                "
              >
                <DashboardNav
                  icon={<MessageCircle size={16} />}
                  label="Chat"
                  active
                />

                <DashboardNav
                  icon={<BookOpen size={16} />}
                  label="Courses"
                />

                <DashboardNav
                  icon={<ClipboardList size={16} />}
                  label="Quizzes"
                />

                <DashboardNav
                  icon={<TrendingUp size={16} />}
                  label="Progress"
                />

                {/* Goal */}

                <div
                  className="
                    mt-8
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-white/[0.03]
                    p-3
                  "
                >
                  <p className="text-[11px] text-[#94A3B8]">
                    Today's Goal
                  </p>

                  <p className="mt-1 text-xs font-medium text-white">
                    2/5 topics completed
                  </p>

                  <div
                    className="
                      mt-3
                      h-1.5
                      overflow-hidden
                      rounded-full
                      bg-white/10
                    "
                  >
                    <div
                      className="
                        h-full
                        w-[40%]
                        rounded-full
                        bg-gradient-to-r
                        from-[#0F6CBD]
                        to-[#38BDF8]
                      "
                    />
                  </div>
                </div>
              </div>

              {/* Chat */}

              <div className="flex flex-col p-6">
                <div className="mb-7">
                  <p className="text-sm text-[#94A3B8]">
                    Hi there! 👋
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-white">
                    What would you like to learn today?
                  </h3>
                </div>

                {/* User Message */}

                <div className="flex justify-end">
                  <div
                    className="
                      max-w-[80%]
                      rounded-2xl
                      rounded-br-md
                      bg-[#0F6CBD]/20
                      px-4
                      py-3
                      text-sm
                      text-[#E2E8F0]
                    "
                  >
                    Explain photosynthesis in simple terms.
                  </div>
                </div>

                {/* AI Message */}

                <div className="mt-5 flex gap-3">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#38BDF8]/10
                      text-[#38BDF8]
                    "
                  >
                    <Bot size={18} />
                  </div>

                  <div
                    className="
                      max-w-[90%]
                      rounded-2xl
                      rounded-tl-md
                      border
                      border-white/[0.06]
                      bg-white/[0.035]
                      px-4
                      py-3
                    "
                  >
                    <p className="text-sm leading-6 text-[#CBD5E1]">
                      Photosynthesis is how plants make
                      their own food using sunlight, water,
                      and carbon dioxide. 🌱
                    </p>
                  </div>
                </div>

                {/* Quick Actions */}

                <div className="mt-5 flex flex-wrap gap-2">
                  <QuickAction label="Explain with example" />

                  <QuickAction label="Make it shorter" />

                  <QuickAction label="Quiz me" />
                </div>

                {/* Input */}

                <div
                  className="
                    mt-auto
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    px-4
                    py-3
                  "
                >
                  <span className="flex-1 text-sm text-[#64748B]">
                    Ask anything...
                  </span>

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-r
                      from-[#0F6CBD]
                      to-[#38BDF8]
                      text-white
                    "
                  >
                    <ChevronRight size={17} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Quiz Card */}

          <div
            className="
              absolute
              -bottom-7
              -left-8
              z-30
              hidden
              rounded-2xl
              border
              border-[#38BDF8]/20
              bg-[#071A2A]/95
              px-4
              py-3
              shadow-2xl
              backdrop-blur-xl
              sm:block
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#38BDF8]/10
                  text-[#38BDF8]
                "
              >
                <CheckCircle2 size={18} />
              </div>

              <div>
                <p className="text-xs font-medium text-white">
                  Quiz Generated
                </p>

                <p className="text-[11px] text-[#64748B]">
                  12 questions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Feature Strip ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-10
          grid
          max-w-7xl
          overflow-hidden
          rounded-3xl
          border
          border-white/[0.07]
          bg-white/[0.025]
          backdrop-blur-xl
          md:grid-cols-4
        "
      >
        <Feature
          icon={<Bot size={21} />}
          title="AI Tutor"
          description="Instant answers and clear explanations"
        />

        <Feature
          icon={<BookOpen size={21} />}
          title="Smart Courses"
          description="Structured learning tailored to you"
        />

        <Feature
          icon={<ClipboardList size={21} />}
          title="Quizzes & Tests"
          description="Practice and test your knowledge"
        />

        <Feature
          icon={<TrendingUp size={21} />}
          title="Track Progress"
          description="See your learning progress"
        />
      </div>
    </section>
  );
}

/* ================= Components ================= */

function MiniBenefit({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-[#38BDF8]/10
          bg-[#38BDF8]/[0.06]
          text-[#38BDF8]
        "
      >
        {icon}
      </div>

      <div>
        <p className="text-xs font-medium text-[#E2E8F0]">
          {title}
        </p>

        <p className="text-[11px] text-[#64748B]">
          {description}
        </p>
      </div>
    </div>
  );
}

function DashboardNav({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`
        mb-2
        flex
        items-center
        gap-2.5
        rounded-xl
        px-3
        py-2.5
        text-xs
        transition
        ${
          active
            ? "border border-[#38BDF8]/10 bg-[#38BDF8]/[0.08] text-white"
            : "text-[#64748B] hover:bg-white/[0.03] hover:text-[#CBD5E1]"
        }
      `}
    >
      {icon}

      {label}
    </div>
  );
}

function QuickAction({ label }: { label: string }) {
  return (
    <button
      className="
        rounded-full
        border
        border-white/10
        bg-white/[0.02]
        px-3
        py-1.5
        text-[11px]
        text-[#94A3B8]
        transition
        hover:border-[#38BDF8]/20
        hover:text-[#E2E8F0]
      "
    >
      {label}
    </button>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        flex
        gap-4
        border-b
        border-white/[0.07]
        p-6
        last:border-b-0
        md:border-b-0
        md:border-r
        md:last:border-r-0
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-[#38BDF8]/10
          bg-[#38BDF8]/[0.06]
          text-[#38BDF8]
        "
      >
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-[#64748B]">
          {description}
        </p>
      </div>
    </div>
  );
}