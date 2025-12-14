import { NAMES } from "@/constants";
import type { Sentence, AnswerSet } from "@/types";

const nameToRegex = (name: string): string => {
  return name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\\\*/g, "\\*?");
};

const ALL_NAMES_REGEX = new RegExp(NAMES.map(nameToRegex).join("|"), "g");

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

    const dynamicWord = answerSet.pronounWords?.[activeIndex];

    return sentences?.map((sentence) => {
      let updatedMkd = sentence.mkd ?? "";

      if (activeIndex > 0) {
        updatedMkd = updatedMkd.replace(
          ALL_NAMES_REGEX,
          (match, offset, fullString) => {
            const precedingText = fullString.substring(0, offset);

            const textAfterNumber = precedingText.replace(/^[\d\.\s]*/g, "");

            const isMidSentence = textAfterNumber.length > 0;

            if (isMidSentence) {
              return pronoun.toLowerCase();
            }

            return pronoun;
          }
        );
      }

      if (dynamicWord) {
        updatedMkd = updatedMkd.replace(
          /\*\*\[\[PRONOUN_WORD\]\]\*\*/g,
          `<span>${dynamicWord}</span>`
        );
      }

      return {
        ...sentence,
        mkd: updatedMkd,
        answer: Array.isArray(sentence.answer)
          ? sentence.answer.map(
              (encodedString) => encodedString.split("/")[activeIndex] ?? ""
            )
          : [],
      };
    });
  }

  return sentences;
};
