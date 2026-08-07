"use server";

import { courseSearchSchema } from "@/lib/validators/courseSchema";
import { generateCoursePreview } from "@/services/students/course/courseService";
import { getCourseDetails } from "@/services/students/course/getCourseDetail";
import { getCurrentUser } from "@/lib/getCurrentUser";

export async function generateCoursePreviewAction(
  data: {
    query:string;
  }
) {


  const result =
    courseSearchSchema.safeParse(data);


  if(!result.success){

    return {
      success:false,
      error:"Invalid topic"
    };

  }


  const course =
    await generateCoursePreview(
      result.data.query
    );


  return {
    success:true,
    data:course
  };

}

export async function getCourseDetailsAction(
  courseId: string
) {

  const user = await getCurrentUser();


  if (!user.success) {
    return {
      success:false,
      error:user.message,
    };
  }


  try {

    const course =
      await getCourseDetails(
        courseId,
        user.userId
      );


    return {
      success:true,
      data:course,
    };


  } catch(error) {

    console.error(
      "Course details error:",
      error
    );


    return {
      success:false,
      error:"Failed to fetch course",
    };

  }

}

