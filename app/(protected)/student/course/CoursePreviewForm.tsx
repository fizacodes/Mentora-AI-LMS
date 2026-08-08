import type { CoursePreview } from "@/type/response";
import EnrollButton from "./EnrollButton";

type Props = {
  course: CoursePreview;
};

export default function CoursePreviewCard({
  course,
}: Props) {
  return (
    <div className="rounded-2xl border p-6">
      <h2 className="text-2xl font-bold">
        {course.title}
      </h2>

      <p>{course.description}</p>

      <div className="mt-4 flex gap-4">
        <span>{course.difficulty}</span>
        <span>{course.estimatedDuration} Hours</span>
      </div>

      <div className="mt-6">
        {course.modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="mb-6">
            <h3 className="font-semibold">
              {module.title}
            </h3>

            <ul className="ml-5 mt-2 list-disc">
              {module.lessons.map((lesson, lessonIndex) => (
                <li key={lessonIndex}>
                  {lesson.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* We'll replace this with EnrollButton later */}
      <EnrollButton course={course} />
    </div>
  );
}