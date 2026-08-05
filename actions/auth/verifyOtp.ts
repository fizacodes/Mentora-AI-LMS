"use server";

import { verifyOtpSchema } from "@/lib/validators/authSchema";
import { verifyOtpService } from "@/services/auth/verifyOtpService";

export async function verifyOtpAction(
  _prevState: any,
  formData: FormData
) {
  const rawData = {
    email: String(formData.get("email") ?? ""),
    otp: String(formData.get("otp") ?? ""),
  };

  const validated = verifyOtpSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      message:"",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  return await verifyOtpService(
    validated.data.email,
    validated.data.otp
  );
}