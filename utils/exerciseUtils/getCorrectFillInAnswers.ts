import { Sentence } from "@/types";

/**
 * Генерирует массивы с правильными ответами для показа.
 */
export const getCorrectFillInAnswers = (sentences: Sentence[] | undefined) => {
  const correctInputs =
    sentences?.map((sentence) => [...(sentence.answer ?? [])]) ?? [];

  const correctFlags =
    sentences?.map((sentence) =>
      new Array(sentence.answer?.length || 0).fill(true)
    ) ?? [];

  return { correctInputs, correctFlags };
};
