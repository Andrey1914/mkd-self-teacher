export type ParagraphExerciseProps = {
  title: string;
  slug: string;
  sections: {
    type: string;
    prompt: string[];
    content: {
      original: string;
      answers: string[];
    };
  }[];
};
