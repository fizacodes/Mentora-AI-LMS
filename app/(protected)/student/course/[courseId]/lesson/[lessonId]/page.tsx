import { getLessonAction } from "@/actions/students/course/lessonAction";
import LessonViewer from "../../LessonViewer";
import QuizViewer from "../../QuizViewer";
import { AlertCircle } from "lucide-react";

type Props = {
  params: Promise<{
    courseId: string;
    lessonId: string;
  }>;

  searchParams: Promise<{
    tab?: string;
  }>;
};

export default async function LessonPage({
  params,
  searchParams,
}: Props) {
  const { courseId, lessonId } = await params;
  const { tab } = await searchParams;

  // Show quiz
  if (tab === "quiz") {
    return (
      <div className="min-h-full bg-[#061521]">
        <QuizViewer
          courseId={courseId}
          lessonId={lessonId}
        />
      </div>
    );
  }

  // Show lesson
  const result = await getLessonAction({
    courseId,
    lessonId,
  });

  if (!result.success) {
    return (
      <div className="flex min-h-full items-center justify-center px-6">
        <div
          className="
            w-full
            max-w-md
            rounded-2xl
            border border-red-400/10
            bg-[#081B2D]
            p-8
            text-center
            shadow-xl
          "
        >
          <div
            className="
              mx-auto
              flex h-12 w-12
              items-center justify-center
              rounded-xl
              border border-red-400/20
              bg-red-400/10
              text-red-400
            "
          >
            <AlertCircle size={22} />
          </div>

          <h2 className="mt-5 text-lg font-semibold text-white">
            Unable to load lesson
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            {result.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#061521]">
      <LessonViewer lesson={result.data} />
    </div>
  );
}