"use server";

import { getCurrentUser } from "@/lib/getCurrentUser";
import { sendMessageSchema } from "@/lib/validators/chatSchema";
import { getFieldErrors } from "@/lib/validators/zod";
import { sendMessage } from "@/services/students/chat";

type ActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

export async function sendMessageAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const currentUser = await getCurrentUser();

  if (!currentUser.success) {
    return {
      success: false,
      message: currentUser.message,
    };
  }

  const validated = sendMessageSchema.safeParse({
    conversationId: formData.get("conversationId"),
    message: formData.get("message"),
  });

  if (!validated.success) {
    return {
      success: false,
      message: "Please fix the highlighted fields.",
      errors: getFieldErrors(validated.error),
    };
  }

  return await sendMessage({
    userId: currentUser.userId,
    conversationId: validated.data.conversationId,
    message: validated.data.message,
  });
}