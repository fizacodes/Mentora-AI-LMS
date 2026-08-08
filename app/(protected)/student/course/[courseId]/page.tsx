
import { redirect } from "next/navigation";
import { getCourseDetailsAction } from "@/actions/students/course/courseAction";

type Props = {
  params: Promise<{
    courseId: string;
  }>;
};

export default async function CoursePage({
  params,
}: Props) {
  const { courseId } = await params;

  const result = await getCourseDetailsAction(courseId);

  if (!result.success) {
    return <div>{result.message}</div>;
  }

  const firstLesson =
    result.data.modules[0]?.lessons[0];

  if (!firstLesson) {
    return <div>No lessons found.</div>;
  }

  redirect(
    `/student/course/${courseId}/lesson/${firstLesson.id}`
  );
}