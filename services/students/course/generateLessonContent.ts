import { chatModel } from "@/lib/ai/model";

type GenerateLessonContentParams = {
  courseTitle: string;
  moduleTitle: string;
  lessonTitle: string;
};

export async function generateLessonContent({
  courseTitle,
  moduleTitle,
  lessonTitle,
}: GenerateLessonContentParams): Promise<string> {

  const prompt = `
You are an expert teacher creating a high-quality programming course.

Course:
${courseTitle}

Module:
${moduleTitle}

Lesson:
${lessonTitle}

Generate the lesson in Markdown.

Requirements:

- Start with an H1 heading.
- Explain concepts from beginner to advanced.
- Use H2 and H3 headings where appropriate.
- Use bullet points.
- Use numbered lists for steps.
- Include practical examples.
- Include code blocks when appropriate.
- Explain the code.
- Add common mistakes.
- Add best practices.
- End with a summary.
- End with 3-5 practice questions.

Return ONLY valid Markdown.
`;

  const response = await chatModel.invoke(prompt);

  return response.content.toString();
}