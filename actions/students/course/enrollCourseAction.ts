"use server"

import { getCurrentUser } from "@/lib/getCurrentUser";

import { enrollCourseSchema } from "@/lib/validators/courseSchema";
import { enrollCourse } from "@/services/students/course/enrollCourse";
import { getEnrolledCourses } from "@/services/students/course/getEnrolledCourse";
import { ActionResponse } from "@/type/response";



export async function enrollCourseAction(
  prevState: unknown,
  formData: FormData
) {
  const user = await getCurrentUser();

  if (!user.success) {
    return {
      success: false,
      error: user.message,
    };
  }

  const course = JSON.parse(
    formData.get("course") as string
  );

  try {
    await enrollCourse(
      user.userId,
      course
    );

    return {
      success: true,
      error: "",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: "Failed to enroll in course.",
    };
  }
}


export async function getEnrolledCoursesAction() {

  const user = await getCurrentUser();


  if (!user.success) {
    return {
      success: false,
      error: user.message,
    };
  }


  try {

    const courses = await getEnrolledCourses(
      user.userId
    );


    return {
      success: true,
      data: courses,
    };


  } catch (error) {

    console.error(
      "Get enrolled courses error:",
      error
    );


    return {
      success: false,
      error: "Failed to fetch enrolled courses",
    };

  }
}