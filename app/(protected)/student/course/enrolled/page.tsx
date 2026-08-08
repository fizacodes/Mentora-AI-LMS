import { getEnrolledCoursesAction } from "@/actions/students/course/enrollCourseAction";

import EmptyCourseState from "./EmptyCourseState";
import EnrolledCourseCard from "./EnrolledCourseCard";

export default async function EnrolledCoursesPage() {
  const result = await getEnrolledCoursesAction();

  if (!result.success) {
    return <div>{result.error}</div>;
  }

  if (!result.data || result.data.length === 0) {
    return <EmptyCourseState />;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        My Courses
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {result.data.map((item) => (
          <EnrolledCourseCard
            key={item.course.id}
            course={item.course}
          />
        ))}
      </div>
    </div>
  );
}