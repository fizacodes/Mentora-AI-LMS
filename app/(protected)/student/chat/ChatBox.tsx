"use client";

import { useActionState } from "react";
import { Bot, Send } from "lucide-react";
import { sendMessageAction } from "@/actions/students/chat/chat";

const initialState = {
  success: false,
  message: "",
};

export default function ChatBox() {
  const [state, formAction, pending] = useActionState(
    sendMessageAction,
    initialState
  );

  return (
    <div className="flex h-full flex-col bg-[#061521]">

      {/* ================= CHAT HEADER ================= */}

      <div
        className="
          flex items-center gap-3
          border-b border-slate-700/40
          bg-[#081B2D]/80
          px-5 py-4
          backdrop-blur-xl
        "
      >
        <div
          className="
            flex h-9 w-9
            items-center justify-center
            rounded-xl
            border border-sky-400/20
            bg-sky-400/10
            text-sky-400
          "
        >
          <Bot size={18} />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">
            AI Tutor
          </h2>

          <p className="text-xs text-slate-500">
            Your personal learning companion
          </p>
        </div>
      </div>

      {/* ================= MESSAGES ================= */}

      <div
        className="
          flex-1
          overflow-y-auto
          px-4 py-6
          sm:px-6
        "
      >
        <div className="flex h-full items-center justify-center">
          <div className="max-w-md text-center">

            <div
              className="
                mx-auto
                flex h-14 w-14
                items-center justify-center
                rounded-2xl
                border border-sky-400/20
                bg-sky-400/10
                text-sky-400
                shadow-lg shadow-sky-950/20
              "
            >
              <Bot size={25} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-white">
              Start learning with your AI Tutor
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Ask questions about your lessons, concepts,
              quizzes, or anything you want to understand better.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {[
                "Explain this concept",
                "Give me an example",
                "Help me prepare for a quiz",
              ].map((suggestion) => (
                <span
                  key={suggestion}
                  className="
                    rounded-full
                    border border-slate-700/50
                    bg-[#0B2340]/60
                    px-3 py-1.5
                    text-xs
                    text-slate-400
                  "
                >
                  {suggestion}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ================= INPUT ================= */}

      <div
        className="
          border-t border-slate-700/40
          bg-[#081B2D]/80
          px-4 py-4
          backdrop-blur-xl
          sm:px-6
        "
      >
        <form
          action={formAction}
          className="mx-auto w-full max-w-4xl"
        >
          <div
            className="
              flex items-center gap-2
              rounded-2xl
              border border-slate-700/60
              bg-[#0B2340]/70
              p-2
              transition
              focus-within:border-sky-400/40
              focus-within:ring-1
              focus-within:ring-sky-400/20
            "
          >
            <input
              name="message"
              placeholder="Ask your AI tutor anything..."
              disabled={pending}
              autoComplete="off"
              className="
                min-w-0
                flex-1
                bg-transparent
                px-3 py-2
                text-sm
                text-white
                placeholder:text-slate-600
                outline-none
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            />

            <button
              type="submit"
              disabled={pending}
              className="
                flex h-10
                items-center gap-2
                rounded-xl
                bg-gradient-to-r
                from-[#0F6CBD]
                to-[#38BDF8]
                px-4
                text-sm
                font-medium
                text-white
                shadow-lg
                shadow-sky-950/20
                transition
                hover:brightness-110
                active:scale-[0.98]
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {pending ? (
                "Sending..."
              ) : (
                <>
                  <span className="hidden sm:inline">
                    Send
                  </span>

                  <Send size={16} />
                </>
              )}
            </button>
          </div>

          {/* Status */}

          {state.message && (
            <p
              className={`
                mt-2 px-2
                text-xs
                ${
                  state.success
                    ? "text-emerald-400"
                    : "text-red-400"
                }
              `}
            >
              {state.message}
            </p>
          )}

          
        </form>
      </div>
    </div>
  );
}