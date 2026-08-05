// src/lib/zod.ts

import { ZodError } from "zod";

export function getFieldErrors(error: ZodError) {
  const fieldErrors: Record<string, string> = {};

  error.issues.forEach((issue) => {
    const field = issue.path[0];

    if (typeof field === "string") {
      fieldErrors[field] = issue.message;
    }
  });

  return fieldErrors;
}