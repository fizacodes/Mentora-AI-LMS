import { chatModel } from "@/lib/ai/model";
import type { CoursePreview } from "@/type/response";


export async function generateCoursePreview(
  topic: string
): Promise<CoursePreview> {


  const prompt = `
Create a complete learning course outline for:

Topic: ${topic}


Return ONLY valid JSON.

Format:

{
  "title": "",
  "description": "",
  "difficulty": "BEGINNER | INTERMEDIATE | ADVANCED",
  "estimatedDuration": number,

  "modules": [
    {
      "title": "",
      "lessons": [
        {
          "title": ""
        }
      ]
    }
  ]
}

Rules:
- Create practical modules
- Create lessons in learning order
- Do not include markdown
- Return only JSON
`;


  const response = await chatModel.invoke(prompt);


  const course =
    JSON.parse(response.content.toString());


  return course;
}