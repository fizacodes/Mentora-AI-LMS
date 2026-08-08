import type { CourseDetailsPayload } from "@/type/response";
import Link from "next/link";

type Props = {
  course: CourseDetailsPayload;
};

export default function CourseSidebar({
  course,
}: Props) {
  return (
    <div className="p-4">

      <h2 className="mb-6 text-xl font-bold">
        {course.title}
      </h2>


      <div className="space-y-6">

        {course.modules.map((module) => (
          <div key={module.id}>

            <h3 className="mb-3 font-semibold">
              {module.title}
            </h3>


            <div className="space-y-3">

              {module.lessons.map((lesson) => (
                <div key={lesson.id}>

                  {/* Lesson */}
                  <Link
                    href={`/student/course/${course.id}/lesson/${lesson.id}`}
                    className="
                    block rounded-lg px-3 py-2
                    hover:bg-slate-100
                    "
                  >
                    📘 {lesson.title}
                  </Link>


                  {/* Quiz */}
                  <Link
                    href={`/student/course/${course.id}/lesson/${lesson.id}?tab=quiz`}
                    className="
                    ml-6 block rounded-lg px-3 py-1
                    text-sm text-slate-500
                    hover:bg-slate-100
                    "
                  >
                    📝 Quiz: {lesson.title}
                  </Link>


                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}