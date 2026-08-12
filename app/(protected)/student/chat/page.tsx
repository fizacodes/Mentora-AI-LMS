import { redirect } from "next/navigation";

import {
  createConversationAction,
  getUserConversationsAction,
} from "@/actions/students/chat/conversation";
import BackButton from "@/app/components/BackButton";

export default async function ChatPage() {
  const conversationsResult =
    await getUserConversationsAction();

  // User already has conversations
  if (
    conversationsResult.success &&
    conversationsResult.data.length > 0
  ) {
    redirect(
      `/student/chat/${conversationsResult.data[0].id}`
    );
  }

  // First time visiting chat → create first conversation
  const conversationResult =
    await createConversationAction();

  if (!conversationResult.success) {
    return (
      <main className="flex h-screen items-center justify-center">
       
        <p className="text-red-500 ">
          {conversationResult.message}
        </p>
      </main>
    );
  }

  redirect(
    `/student/chat/${conversationResult.data.id}`
  );
}