import { getCurrentUser } from "@/lib/getCurrentUser";
import { getStudentDashboard } from "@/services/students/getStudentDashboard";

export async function getStudentDashboardAction() {
  const user = await getCurrentUser();

  if (!user.success) {
    return {
      success: false as const,
      message: user.message,
    };
  }

  try {
    const result = await getStudentDashboard(
      user.userId
    );

    return result;
  } catch (error) {
    console.error(
      "Get student dashboard error:",
      error
    );

    return {
      success: false as const,
      message: "Failed to load dashboard.",
    };
  }
}