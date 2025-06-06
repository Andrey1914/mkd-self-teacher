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
