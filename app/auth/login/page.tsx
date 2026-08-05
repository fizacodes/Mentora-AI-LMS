"use client"

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useActionState } from "react";
import { loginAction } from "@/actions/auth/authaction";
import { signIn } from "next-auth/react";

type ActionState={
  success:Boolean,
  message:string
}
const initialState:ActionState={
  success:false,
  message:""
}
export default function LoginPage() {
  const [state,formAction,pending]=useActionState(
    loginAction,
    initialState
  )
   
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07111F] px-4">

      {/* Background Glow */}
      <div className="absolute -left-40 top-10 h-[350px] w-[350px] rounded-full bg-sky-500/10 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[140px]" />

      {/* Login Card */}
      <div
        className="
          relative
          w-full
          max-w-md
          rounded-3xl
          border
          border-white/10
          bg-white/[0.05]
          p-8
          backdrop-blur-xl
          shadow-[0_20px_70px_rgba(56,189,248,.15)]
        "
      >
        {/* Logo */}
        <div className="flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0F6CBD] to-[#38BDF8] text-xl font-bold text-white shadow-[0_0_25px_rgba(56,189,248,.35)]">
            M
          </div>
        </div>

        {/* Heading */}
        <div className="mt-4 text-center">
          <h1 className="text-3xl font-semibold text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Sign in to continue learning with Mentora AI.
          </p>
        </div>

        {/* Form */}
        <form action={formAction} className="mt-4 space-y-5">

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-3
                text-white
                outline-none
                transition
                placeholder:text-slate-500
                focus:border-sky-400
              "
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm text-slate-300">
                Password
              </label>

              <Link
                href="/forgot-password"
                className="text-sm text-sky-400 hover:text-sky-300"
              >
                Forgot?
              </Link>
            </div>

            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-3
                text-white
                outline-none
                transition
                placeholder:text-slate-500
                focus:border-sky-400
              "
            />
          </div>

          <button
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-[#0F6CBD]
              to-[#38BDF8]
              py-3
              font-medium
              text-white
              transition
              hover:scale-[1.02]
            "
          >
            Sign In
            <ArrowRight size={18} />
          </button>
         {
  state.message && (
    <p
      className={
        state.success
          ? "text-green-500 text-sm"
          : "text-red-500 text-sm"
      }
    >
      {state.message}
    </p>
  )
}
        </form>

        {/* Divider */}
        <div className="my-3 flex items-center">
          <div className="h-px flex-1 bg-white/10" />
          <span className="mx-4 text-sm text-slate-500">OR</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Google Button */}
        <button
        onClick={()=>signIn("google")}
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/[0.04]
            py-3
            font-medium
            text-white
            transition
            hover:bg-white/[0.07]
          "
        >
          Continue with Google
        </button>

        {/* Footer */}
        <p className="mt-4 text-center text-sm text-slate-400">
          Don't have an account?
          <Link
            href="/signup"
            className="ml-2 font-medium text-sky-400 hover:text-sky-300"
          >
            Create Account
          </Link>
        </p>
      </div>
    </main>
  );
}