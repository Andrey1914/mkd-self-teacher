import type { Sentence, AnswerSet } from "@/types";

/**
 * @param sentences
 * @param answerSet
 * @param activeIndex
 * @returns
 */
export const prepareActiveSentences = (
  sentences: Sentence[] | undefined,
  answerSet: AnswerSet | undefined,
  activeIndex: number
): Sentence[] | undefined => {
  const hasMultipleAnswerSets = !!answerSet;

  if (hasMultipleAnswerSets && Array.isArray(answerSet.labels)) {
    const pronoun = answerSet.labels[activeIndex];

    return sentences?.map((sentence) => ({
      ...sentence,
      // Заменяем "Дејан", "Жена ми", "Филип" (с возможным ударением) на текущее местоимение/имя
      mkd:
        sentence.mkd?.replace(/Де\*?jан|Же\*?на ми|Фи\*?лип/g, pronoun) ?? "",
      answer: Array.isArray(sentence.answer)
        ? sentence.answer.map(
            (encodedString) => encodedString.split("/")[activeIndex] ?? ""
          )
        : [],
    }));
  }

  return sentences;
};
