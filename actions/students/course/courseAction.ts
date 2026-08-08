"use server";

import { courseSearchSchema } from "@/lib/validators/courseSchema";
import { generateCoursePreview } from "@/services/students/course/courseService";
import { getCourseDetails } from "@/services/students/course/getCourseDetail";
import { getCurrentUser } from "@/lib/getCurrentUser";


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
import type { ActionResponse } from "@/type/response";
import type { CourseDetailsPayload } from "@/type/response";

export async function getCourseDetailsAction(
  courseId: string
): Promise<ActionResponse<CourseDetailsPayload>> {

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
      message: "Course fetched successfully",
      data: result.data,
    };


  } catch (error) {

    console.error(
      "Course details error:",
      error
    );

    return {
      success: false,
      message: "Failed to fetch course",
    };
  }
}