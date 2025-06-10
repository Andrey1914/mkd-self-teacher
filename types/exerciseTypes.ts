export interface StaticExerciseData {
  title: string;
  slug: string;
  sections: StaticExerciseSection[];
}

export interface StaticExerciseSection {
  type: "static-exercise" | string;
  prompt?: string[];
  content?: {
    exercise?: string | string[];
  };
}

export interface FillInExerciseData {
  title: string;
  slug: string;
  sections: {
    type: "exercise-fill-in";
    prompt?: string[];
    content: {
      sentences: {
        mkd: string; // текст с ___
        answer: string[];
      }[];
    };
  }[];
}
