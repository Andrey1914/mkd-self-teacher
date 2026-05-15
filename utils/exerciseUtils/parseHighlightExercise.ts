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
  answerText: string,
): WordState[] => {
  return coreParseHighlightExercise(originalText, answerText);
};
