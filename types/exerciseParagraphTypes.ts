export type ParagraphExerciseProps = {
  title: string;
  slug: string;
  sections: {
    // type: "paragraph-exercise";
    type: string;
    prompt: string[];
    content: {
      original: string;
      answers: string[];
    };
  }[];
};
