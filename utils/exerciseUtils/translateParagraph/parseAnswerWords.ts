import { parseAnswerWords as coreParseAnswerWords } from "../../core";

export const parseAnswerWords = (text: string): string[][] => {
  return coreParseAnswerWords(text);
};
