import { auth } from "@/auth";

type GetCurrentUserResult =
  | {
      success: true;
      userId: string;
    }
  | {
      success: false;
      message: string;
    };

export async function getCurrentUser(): Promise<GetCurrentUserResult> {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      success: false,
      message: "Unauthorized.",
    };
  }

  return {
    success: true,
    userId: session.user.id,
  };
}