"use server";

import { courseSearchSchema } from "@/lib/validators/courseSchema";
import { generateCoursePreview } from "@/services/students/course/courseService";
import { getCourseDetails } from "@/services/students/course/getCourseDetail";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { ActionResponse, CourseDetailsPayload } from "@/type/response";


export async function generateCoursePreviewAction(
  prevState: unknown,
  formData: FormData
) {
  const result = courseSearchSchema.safeParse({
    query: formData.get("topic"),
  });

  if (!result.success) {
    return {
      success: false,
      error: "Invalid topic",
      data: null,
    };
  }

  const course = await generateCoursePreview(
    result.data.query
  );

  return {
    success: true,
    error: "",
    data: course,
  };
}


type GetCourseDetailsResult =
  | {
      success: true;
      data: CourseDetailsPayload;
      progress: number;
    }
  | {
      success: false;
      message: string;
    };

export async function getCourseDetailsAction(
  courseId: string
): Promise<GetCourseDetailsResult> {
  const user = await getCurrentUser();

  if (!user.success) {
    return {
      success: false,
      message: user.message,
    };
  }

  try {
    const result = await getCourseDetails(
      courseId,
      user.userId
    );

    if (!result.success) {
      return {
        success: false,
        message: result.error,
      };
    }

    return {
      success: true,
      data: result.data,
      progress: result.progress,
    };
  } catch (error) {
    console.error(
      "Get course details error:",
      error
    );

    return {
      success: false,
      message: "Failed to load course.",
    };
  }
}