

"use server";

import { Prisma } from "@/generated/prisma/client";

import { getCurrentUser } from "@/lib/getCurrentUser";

import {
  createConversation,
  getConversation,
  getUserConversations,
} from "@/services/students/chat/conversation";

import type { ActionResponse } from "@/type/response";

// =====================
// CREATE CONVERSATION
// =====================

type CreateConversationResult = ActionResponse<{
  id: string;
  title: string | null;
  updatedAt: Date;
}>;

export async function createConversationAction(): Promise<CreateConversationResult> {
  const currentUser = await getCurrentUser();

  if (!currentUser.success) {
    return {
      success: false,
      message: currentUser.message ?? "Unauthorized.",
    };
  }

  const result = await createConversation(currentUser.userId);

  if (!result.success) {
    return result;
  }

  return {
    success: true,
    message: result.message,
    data: result.data,
  };
}

// =====================
// GET CONVERSATION
// =====================

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
      message: currentUser.message ?? "Unauthorized.",
    };
  }

  return getConversation(
    currentUser.userId,
    conversationId
  );
}

// =====================
// GET USER CONVERSATIONS
// =====================

export type ConversationSummary =
  Prisma.ConversationGetPayload<{
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
      message: currentUser.message ?? "Unauthorized.",
    };
  }

  return getUserConversations(currentUser.userId);
}

