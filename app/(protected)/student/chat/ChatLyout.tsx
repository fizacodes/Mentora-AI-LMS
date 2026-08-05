"use client";

import ChatSidebar from "./ChatSidebar";
import ChatInput from "./ChatInput";
import { Prisma } from "@/generated/prisma/client";

export type ConversationSummary =
  Prisma.ConversationGetPayload<{
    select: {
      id: true;
      title: true;
      updatedAt: true;
    };
  }>;

export type ConversationWithMessages =
  Prisma.ConversationGetPayload<{
    include: {
      messages: {
        orderBy: {
          createdAt: "asc";
        };
      };
    };
  }>;
type ChatLayoutProps = {
  conversationId: string;
  conversations: ConversationSummary[];
  messages: ConversationWithMessages["messages"];
};

export default function ChatLayout({
  conversationId,
  conversations,
  messages,
}: ChatLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#061521]">
      {/* Sidebar */}
      <ChatSidebar
        conversations={conversations}
        activeConversationId={conversationId}
      />

      {/* Chat Area */}
      <main className="flex flex-1 flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6">
          {messages.map((message) => (
            <div key={message.id} className="mb-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                {message.role}
              </p>

              <div className="rounded-2xl bg-slate-800 p-4 text-white">
                {message.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <ChatInput conversationId={conversationId} />
      </main>
    </div>
  );
}