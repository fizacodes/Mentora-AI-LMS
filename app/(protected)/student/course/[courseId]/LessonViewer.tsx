import type { LessonPayload } from "@/type/response";

type Props = {
  lesson: LessonPayload;
};

export default function LessonViewer({
  lesson,
}: Props) {
  return (
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold">
        {lesson.title}
      </h1>

      <div className="prose max-w-none whitespace-pre-wrap">
        {lesson.content}
      </div>
    </div>
  );
}