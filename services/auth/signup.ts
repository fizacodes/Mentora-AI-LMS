import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";
import { generateOtp } from "@/lib/generateOtp";
import { sendOtpEmail } from "./sendOtpEmail";

import type { SignupSchema } from "@/lib/validators/authSchema";


// src/types/action-state.ts

 type ActionState = {
  success: boolean;
  message: string;
  email:string;
  errors: Record<string, string>;
};
export async function signupService(
  data: SignupSchema
):Promise<ActionState> {
  const { name, email, password } = data;

  // 1. Check existing user
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return {
      success: false,
      message: "An account with this email already exists.",
      email,
      errors: {},
    };
  }

  // 2. Generate OTP
  const otp = generateOtp();

  // 3. Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 4. Hash OTP
  const hashedOtp = await bcrypt.hash(otp, 10);

  // 5. OTP expiry (10 minutes)
  const otpExpires = new Date(
    Date.now() + 10 * 60 * 1000
  );

  // 6. Check PendingUser
  const pendingUser = await prisma.pendingUser.findUnique({
    where: {
      email,
    },
  });

  if (pendingUser) {
    const otpExpired =
      pendingUser.otpExpires < new Date();

if (pendingUser && !otpExpired) {
  return {
    success: true,
    message: "An OTP has already been sent. Please check your email.",
    email,
    errors: {},
  };
}

    // Update expired PendingUser
    await prisma.pendingUser.update({
      where: {
        email,
      },
      data: {
        name,
        password: hashedPassword,
        otpHash: hashedOtp,
        otpExpires,
        attempts: 0,
      },
    });
  } else {
    // Create new PendingUser
    await prisma.pendingUser.create({
      data: {
        name,
        email,
        password: hashedPassword,
        otpHash: hashedOtp,
        otpExpires,
      },
    });
  }

  // 7. Send OTP email
  await sendOtpEmail(email, otp);

  // 8. Success
  return {
    success: true,
    message: "OTP sent successfully.",
    email,
    errors: {},
  };
}