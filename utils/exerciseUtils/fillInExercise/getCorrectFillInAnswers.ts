// import { Sentence } from "@/types";

// /**
//  * Generates arrays with correct answers for display.
//  */
// export const getCorrectFillInAnswers = (sentences: Sentence[] | undefined) => {
//   const correctInputs =
//     sentences?.map((sentence) => [...(sentence.answer ?? [])]) ?? [];

//   const correctFlags =
//     sentences?.map((sentence) =>
//       new Array(sentence.answer?.length || 0).fill(true)
//     ) ?? [];

//   return { correctInputs, correctFlags };
// };

import { Sentence } from "@/types";
import { getCorrectAnswers } from "../../core";

/**
 * Generates arrays with correct answers for display.
 */
export const getCorrectFillInAnswers = (sentences: Sentence[] | undefined) => {
  return getCorrectAnswers(sentences);
};
