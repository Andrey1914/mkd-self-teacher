import { cleanAnswers } from "./core";

export const getCleanedAnswers = (
  answers: string[] | undefined,
): string[] | undefined => {
  return cleanAnswers(answers, {
    trim: true,
    convertLatinToCyrillic: false,
    lowercase: false,
    collapseSpaces: true,
  });
};
