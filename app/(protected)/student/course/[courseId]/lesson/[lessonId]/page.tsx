import { getLessonAction } from "@/actions/students/course/lessonAction";
import LessonViewer from "../../LessonViewer";
import QuizViewer from "../../QuizViewer";



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
      <QuizViewer
        courseId={courseId}
        lessonId={lessonId}
      />
    );
  }


  // Show lesson
  const result = await getLessonAction({
    courseId,
    lessonId,
  });


  if (!result.success) {
    return (
      <div className="p-6">
        <p className="text-red-500">
          {result.message}
        </p>
      </div>
    );
  }


  return (
    <LessonViewer
      lesson={result.data}
    />
  );
}