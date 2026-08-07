import { getCurrentUser } from "@/lib/getCurrentUser";

import { enrollCourseSchema } from "@/lib/validators/courseSchema";
import { enrollCourse } from "@/services/students/course/enrollCourse";
import { getEnrolledCourses } from "@/services/students/course/getEnrolledCourse";



export async function enrollCourseAction(
  data: unknown
) {

  const user = await getCurrentUser();


  if (!user.success) {
    return {
      success: false,
      error: "Unauthorized",
    };
  }


  const validated =
    enrollCourseSchema.safeParse(data);


  if (!validated.success) {
    return {
      success: false,
      error: "Invalid course data",
    };
  }


  try {

    const result = await enrollCourse(
      user.userId,
      validated.data
    );


    return {
      success: true,
      data: result,
    };


  } catch (error) {

    console.error(
      "Enrollment error:",
      error
    );


    return {
      success: false,
      error: "Failed to enroll course",
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