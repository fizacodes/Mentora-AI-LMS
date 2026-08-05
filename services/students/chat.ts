import { MessageRole } from "@/generated/prisma/enums";
import { prisma } from "@/lib/prisma";
import { generateAIResponse } from "@/services/ai/chat";
import { getConversationHistory } from "./chat/conversation";

type SendMessageInput = {
  userId: string;
  conversationId: string;
  message: string;
};

export async function sendMessage({
  userId,
  conversationId,
  message,
}: SendMessageInput) {
  // Save user message
  const userMessage = await prisma.message.create({
    data: {
      conversationId,
      role: MessageRole.USER,
      content: message,
    },
  });

  // Get last 10 messages for AI context
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

  // Generate AI response
  const aiResponse = await generateAIResponse({
    history: historyResult.data,
  });

  if (!aiResponse.success) {
    return {
      success: false,
      message: "Failed to generate AI response.",
    };
  }

  // Save assistant message
  const assistantMessage = await prisma.message.create({
    data: {
      conversationId,
      role: MessageRole.ASSISTANT,
      content: String(aiResponse.content),
    },
  });

  return {
    success: true,
    message: "Message sent successfully.",
    data: {
      userMessage,
      assistantMessage,
    },
  };
}