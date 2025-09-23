export interface ExercisesProps {
  type?: string;
  slug?: string;
  title?: string;
  sections: {
    // type?: "static-exercise" | "exercises" | "exercise-fill-in" | string;
    type?: string;

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

export type WordState = {
  text: string;
  isWord: boolean;
  userStyle: "normal" | "bold" | "italic";
  correctStyle: "normal" | "bold" | "italic";
  status: "unchecked" | "correct" | "incorrect";
  touched: boolean;

  data?: Partial<WordState>;
};
