export interface ExercisesProps {
  type?: string;
  slug?: string;
  title?: string;
  sections: {
    type?: string;
    singleInput?: boolean;
    title?: string;
    prompt?: string[];
    answerSet?: AnswerSet;
    content: {
      exercise?: string | string[];
      original?: string;
      answer?: string[];
      text?: string;
      sentences?: Sentence[];
    };
  }[];

  data?: Partial<ExercisesProps>;
}

export type AnswerSet = {
  labels?: string[];
};

export type Sentence = {
  mkd?: string;
  answer?: string[];
};

export type WordState = {
  text: string;
  isWord: boolean;
  userStyle: "normal" | "bold" | "italic";
  correctStyle: "normal" | "bold" | "italic";
  status: "unchecked" | "correct" | "incorrect";
  touched: boolean;
};
