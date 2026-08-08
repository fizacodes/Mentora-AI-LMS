import { getQuizAction } from "@/actions/students/course/quizAction";

type Props = {
  courseId: string;
  lessonId: string;
};


export default async function QuizViewer({
  courseId,
  lessonId,
}: Props) {

  const result = await getQuizAction({
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


  const quiz = result.data;


  return (
    <div className="space-y-8 p-6">

      <div>
        <h1 className="text-2xl font-bold">
          Lesson Quiz
        </h1>

        <p className="text-sm text-slate-500">
          Passing score: {quiz.passingScore}%
        </p>
      </div>


      <div className="space-y-6">

        {quiz.questions.map(
          (question, index) => (
            <div
              key={question.id}
              className="
              rounded-xl border p-5
              "
            >

              <h2 className="mb-4 font-semibold">
                {index + 1}. {question.question}
              </h2>


              <div className="space-y-2">

                {(
                  question.options as string[]
                ).map((option) => (

                  <label
                    key={option}
                    className="
                    flex cursor-pointer
                    items-center gap-3
                    rounded-lg border
                    p-3
                    hover:bg-slate-50
                    "
                  >

                    <input
                      type="radio"
                      name={question.id}
                      value={option}
                    />


                    <span>
                      {option}
                    </span>

                  </label>

                ))}

              </div>

            </div>
          )
        )}

      </div>


      <button
        className="
        rounded-lg
        bg-blue-600
        px-6 py-3
        text-white
        "
      >
        Submit Quiz
      </button>

    </div>
  );
}