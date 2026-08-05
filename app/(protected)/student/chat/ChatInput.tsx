"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

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
    <div className="border-t p-4">
      <form
        action={formAction}
        className="flex gap-3"
      >
        <input
          type="hidden"
          name="conversationId"
          value={conversationId}
        />

        <input
          name="message"
          placeholder="Ask Mentora AI..."
          className="
            flex-1
            rounded-lg
            border
            px-4
            py-2
            outline-none
          "
        />

        <button
          type="submit"
          disabled={isPending}
          className="
            rounded-lg
            bg-blue-600
            px-5
            text-white
            disabled:opacity-50
          "
        >
          {isPending ? "Sending..." : "Send"}
        </button>
      </form>

      {!state.success && state.message && (
        <p className="mt-2 text-sm text-red-500">
          {state.message}
        </p>
      )}
    </div>
  );
}