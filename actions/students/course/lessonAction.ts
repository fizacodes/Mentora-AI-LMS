import { getCurrentUser } from "@/lib/getCurrentUser";
import { lessonSchema } from "@/lib/validators/courseSchema";
import { getLesson } from "@/services/students/course/getLesson";
import { ActionResponse, LessonPayload } from "@/type/response";

export async function getLessonAction(
  data: unknown
): Promise<ActionResponse<LessonPayload>> {
  const user = await getCurrentUser();

  if (!user.success) {
    return {
      success: false,
      message: user.message,
    };
  }

  const validated = lessonSchema.safeParse(data);

  if (!validated.success) {
    return {
      success: false,
      message: "Invalid lesson data",
    };
  }

  try {
    const result = await getLesson(
      user.userId,
      validated.data.courseId,
      validated.data.lessonId
    );

    if (!result.success) {
      return {
        success: false,
        message: result.message,
      };
    }

    return {
      success: true,
      message:"Lesson loaded successfully.",
      data: result.data
    };

  } catch (error) {
    console.error("Get lesson error:", error);

    return {
      success: false,
      message: "Failed to load lesson.",
    };
  }
}