"use client";

import { useActionState } from "react";
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
    <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">

      {/* Messages */}
      <div className="mb-6 h-[400px] rounded-xl bg-black/20 p-4">
        <p className="text-slate-400">
          Start asking your AI tutor...
        </p>
      </div>


      {/* Input */}
      <form action={formAction} className="flex gap-3">

        <input
          name="message"
          placeholder="Ask anything..."
          className="
          flex-1
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-4
          py-3
          text-white
          outline-none
          focus:border-sky-400
          "
        />


        <button
          disabled={pending}
          className="
          rounded-xl
          bg-gradient-to-r
          from-[#0F6CBD]
          to-[#38BDF8]
          px-6
          text-white
          "
        >
          {pending ? "Sending..." : "Send"}
        </button>

      </form>


      {
        state.message && (
          <p className="mt-3 text-sm text-slate-300">
            {state.message}
          </p>
        )
      }

    </div>
  );
}