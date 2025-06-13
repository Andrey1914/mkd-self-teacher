export type ParagraphExerciseProps = {
  title: string;
  slug: string;
  sections: {
    type: "paragraph-exercise";
    prompt: string[];
    content: {
      original: string;
      answers: string[];
    };
  }[];
};
