import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";

type ActionState = {
  success: boolean;
  message: string;
  errors: Record<string, string>;
};

export async function verifyOtpService(
  email: string,
  otp: string,
): Promise<ActionState> {
  // 1. Find PendingUser

  const pendingUser = await prisma.pendingUser.findUnique({
    where: {
      email,
    },
  });

  if (!pendingUser) {
    return {
      success: false,
      message: "No verification request found.",
      errors: {},
    };
  }

  // 2. Check OTP expiry

  const isExpired = pendingUser.otpExpires < new Date();

  if (isExpired) {
    return {
      success: false,
      message: "OTP has expired. Please request a new one.",
      errors: {},
    };
  }

  // 3. Compare entered OTP with hashed OTP

  const isOtpValid = await bcrypt.compare(otp, pendingUser.otpHash);

  if (!isOtpValid) {
    // increase failed attempts

    await prisma.pendingUser.update({
      where: {
        email,
      },

      data: {
        attempts: {
          increment: 1,
        },
      },
    });

    return {
      success: false,
      message: "Invalid OTP.",
      errors: {},
    };
  }

  // 4. Create User after verification

  await prisma.user.create({
    data: {
      name: pendingUser.name,

      email: pendingUser.email,

      password: pendingUser.password,

      emailVerified: new Date(),
    },
  });

  // 5. Delete PendingUser

  await prisma.pendingUser.delete({
    where: {
      email,
    },
  });

  return {
    success: true,

    message: "Email verified successfully.",
    errors: {},
  };
}
