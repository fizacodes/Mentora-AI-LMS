"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createConversationAction } from "@/actions/students/chat/conversation";
import { Prisma } from "@/generated/prisma/client";
import type { ActionResponse } from "@/type/response";

export type ConversationSummary =
  Prisma.ConversationGetPayload<{
    select: {
      id: true;
      title: true;
      updatedAt: true;
    };
  }>;


type ChatSidebarProps = {
  conversations: ConversationSummary[];
  activeConversationId: string;
};

const initialState: ActionResponse<{ id: string }> = {
  success: false,
  message: "",
};

export default function ChatSidebar({
  conversations,
  activeConversationId,
}: ChatSidebarProps) {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(
    createConversationAction,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      router.push(`/student/chat/${state.data.id}`);
    }
  }, [state, router]);

  return (
    <aside className="flex w-80 flex-col border-r border-slate-200 bg-white">
      {/* Header */}
      <div className="border-b border-slate-200 p-4">
        <form action={formAction}>
          <button
            type="submit"
            disabled={isPending}
            className="
              w-full
              rounded-lg
              bg-blue-600
              px-4
              py-2
              font-medium
              text-white
              transition
              hover:bg-blue-700
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {isPending ? "Creating..." : "+ New Chat"}
          </button>
        </form>
      </div>

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto p-3">
        {conversations.length === 0 ? (
          <p className="text-sm text-slate-500">
            No conversations yet.
          </p>
        ) : (
          <div className="space-y-2">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                type="button"
                onClick={() =>
                  router.push(
                    `/student/chat/${conversation.id}`
                  )
                }
                className={`
                  w-full
                  rounded-lg
                  px-3
                  py-3
                  text-left
                  transition
                  ${
                    activeConversationId === conversation.id
                      ? "bg-blue-100 text-blue-700"
                      : "hover:bg-slate-100"
                  }
                `}
              >
                <p className="truncate font-medium">
                  {conversation.title ?? "New Conversation"}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {conversation.updatedAt.toLocaleDateString()}
                </p>
              </button>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}