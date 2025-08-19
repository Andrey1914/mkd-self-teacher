export interface ParagraphExerciseProps {
  type?: string;
  title: string;
  slug: string;
  sections: {
    type: string;
    prompt: string[];
    content: {
      original: string;
      answer: string[];
    };
  }[];
}
