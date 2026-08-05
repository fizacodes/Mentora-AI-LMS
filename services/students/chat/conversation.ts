import { prisma } from "@/lib/prisma";
import { MessageRole } from "@/generated/prisma/enums";
import { Prisma } from "@/generated/prisma/client";
import type { ActionResponse } from "@/type/response";

export async function createConversation(userId: string) {
  const conversation = await prisma.conversation.create({
    data: {
      userId,
    },
  });

  return {
    success: true,
    message: "Conversation created successfully.",
    data: conversation,
  };
}





type ConversationWithMessages = Prisma.ConversationGetPayload<{
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



export type ConversationSummary = Prisma.ConversationGetPayload<{
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

const MAX_HISTORY_MESSAGES = 10;

export async function getConversationHistory(
  userId: string,
  conversationId: string
) {
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
      data: [],
    };
  }

  return {
    success: true,
    message: "Conversation history fetched successfully.",
    data: [...conversation.messages].reverse(),
  };
}