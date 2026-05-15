import { Sentence } from "@/types";
import { getCorrectAnswers } from "../../core";

export const getCorrectFillInAnswers = (sentences: Sentence[] | undefined) => {
  return getCorrectAnswers(sentences);
};
