"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";

import { verifyOtpAction } from "@/actions/auth/verifyOtp";

type ActionState = {
  success: boolean;
  message: string;
  errors: Record<string, string[]>;
};

const initialState: ActionState = {
  success: false,
  message: "",
  errors: {},
};

export default function VerifyOtpForm({ email }: { email: string }) {
  const router = useRouter();

  const [state, formAction, pending] = useActionState(
    verifyOtpAction,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      const timer = setTimeout(() => {
        router.push("/auth/login");
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [state.success, router]);

  return (
    <form action={formAction} className="space-y-5">
      {/* Email */}
      <input type="hidden" name="email" value={email} />

      {/* OTP */}
      <div>
        <label
          htmlFor="otp"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Verification code
        </label>

        <input
          id="otp"
          name="otp"
          type="text"
          maxLength={6}
          placeholder="000000"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="[0-9]{6}"
          required
          className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-[#061521]
            px-4
            py-3.5
            text-center
            text-xl
            font-semibold
            tracking-[0.45em]
            text-white
            outline-none
            placeholder:text-slate-700
            focus:border-sky-400
            focus:ring-2
            focus:ring-sky-400/10
            transition
          "
        />

        {state.errors?.otp && (
          <p className="mt-2 text-sm text-red-400">
            {state.errors.otp[0]}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={pending}
        className="
          flex
          w-full
          items-center
          justify-center
          rounded-xl
          bg-gradient-to-r
          from-[#0F6CBD]
          to-[#38BDF8]
          px-4
          py-3.5
          text-sm
          font-semibold
          text-white
          shadow-[0_0_25px_rgba(56,189,248,.15)]
          transition
          duration-300
          hover:opacity-90
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {pending ? "Verifying..." : "Verify email"}
      </button>

      {/* Message */}
      {state.message && (
        <div
          className={`
            flex
            items-start
            gap-3
            rounded-xl
            border
            p-3.5
            text-sm
            ${
              state.success
                ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                : "border-red-500/20 bg-red-500/10 text-red-400"
            }
          `}
        >
          <ShieldCheck
            size={17}
            className="mt-0.5 shrink-0"
          />

          <p>{state.message}</p>
        </div>
      )}
    </form>
  );
}