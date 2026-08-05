"use server";

import { getCurrentUser } from "@/lib/getCurrentUser";
import { createConversation } from "@/services/students/chat/conversation";
import { getConversation } from "@/services/students/chat/conversation";
import { getUserConversations } from "@/services/students/chat/conversation";
import { ActionResponse } from "@/type/response";
import { Prisma } from "@/generated/prisma/client";

type CreateConversationResult =ActionResponse<{
    id:string
}>
export async function createConversationAction() :Promise<CreateConversationResult>{
  const currentUser = await getCurrentUser();

  if (!currentUser.success) {
    return {
      success: false,
      message: currentUser.message ?? "Unauthorized.",
    };
  }

  return await createConversation(currentUser.userId);
}



export type ConversationWithMessages =
  Prisma.ConversationGetPayload<{
    include: {
      messages: true;
    };
  }>;

  export async function getConversationAction(
  conversationId: string
): Promise<ActionResponse<ConversationWithMessages>> {
  const currentUser = await getCurrentUser();

  if (!currentUser.success) {
    return {
      success: false,
      message: currentUser.message,
    };
  }

  return getConversation(
    currentUser.userId,
    conversationId
  );
}


export type ConversationSummary = Prisma.ConversationGetPayload<{
  select: {
    id: true;
    title: true;
    updatedAt: true;
  };
}>;


export async function getUserConversationsAction(): Promise<
  ActionResponse<ConversationSummary[]>
> {
  const currentUser = await getCurrentUser();

  if (!currentUser.success) {
    return {
      success: false,
      message: currentUser.message,
    };
  }

  return getUserConversations(currentUser.userId);
}