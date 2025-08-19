import { BaseProps } from "@/types";

export interface StaticExerciseData extends BaseProps {
  title?: string;
  slug: string;
  sections: {
    type?: "static-exercise" | "exercises" | string;
    title?: string;
    prompt?: string[];
    content?: {
      exercise?: string | string[];
    };
  }[];
}

export interface FillInExerciseData extends BaseProps {
  title: string;
  slug: string;
  sections: {
    type: "exercise-fill-in" | string;
    prompt?: string[];
    content: {
      sentences: {
        mkd: string; // текст с ___
        answer: string[];
      }[];
    };
  }[];
}
