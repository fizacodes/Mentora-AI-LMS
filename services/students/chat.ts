


import { MessageRole } from "@/generated/prisma/enums";
import { prisma } from "@/lib/prisma";

import { generateAIResponse } from "@/services/ai/chat";
import { getConversationHistory } from "./chat/conversation";

import type { ActionResponse } from "@/type/response";

// =====================
// TYPES
// =====================

type SendMessageInput = {
  userId: string;
  conversationId: string;
  message: string;
};

type SendMessageResult = {
  userMessage: {
    id: string;
    conversationId: string;
    role: MessageRole;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  };

  assistantMessage: {
    id: string;
    conversationId: string;
    role: MessageRole;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  };
};

// =====================
// CREATE CONVERSATION TITLE
// =====================

function createConversationTitle(message: string): string {
  const cleanedMessage = message
    .trim()
    .replace(/\s+/g, " ");

  if (cleanedMessage.length <= 40) {
    return cleanedMessage;
  }

  return `${cleanedMessage.slice(0, 40).trim()}...`;
}

// =====================
// SEND MESSAGE
// =====================

export async function sendMessage({
  userId,
  conversationId,
  message,
}: SendMessageInput): Promise<ActionResponse<SendMessageResult>> {
  // =====================
  // 1. Verify conversation
  // =====================

  const conversation = await prisma.conversation.findFirst({
    where: {
      id: conversationId,
      userId,
    },
    select: {
      id: true,
      title: true,
      _count: {
        select: {
          messages: true,
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

  // =====================
  // 2. Save user message
  // =====================

  const userMessage = await prisma.message.create({
    data: {
      conversationId,
      role: MessageRole.USER,
      content: message.trim(),
    },
  });

  // =====================
  // 3. Set title for first message
  // =====================

  if (
    conversation._count.messages === 0 &&
    conversation.title === "New Conversation"
  ) {
    await prisma.conversation.update({
      where: {
        id: conversationId,
      },
      data: {
        title: createConversationTitle(message),
      },
    });
  }

  // =====================
  // 4. Get conversation history
  // =====================

  const historyResult = await getConversationHistory(
    userId,
    conversationId
  );

  if (!historyResult.success) {
    return {
      success: false,
      message: historyResult.message,
    };
  }

  // =====================
  // 5. Generate AI response
  // =====================

  const aiResponse = await generateAIResponse({
    history: historyResult.data,
  });

  if (!aiResponse.success) {
    return {
      success: false,
      message: "Failed to generate AI response.",
    };
  }

  // =====================
  // 6. Save assistant message
  // =====================

  const assistantMessage = await prisma.message.create({
    data: {
      conversationId,
      role: MessageRole.ASSISTANT,
      content: String(aiResponse.content),
    },
  });

  // =====================
  // 7. Return response
  // =====================

  return {
    success: true,
    message: "Message sent successfully.",
    data: {
      userMessage,
      assistantMessage,
    },
  };
}

