"use server";

import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

import {
  getStudentProfileService,
  updateStudentProfileService,
  type StudentProfileResult,
} from "@/services/students/profile";
import { updateProfileSchema, UpdateProfileSchema } from "@/lib/validators/authSchema";


export async function getStudentProfileAction(): Promise<StudentProfileResult> {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      success: false,
      error: "Unauthorized",
    };
  }

  return getStudentProfileService(session.user.id);
}

export async function updateStudentProfileAction(
  data: UpdateProfileSchema
) {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      success: false as const,
      error: "Unauthorized",
    };
  }

  const parsed = updateProfileSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false as const,
      error: parsed.error.issues[0]?.message ?? "Invalid profile data",
    };
  }

  try {
    const result = await updateStudentProfileService(
      session.user.id,
      parsed.data
    );

    revalidatePath("/student/profile");

    return result;
  } catch (error) {
    console.error("UPDATE_PROFILE_ERROR:", error);

    return {
      success: false as const,
      error: "Failed to update profile",
    };
  }
}