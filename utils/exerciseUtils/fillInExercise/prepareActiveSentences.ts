import type { Sentence, AnswerSet } from "@/types";

/**
 * Подготавливает массив предложений для отображения в FillInExercise.
 * Если есть несколько наборов ответов, функция "расшифровывает" нужный набор
 * и заменяет имена на соответствующие местоимения.
 * @param sentences Исходный массив предложений.
 * @param answerSet Объект с описанием наборов ответов.
 * @param activeIndex Индекс активного набора ответов.
 * @returns Обработанный массив предложений, готовый к рендерингу.
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
      // Заменяем "Дејан" (с возможным ударением) на текущее местоимение/имя
      mkd: sentence.mkd?.replace(/Де\*?jан/g, pronoun) ?? "",
      // "Расшифровываем" строку ответов, выбирая нужный по индексу
      answer: Array.isArray(sentence.answer)
        ? sentence.answer.map(
            (encodedString) => encodedString.split("/")[activeIndex] ?? ""
          )
        : [],
    }));
  }

  return sentences;
};
