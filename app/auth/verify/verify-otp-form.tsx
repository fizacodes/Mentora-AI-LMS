"use client";

import { useActionState } from "react";
import { verifyOtpAction } from "@/actions/auth/verifyOtp";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

 type ActionState = {
  success: boolean;
  message: string;
  errors: Record<string, string>;
};
const initialState:ActionState = {
  success: false,
  message:"",
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
      router.push("/login");
    }, 1500);

    return () => clearTimeout(timer);
  }
}, [state.success, router]);

  return (
    <form action={formAction}>
      <input type="hidden" name="email" value={email} />

      <input
        name="otp"
        maxLength={6}
        placeholder="Enter OTP"
      />

      {state.errors?.otp && (
        <p>{state.errors.otp[0]}</p>
      )}

      <button disabled={pending}>
        {pending ? "Verifying..." : "Verify OTP"}
      </button>
 {state.message && (
  <p
    className={`rounded-lg p-3 text-sm ${
      state.success
        ? "bg-green-500/10 text-green-400"
        : "bg-red-500/10 text-red-400"
    }`}
  >
    {state.message}
  </p>
)}
    </form>
  );
}