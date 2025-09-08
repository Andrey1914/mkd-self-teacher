export interface ExercisesProps {
  type?: string;
  slug?: string;
  title?: string;
  sections: {
    type?: "static-exercise" | "exercises" | "exercise-fill-in" | string;
    singleInput?: boolean;
    title?: string;
    prompt?: string[];
    content: {
      exercise?: string | string[];
      original?: string;
      answer?: string[];
      text?: string;
      sentences?: {
        mkd?: string; // текст с ___
        answer?: string[];
      }[];
    };
  }[];

  data?: Partial<ExercisesProps>;
}
