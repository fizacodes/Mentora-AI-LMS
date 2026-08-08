import Link from "next/link";

type Props = {
  course: {
    id: string;
    title: string;
    description: string;
    difficulty: string;
    estimatedDuration: number;
  };
};

export default function EnrolledCourseCard({
  course,
}: Props) {
  return (
    <div className="rounded-2xl border p-6">

      <h2 className="text-xl font-bold">
        {course.title}
      </h2>

      <p className="mt-2 text-sm">
        {course.description}
      </p>

      <div className="mt-4 flex gap-3 text-sm">
        <span>{course.difficulty}</span>
        <span>{course.estimatedDuration} hrs</span>
      </div>

      {/* Progress will come later */}
      <div className="mt-6 h-2 rounded-full bg-gray-200">
        <div className="h-full w-0 rounded-full bg-sky-600" />
      </div>

      <Link
        href={`/student/courses/${course.id}`}
        className="mt-6 inline-flex rounded-lg bg-sky-600 px-5 py-2 text-white"
      >
        Continue Learning
      </Link>

    </div>
  );
}