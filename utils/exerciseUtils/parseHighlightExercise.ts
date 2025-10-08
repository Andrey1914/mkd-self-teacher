// import type { WordState } from "@/types";

// import { normalizeText } from "./normalizeText";
// import { stripPunctuation } from "./stripPunctuation";

// /**
//  * Parses the original text and the text with answers for the HighlightWords.
//  * @param originalText - Source text for the exercise.
//  * @param answerText - Text with correct markup (bold/italic).
//  * @returns Array of WordState objects to initialize the state.
//  */
// export const parseHighlightExercise = (
//   originalText: string,
//   answerText: string
// ): WordState[] => {
//   const boldWords = new Set<string>();
//   const italicWords = new Set<string>();

//   // We are looking for all the words that should be in bold.
//   const boldRegex = /«([^»]+)»/g;
//   let boldMatch;
//   while ((boldMatch = boldRegex.exec(answerText))) {
//     const phrase = normalizeText(boldMatch[1]);
//     phrase.split(/\s+/).forEach((w) => {
//       const key = stripPunctuation(w);
//       if (key) boldWords.add(key);
//     });
//   }

//   // We are looking for all the words that should be in italics.
//   const italicRegex = /<em\b[^>]*>([\s\S]*?)<\/em>/gi;
//   let italicMatch;
//   while ((italicMatch = italicRegex.exec(answerText))) {
//     const phrase = normalizeText(italicMatch[1]);
//     phrase.split(/\s+/).forEach((w) => {
//       const key = stripPunctuation(w);
//       if (key) italicWords.add(key);
//     });
//   }

//   // Split the original text into words and spaces (to preserve formatting)
//   const textParts = originalText.replace(/<span>|<\/span>/g, "").split(/(\s+)/);

//   return textParts.map((part) => {
//     const isWord = /\S/.test(part);
//     if (!isWord) {
//       return {
//         text: part,
//         isWord: false,
//         userStyle: "normal",
//         correctStyle: "normal",
//         status: "unchecked",
//         touched: false,
//       };
//     }

//     const normalizedWord = normalizeText(part);
//     const key = stripPunctuation(normalizedWord);

//     let correctStyle: "normal" | "bold" | "italic" = "normal";
//     if (italicWords.has(key)) {
//       correctStyle = "italic";
//     } else if (boldWords.has(key)) {
//       correctStyle = "bold";
//     }

//     return {
//       text: part,
//       isWord: true,
//       userStyle: "normal",
//       correctStyle,
//       status: "unchecked",
//       touched: false,
//     };
//   });
// };

import type { WordState } from "@/types";
import { parseHighlightExercise as coreParseHighlightExercise } from "@/utils/core";

/**
 * Parses the original text and the text with answers for the HighlightWords.
 * @param originalText - Source text for the exercise.
 * @param answerText - Text with correct markup (bold/italic).
 * @returns Array of WordState objects to initialize the state.
 */
export const parseHighlightExercise = (
  originalText: string,
  answerText: string
): WordState[] => {
  return coreParseHighlightExercise(originalText, answerText);
};
