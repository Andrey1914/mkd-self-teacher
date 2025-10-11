// import { normalizeAnswer } from "@/utils";

// export const highlightInput = (
//   input: string,
//   correct: string,
//   show: boolean
// ) => {
//   if (!show || input === "") return {};

//   const normalizedInput = normalizeAnswer(input, {
//     convertLatinToCyrillic: true,
//   });
//   const normalizedCorrect = normalizeAnswer(correct, {
//     convertLatinToCyrillic: true,
//   });

//   const isCorrect = normalizedInput === normalizedCorrect;

//   return {
//     boxShadow: isCorrect ? "0 0 8px 3px #00c150" : "0 0 8px 3px #ffa347",
//   };
// };

//---------------------------------------------------------------
import { getHighlightStyle } from "./core";

export const highlightInput = (
  input: string,
  correct: string,
  show: boolean
) => {
  return getHighlightStyle(input, correct, show, {
    convertLatinToCyrillic: true,
  });
};
