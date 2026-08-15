
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma/client";
import type { ActionResponse } from "@/type/response";

// =====================
// CREATE CONVERSATION
// =====================

export type CreatedConversation = Prisma.ConversationGetPayload<{
  select: {
    id: true;
    title: true;
    updatedAt: true;
  };
}>;

export async function createConversation(
  userId: string
): Promise<ActionResponse<CreatedConversation>> {
  const conversation = await prisma.conversation.create({
    data: {
      userId,
      title: "New Conversation",
    },
    select: {
      id: true,
      title: true,
      updatedAt: true,
    },
  });

  return {
    success: true,
    message: "Conversation created successfully.",
    data: conversation,
  };
}

// =====================
// GET SINGLE CONVERSATION
// =====================

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

export async function getConversation(
  userId: string,
  conversationId: string
): Promise<ActionResponse<ConversationWithMessages>> {
  const conversation = await prisma.conversation.findFirst({
    where: {
      id: conversationId,
      userId,
    },
    include: {
      messages: {
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  if (!conversation) {
    return {
      success: false,
      message: "Conversation not found.",
    };
  }

  return {
    success: true,
    message: "Conversation fetched successfully.",
    data: conversation,
  };
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

export async function getUserConversations(
  userId: string
): Promise<ActionResponse<ConversationSummary[]>> {
  const conversations = await prisma.conversation.findMany({
    where: {
      userId,
    },
    orderBy: {
      updatedAt: "desc",
    },
    select: {
      id: true,
      title: true,
      updatedAt: true,
    },
  });

  return {
    success: true,
    message: "Conversations fetched successfully.",
    data: conversations,
  };
}

// =====================
// UPDATE CONVERSATION TITLE
// =====================

export async function updateConversationTitle(
  userId: string,
  conversationId: string,
  title: string
): Promise<ActionResponse<null>> {
  const conversation = await prisma.conversation.findFirst({
    where: {
      id: conversationId,
      userId,
    },
  });

  if (!conversation) {
    return {
      success: false,
      message: "Conversation not found.",
    };
  }

  await prisma.conversation.update({
    where: {
      id: conversationId,
    },
    data: {
      title,
    },
  });

  return {
    success: true,
    message: "Conversation title updated successfully.",
    data: null,
  };
}

// =====================
// GET CONVERSATION HISTORY
// =====================

const MAX_HISTORY_MESSAGES = 10;

export type ConversationHistoryMessage = {
  role: "USER" | "ASSISTANT";
  content: string;
};

export async function getConversationHistory(
  userId: string,
  conversationId: string
): Promise<ActionResponse<ConversationHistoryMessage[]>> {
  const conversation = await prisma.conversation.findFirst({
    where: {
      id: conversationId,
      userId,
    },
    select: {
      messages: {
        select: {
          role: true,
          content: true,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: MAX_HISTORY_MESSAGES,
      },
    },
  });

  if (!conversation) {
    return {
      success: false,
      message: "Conversation not found.",
    };
  }

  return {
    success: true,
    message: "Conversation history fetched successfully.",
    data: [...conversation.messages].reverse(),
  };
}

