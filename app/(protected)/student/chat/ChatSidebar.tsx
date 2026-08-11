"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Plus,
  MessageSquare,
  Sparkles,
} from "lucide-react";

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
    <aside
      className="
        flex h-full w-full
        flex-col
        border-r border-slate-700/40
        bg-[#081B2D]
      "
    >
      {/* ================= HEADER ================= */}
      <div className="border-b border-slate-700/40 p-4">
        <div className="mb-4 flex items-center gap-3">
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
            <Sparkles size={17} />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">
              AI Tutor
            </h2>

            <p className="text-xs text-slate-500">
              Your learning conversations
            </p>
          </div>
        </div>

        {/* New Chat */}
        <form action={formAction}>
          <button
            type="submit"
            disabled={isPending}
            className="
              flex w-full
              items-center justify-center
              gap-2
              rounded-xl
              border border-sky-400/20
              bg-sky-400/10
              px-4 py-2.5
              text-sm font-medium
              text-sky-400
              transition-all
              hover:border-sky-400/30
              hover:bg-sky-400/15
              hover:text-sky-300
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            <Plus size={17} />

            {isPending ? "Creating..." : "New Chat"}
          </button>
        </form>
      </div>

      {/* ================= CONVERSATIONS ================= */}
      <div className="flex-1 overflow-y-auto p-3">
        {conversations.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center px-4 text-center">
            <div
              className="
                mb-3 flex h-10 w-10
                items-center justify-center
                rounded-xl
                bg-slate-800/60
                text-slate-500
              "
            >
              <MessageSquare size={18} />
            </div>

            <p className="text-sm font-medium text-slate-300">
              No conversations yet
            </p>

            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              Start a new chat with your AI tutor.
            </p>
          </div>
        ) : (
          <div className="space-y-1.5">
            <p
              className="
                px-2 pb-2
                text-[11px]
                font-semibold
                uppercase
                tracking-wider
                text-slate-600
              "
            >
              Recent conversations
            </p>

            {conversations.map((conversation) => {
              const isActive =
                activeConversationId === conversation.id;

              return (
                <button
                  key={conversation.id}
                  type="button"
                  onClick={() =>
                    router.push(
                      `/student/chat/${conversation.id}`
                    )
                  }
                  className={`
                    group
                    w-full
                    rounded-xl
                    border
                    px-3 py-3
                    text-left
                    transition-all

                    ${
                      isActive
                        ? `
                          border-sky-400/20
                          bg-sky-400/10
                        `
                        : `
                          border-transparent
                          hover:border-slate-700/50
                          hover:bg-slate-800/50
                        `
                    }
                  `}
                >
                  <div className="flex items-start gap-3">
                    {/* Icon */}
                    <div
                      className={`
                        mt-0.5
                        flex h-8 w-8
                        shrink-0
                        items-center justify-center
                        rounded-lg
                        ${
                          isActive
                            ? "bg-sky-400/15 text-sky-400"
                            : "bg-slate-800 text-slate-500 group-hover:text-slate-300"
                        }
                      `}
                    >
                      <MessageSquare size={15} />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <p
                        className={`
                          truncate
                          text-sm
                          font-medium
                          ${
                            isActive
                              ? "text-sky-300"
                              : "text-slate-300 group-hover:text-white"
                          }
                        `}
                      >
                        {conversation.title ??
                          "New Conversation"}
                      </p>

                      <p className="mt-1 text-[11px] text-slate-600">
                        {conversation.updatedAt.toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* ================= FOOTER ================= */}
      <div
        className="
          border-t
          border-slate-700/40
          px-4 py-3
        "
      >
        <p className="text-center text-[11px] text-slate-600">
          Mentora AI Tutor
        </p>
      </div>
    </aside>
  );
}