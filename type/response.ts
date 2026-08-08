// types/response.ts
import { Prisma } from "@/generated/prisma/client";
export type ActionResponse<T> =
  | {
      success: true;
      message: string;
      data: T;
    }
  | {
      success: false;
      message: string;
    };

    export type CoursePreview = {
  title: string;
  description: string;
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  estimatedDuration: number;

  modules: {
    title: string;

    lessons: {
      title: string;
    }[];
  }[];
};


export type LessonPayload =
  Prisma.LessonGetPayload<{
    include: {
      module: {
        include: {
          course: true;
        };
      };
    };
  }>;





export type CourseDetailsPayload =
  Prisma.CourseGetPayload<{
    include: {
      modules: {
        orderBy: {
          order: "asc";
        };
        include: {
          lessons: {
            orderBy: {
              order: "asc";
            };
          };
        };
      };
    };
  }>;