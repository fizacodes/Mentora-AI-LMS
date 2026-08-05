import { z } from "zod";


export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  password: z
    .string()
    .min(1, "Password is required."),
});

export type LoginSchema = z.infer<typeof loginSchema>;

// Signup Schema


export const signupSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name cannot exceed 50 characters."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

   password: z.string().min(8,"Password should of 8 characters minimum.").max(15,"Password should not be more than 15 characters.")
});

export type SignupSchema = z.infer<typeof signupSchema>;




// Verify OTP Schema

export const verifyOtpSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  otp: z
    .string()
    .length(6, "OTP must be exactly 6 digits.")
    .regex(/^\d+$/, "OTP must contain only numbers."),
});

export type VerifyOtpSchema = z.infer<typeof verifyOtpSchema>;


// Forgot Password Schema

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),
});

export type ForgotPasswordSchema = z.infer<
  typeof forgotPasswordSchema
>;


// Reset Password Schema

export const resetPasswordSchema = z
  .object({
       password: z.string().min(8,"Password should of 8 characters minimum.").max(15,"Password should not be more than 15 characters."),


    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type ResetPasswordSchema = z.infer<
  typeof resetPasswordSchema
>;

