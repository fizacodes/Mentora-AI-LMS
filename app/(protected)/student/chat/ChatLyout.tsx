// "use client";

// import ChatSidebar from "./ChatSidebar";
// import ChatInput from "./ChatInput";
// import { Prisma } from "@/generated/prisma/client";

// export type ConversationSummary =
//   Prisma.ConversationGetPayload<{
//     select: {
//       id: true;
//       title: true;
//       updatedAt: true;
//     };
//   }>;

// export type ConversationWithMessages =
//   Prisma.ConversationGetPayload<{
//     include: {
//       messages: {
//         orderBy: {
//           createdAt: "asc";
//         };
//       };
//     };
//   }>;
// type ChatLayoutProps = {
//   conversationId: string;
//   conversations: ConversationSummary[];
//   messages: ConversationWithMessages["messages"];
// };

// export default function ChatLayout({
//   conversationId,
//   conversations,
//   messages,
// }: ChatLayoutProps) {
//   return (
//     <div className="flex h-screen overflow-hidden bg-[#061521]">
//       {/* Sidebar */}
//       <ChatSidebar
//         conversations={conversations}
//         activeConversationId={conversationId}
//       />

//       {/* Chat Area */}
//       <main className="flex flex-1 flex-col">
//         {/* Messages */}
//         <div className="flex-1 overflow-y-auto p-6">
//           {messages.map((message) => (
//             <div key={message.id} className="mb-6">
//               <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
//                 {message.role}
//               </p>

//               <div className="rounded-2xl bg-slate-800 p-4 text-white">
//                 {message.content}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Input */}
//         <ChatInput conversationId={conversationId} />
//       </main>
//     </div>
//   );
// }
"use client";

import ChatSidebar from "./ChatSidebar";
import ChatInput from "./ChatInput";
import { Prisma } from "@/generated/prisma/client";
import { Bot, User } from "lucide-react";

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
    <div className="flex h-[calc(100vh-0px)] overflow-hidden bg-[#061521]">
      {/* ================= SIDEBAR ================= */}

      <div className="hidden w-72 shrink-0 border-r border-slate-700/40 md:flex">
        <ChatSidebar
          conversations={conversations}
          activeConversationId={conversationId}
        />
      </div>

      {/* ================= CHAT AREA ================= */}

      <main className="flex min-w-0 flex-1 flex-col bg-[#061521]">
        {/* Chat Header */}
        <header
          className="
            flex h-16 shrink-0
            items-center
            border-b border-slate-700/40
            bg-[#081B2D]/80
            px-6
            backdrop-blur-xl
          "
        >
          <div>
            <h1 className="text-sm font-semibold text-white">
              AI Tutor
            </h1>

            <p className="text-xs text-slate-500">
              Ask questions and continue learning
            </p>
          </div>
        </header>

        {/* ================= MESSAGES ================= */}

        <div
          className="
            flex-1
            overflow-y-auto
            px-4 py-6
            sm:px-6
            lg:px-10
          "
        >
          {messages.length === 0 ? (
            <div className="flex h-full items-center justify-center">
              <div className="max-w-md text-center">
                <div
                  className="
                    mx-auto mb-4
                    flex h-12 w-12
                    items-center justify-center
                    rounded-2xl
                    border border-sky-400/20
                    bg-sky-400/10
                    text-sky-400
                  "
                >
                  <Bot size={22} />
                </div>

                <h2 className="text-lg font-semibold text-white">
                  How can I help you?
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Ask your AI tutor about your course,
                  lessons, concepts, or anything you're
                  struggling with.
                </p>
              </div>
            </div>
          ) : (
            <div className="mx-auto w-full max-w-4xl space-y-6">
              {messages.map((message) => {
                const isUser = message.role === "USER";

                return (
                  <div
                    key={message.id}
                    className={`
                      flex
                      ${
                        isUser
                          ? "justify-end"
                          : "justify-start"
                      }
                    `}
                  >
                    <div
                      className={`
                        flex max-w-[85%] gap-3
                        sm:max-w-[75%]
                        ${
                          isUser
                            ? "flex-row-reverse"
                            : "flex-row"
                        }
                      `}
                    >
                      {/* Avatar */}

                      <div
                        className={`
                          mt-1
                          flex h-8 w-8
                          shrink-0
                          items-center justify-center
                          rounded-xl
                          ${
                            isUser
                              ? `
                                bg-slate-700
                                text-slate-300
                              `
                              : `
                                border
                                border-sky-400/20
                                bg-sky-400/10
                                text-sky-400
                              `
                          }
                        `}
                      >
                        {isUser ? (
                          <User size={15} />
                        ) : (
                          <Bot size={16} />
                        )}
                      </div>

                      {/* Message */}

                      <div>
                        <p
                          className={`
                            mb-1.5
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-wider
                            ${
                              isUser
                                ? "text-right text-slate-600"
                                : "text-slate-600"
                            }
                          `}
                        >
                          {isUser ? "You" : "AI Tutor"}
                        </p>

                        <div
                          className={`
                            rounded-2xl
                            px-4 py-3
                            text-sm
                            leading-relaxed
                            ${
                              isUser
                                ? `
                                  rounded-tr-md
                                  border
                                  border-sky-400/20
                                  bg-sky-400/10
                                  text-slate-200
                                `
                                : `
                                  rounded-tl-md
                                  border
                                  border-slate-700/50
                                  bg-[#0B2340]
                                  text-slate-300
                                `
                            }
                          `}
                        >
                          {message.content}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ================= INPUT ================= */}

        <div
          className="
            shrink-0
            border-t border-slate-700/40
            bg-[#081B2D]/80
            px-4 py-4
            backdrop-blur-xl
            sm:px-6
            lg:px-10
          "
        >
          <div className="mx-auto w-full max-w-4xl">
            <ChatInput
              conversationId={conversationId}
            />

            <p className="mt-2 text-center text-[10px] text-slate-600">
              Mentora AI can make mistakes. Verify important
              information.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}