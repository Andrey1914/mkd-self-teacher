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
import { getHighlightStyle, parseAnswerWords, HIGHLIGHT_STYLES } from "./core";

export const highlightInput = (
  input: string,
  correct: string,
  show: boolean
) => {
  if (!show || input.trim() === "") return {};

  const correctOptions = parseAnswerWords(correct);
  const isCorrect = getHighlightStyle(input, correctOptions, {
    convertLatinToCyrillic: true,
  });

  return {
    boxShadow: isCorrect
      ? HIGHLIGHT_STYLES.CORRECT
      : HIGHLIGHT_STYLES.INCORRECT,
  };
};
