"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";

import { sendMessageAction } from "@/actions/students/chat/chat";

type ChatInputProps = {
  conversationId: string;
};

type ActionState = {
  success: boolean;
  message: string;
};

const initialState: ActionState = {
  success: false,
  message: "",
};

export default function ChatInput({
  conversationId,
}: ChatInputProps) {
  const router = useRouter();

  const [state, formAction, isPending] =
    useActionState(
      sendMessageAction,
      initialState
    );

  useEffect(() => {
    if (state.success) {
      router.refresh();
    }
  }, [state.success, router]);

  return (
    <div className="w-full">
      <form
        action={formAction}
        className="mx-auto w-full"
      >
        {/* Conversation ID */}
        <input
          type="hidden"
          name="conversationId"
          value={conversationId}
        />

        {/* Input container */}
        <div
          className="
            flex items-center gap-2
            rounded-2xl
            border border-slate-700/60
            bg-[#0B2340]/70
            p-2
            shadow-lg shadow-black/10
            backdrop-blur-xl
            transition
            focus-within:border-sky-400/40
            focus-within:ring-1
            focus-within:ring-sky-400/20
          "
        >
          <input
            name="message"
            placeholder="Ask Mentora AI..."
            disabled={isPending}
            autoComplete="off"
            className="
              min-w-0
              flex-1
              bg-transparent
              px-3
              py-2.5
              text-sm
              text-white
              outline-none
              placeholder:text-slate-600
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          />

          <button
            type="submit"
            disabled={isPending}
            className="
              flex
              h-10
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-[#0F6CBD]
              to-[#38BDF8]
              px-4
              text-sm
              font-medium
              text-white
              shadow-md
              shadow-sky-950/30
              transition
              hover:brightness-110
              active:scale-[0.98]
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            <span className="hidden sm:inline">
              {isPending ? "Sending..." : "Send"}
            </span>

            <Send size={16} />
          </button>
        </div>
      </form>

      {/* Error */}
      {!state.success && state.message && (
        <p className="mt-2 px-2 text-xs text-red-400">
          {state.message}
        </p>
      )}

      {/* Footer hint */}
      
    </div>
  );
}