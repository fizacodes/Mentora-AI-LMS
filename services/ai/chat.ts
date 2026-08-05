import { MessageRole } from "@/generated/prisma/enums";
import { chatModel } from "@/lib/ai/model";

type GenerateAIResponseInput = {
  history: {
    role: MessageRole;
    content: string;
  }[];
};

export async function generateAIResponse({
  history,
}: GenerateAIResponseInput) {
  const messages = [
    {
      role: "system" as const,
      content:
        "You are Mentora AI, a helpful tutor. Explain concepts clearly, guide students step by step, and encourage learning rather than simply giving answers.",
    },

    ...history.map((message) => ({
      role:
        message.role === MessageRole.USER
          ? ("user" as const)
          : ("assistant" as const),
      content: message.content,
    })),
  ];

  const response = await chatModel.invoke(messages);

  return {
    success: true,
    content: response.content,
  };
}