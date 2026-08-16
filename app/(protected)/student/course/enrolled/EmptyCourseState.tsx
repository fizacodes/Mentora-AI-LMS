import Link from "next/link";

export default function EmptyCourseState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">

      <h2 className="text-2xl font-semibold">
        No courses yet
      </h2>

      <p className="mt-3 text-muted-foreground">
        Search for a topic and let AI build your first course.
      </p>

      <Link
        href="/student/course"
        className="mt-6 rounded-xl bg-sky-600 px-6 py-3 text-white"
      >
        Explore Courses
      </Link>

    </div>
  );
}