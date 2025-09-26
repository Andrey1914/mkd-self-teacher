import { Sentence } from "@/types";

/**
 * Initializes the initial state for the FillInExercise.
 */
export const initializeFillInState = (sentences: Sentence[] | undefined) => {
  const initialInputs =
    sentences?.map((sentence) =>
      new Array(sentence.answer?.length || 0).fill("")
    ) ?? [];

  const initialFlags =
    sentences?.map((sentence) =>
      new Array(sentence.answer?.length || 0).fill(false)
    ) ?? [];

  return { initialInputs, initialFlags };
};
