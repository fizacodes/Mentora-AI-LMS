import SearchCourseForm from "./SearchCourseForm";

export default function CoursePage() {
  return (
    <div className="mx-auto max-w-6xl py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Discover Your Next Course
        </h1>

        <p className="mt-2 text-muted-foreground">
          Search any topic and let AI create a personalized learning path.
        </p>
      </div>

      <SearchCourseForm />
    </div>
  );
}