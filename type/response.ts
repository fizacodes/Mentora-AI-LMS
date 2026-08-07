// types/response.ts

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