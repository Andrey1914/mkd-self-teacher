// import { normalizeAnswer } from "@/utils";

// /**
//  * Parses a string of answer options into an array of arrays.
//  * Example: "word1/word2 word3" -> [["word1", "word2"], ["word3"]]
//  */
// export const parseAnswerWords = (text: string): string[][] => {
//   return normalizeAnswer(text, {
//     trim: true,
//     lowercase: true,
//     convertLatinToCyrillic: true,
//   })
//     .split(/\s+/)
//     .map((word) => word.split("/"));
// };

import { parseAnswerWords as coreParseAnswerWords } from "../../core";

/**
 * Parses a string of answer options into an array of arrays.
 * Example: \"word1/word2 word3\" -> [[\"word1\", \"word2\"], [\"word3\"]]
 */
export const parseAnswerWords = (text: string): string[][] => {
  return coreParseAnswerWords(text);
};
