import { ShieldCheck, Sparkles } from "lucide-react";
import VerifyOtpForm from "./verify-otp-form";

export default async function VerifyOtpPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const { email } = await searchParams;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#061521] px-4 py-10">
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-sky-500/[0.05]
          blur-3xl
        "
      />

      <div className="relative w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2.5">
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-[#0F6CBD]
                to-[#38BDF8]
                shadow-[0_0_25px_rgba(56,189,248,.3)]
              "
            >
              <Sparkles size={20} className="text-white" />
            </div>

            <span className="text-xl font-semibold tracking-tight text-white">
              Mentora <span className="text-sky-400">AI</span>
            </span>
          </div>
        </div>

        {/* Verification Card */}
        <div
          className="
            rounded-2xl
            border
            border-white/[0.08]
            bg-[#0B2340]
            p-6
            shadow-2xl
            shadow-black/20
            sm:p-8
          "
        >
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-sky-400/15
                bg-sky-400/10
                text-sky-400
              "
            >
              <ShieldCheck
                size={28}
                strokeWidth={1.7}
              />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Verify your email
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Enter the verification code we sent to your email address.
            </p>

            {email && (
              <p className="mt-2 break-all text-sm font-medium text-sky-400">
                {email}
              </p>
            )}
          </div>

          {/* Existing Form */}
          <div className="mt-7">
            <VerifyOtpForm email={email ?? ""} />
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-center text-xs text-slate-600">
          Your verification code is valid for a limited time.
        </p>
      </div>
    </main>
  );
}