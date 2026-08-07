import { z } from "zod";

export const courseSearchSchema = z.object({
  query: z
    .string()
    .min(3, "Topic must be at least 3 characters")
    .max(100),
});


export const generateCourseSchema = z.object({
  topic: z
    .string()
    .min(3)
    .max(100),
});


export const enrollCourseSchema = z.object({

  title: z.string(),

  description: z.string(),

  difficulty: z.enum([
    "BEGINNER",
    "INTERMEDIATE",
    "ADVANCED",
  ]),

  estimatedDuration: z.number(),

  modules: z.array(
    z.object({

      title: z.string(),

      lessons: z.array(
        z.object({
          title: z.string(),
        })
      ),

    })
  ),

});

export const lessonSchema = z.object({
  lessonId: z.string().cuid(),
});


export const generateQuizSchema = z.object({
  lessonId: z.string().cuid(),
});


export const submitQuizSchema = z.object({

  quizId: z.string().cuid(),

  answers: z.array(
    z.object({
      questionId: z.string().cuid(),
      answer: z.string(),
    })
  )

});