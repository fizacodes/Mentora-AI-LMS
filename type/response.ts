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
            include: {
              progress: true;
            };
          };
        };
      };
    };
  }>;

  export type StudentDashboardData = {
  enrolledCourses: {
    id: string;
    title: string;
    description: string;
    thumbnail: string | null;
    difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
    progress: number;
    completedLessons: number;
    totalLessons: number;

    nextLesson: {
      id: string;
      title: string;
    } | null;

    enrolledAt: Date;
  }[];

  overallProgress: number;

  completedCourses: {
    id: string;
    title: string;
    description: string;
    thumbnail: string | null;
    difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
    progress: number;
    completedLessons: number;
    totalLessons: number;

    nextLesson: {
      id: string;
      title: string;
    } | null;

    enrolledAt: Date;
  }[];

  continueLearning: {
    id: string;
    title: string;
    description: string;
    thumbnail: string | null;
    difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
    progress: number;
    completedLessons: number;
    totalLessons: number;

    nextLesson: {
      id: string;
      title: string;
    } | null;

    enrolledAt: Date;
  } | null;

  recentQuizScores: {
    id: string;
    score: number;
    passed: boolean;
    attemptedAt: Date;
    quizId: string;
    lessonTitle: string;
    courseId: string;
    courseTitle: string;
  }[];
};