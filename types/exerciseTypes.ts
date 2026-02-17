import { ReactNode } from "react";

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
  pronounWords?: string[];
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

export interface OptionItem {
  raw: string;
  formatted: ReactNode;
}

export interface ParsedSentencePart {
  isOption: boolean;
  options?: Array<{ raw: string; formatted: string }>;
  text?: string;
  correctAnswer?: string;
  optionIndex?: number;
  isSentenceNumber?: boolean;
  isWord?: boolean;
}
