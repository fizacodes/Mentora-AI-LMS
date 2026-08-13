"use client"

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaDiscord,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

import { useEffect,useState } from "react";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { signupAction } from "@/actions/auth/authaction";
import { signIn } from "next-auth/react";



type SignupState = {
  success: boolean;
  message: string;
  email:string,
  errors: Record<string, string>;
};
const initialState :SignupState = {
  success: false,
  message: "",
  email:"",
  errors: {} as Record<string, string>,
};

export default function SignupPage() {
  
  
const [state, formAction, isPending] = useActionState(
  signupAction,
 initialState
);



const router = useRouter();

useEffect(() => {
  if (state.success) {
    router.push(
      `/auth/verify?email=${encodeURIComponent(state.email)}`
    );
  }
}, [state, router]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111F]">

      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[160px]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">

        {/* LEFT */}

        <div className="hidden flex-col justify-center px-12 lg:flex">

          <span className="text-sm font-medium uppercase tracking-[0.35em] text-sky-400">
            Mentora AI
          </span>

          <h1 className="mt-4 max-w-lg text-4xl font-bold leading-tight text-white">

            Learn with an AI Tutor

            <span className="block bg-gradient-to-r from-[#0F6CBD] to-[#38BDF8] bg-clip-text text-transparent">
              Built Just for You
            </span>

          </h1>

          <p className="mt-4 max-w-xl text-[14px] leading-8 text-slate-400">
            Understand concepts faster, generate smart notes,
            practice with AI quizzes, and track your learning
            journey—all from one intelligent platform.
          </p>

          {/* Divider */}

         

          {/* Dashboard Placeholder */}

          <div className="mt-6">

  <div className="h-px w-full max-w-xl bg-white/10" />

  <p className="mt-4 text-[14px] uppercase tracking-[0.25em] text-slate-500">
    Connect With Mentora AI
  </p>

  <div className="mt-4 flex items-center gap-5">

    <Link
      href="https://github.com/YOUR_USERNAME"
      target="_blank"
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/[0.04]
        text-slate-400
        transition-all
        duration-300
        hover:border-sky-400/40
        hover:bg-sky-500/10
        hover:text-sky-400
      "
    >
      <FaGithub size={22} />
    </Link>

    <Link
      href="https://linkedin.com/in/YOUR_USERNAME"
      target="_blank"
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/[0.04]
        text-slate-400
        transition-all
        duration-300
        hover:border-sky-400/40
        hover:bg-sky-500/10
        hover:text-sky-400
      "
    >
      <FaLinkedin size={22} />
    </Link>

    <Link
      href="https://x.com/YOUR_USERNAME"
      target="_blank"
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/[0.04]
        text-slate-400
        transition-all
        duration-300
        hover:border-sky-400/40
        hover:bg-sky-500/10
        hover:text-sky-400
      "
    >
      <FaXTwitter size={20} />
    </Link>

    <Link
      href="https://discord.gg/YOUR_SERVER"
      target="_blank"
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/[0.04]
        text-slate-400
        transition-all
        duration-300
        hover:border-sky-400/40
        hover:bg-sky-500/10
        hover:text-sky-400
      "
    >
      <FaDiscord size={22} />
    </Link>

    <Link
      href="mailto:hello@mentora.ai"
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/[0.04]
        text-slate-400
        transition-all
        duration-300
        hover:border-sky-400/40
        hover:bg-sky-500/10
        hover:text-sky-400
      "
    >
      <HiOutlineMail size={22} />
    </Link>

  </div>

</div>

        </div>

        {/* RIGHT */}

        <div className="flex items-center justify-center px-6 py-14">

          <div
            className="
              w-full
              max-w-md

              rounded-3xl

              border
              border-white/10

              bg-white/[0.05]

              p-6

              backdrop-blur-xl

              shadow-[0_20px_70px_rgba(56,189,248,.15)]
            "
          >

            <div className="text-center">

              <h2 className="text-2xl font-bold text-white">
                Create your account
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Start learning with your personal AI tutor.
              </p>

            </div>

            <form action={formAction} className="mt-4 space-y-5">

              <div>

                <label className="mb-1 block text-sm text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
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
    {state?.errors?.name && (
            <p className="text-red-500 text-sm mt-1">
              {state.errors.name}
            </p>
          )}

              </div>

              <div>

                <label className="mb-1 block text-sm text-slate-300">
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
                {state.errors?.email && (
  <p className="mt-1 text-sm text-red-400">
    {state.errors.email[0]}
  </p>
)}

              </div>

              <div>

                <label className="mb-1 block text-sm text-slate-300">
                  Password
                </label>

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
                {state.errors?.password && (
  <p className="mt-1 text-sm text-red-400">
    {state.errors.password[0]}
  </p>
)}

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
                Create Account

                <ArrowRight size={18} />

              </button>
              {state.message && (
  <p className="rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
    {state.message}
  </p>
)}

            </form>

            {/* Divider */}

            <div className="my-3 flex items-center">

              <div className="h-px flex-1 bg-white/10" />

              <span className="mx-4 text-sm text-slate-500">
                OR
              </span>

              <div className="h-px flex-1 bg-white/10" />

            </div>

            <button onClick={()=>signIn("google")}
              className="
                w-full

                rounded-xl

                border
                border-white/10

                bg-white/[0.04]

                py-3

                text-white

                transition

                hover:bg-white/[0.07]
              "
            >
              Continue with Google
            </button>

            <p className="mt-3 text-center text-sm text-slate-400">

              Already have an account?

              <Link
                href="/auth/login"
                className="ml-2 text-sky-400 hover:text-sky-300"
              >
                Sign In
              </Link>

            </p>

          </div>

        </div>

      </div>

    </main>
  );
}