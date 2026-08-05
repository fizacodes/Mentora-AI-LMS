import { z } from "zod";

export const sendMessageSchema = z.object({
  conversationId: z.string().cuid("Invalid conversation ID"),

  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(5000, "Message is too long"),
});

export type SendMessageSchema = z.infer<typeof sendMessageSchema>;