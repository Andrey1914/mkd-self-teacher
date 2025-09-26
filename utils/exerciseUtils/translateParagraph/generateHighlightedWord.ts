import { normalizeAnswer } from "@/utils";

/**
 * Generates an HTML string with incorrect words highlighted.
 */
export const generateHighlightedWord = (
  userInput: string,
  correctOptions: string[][]
): string => {
  const rawWords = userInput.trim().split(/\s+/);

  return rawWords
    .map((originalWord, idx) => {
      const normalized = normalizeAnswer(originalWord, {
        trim: true,
        lowercase: true,
        convertLatinToCyrillic: true,
      });
      const isCorrect = correctOptions[idx]?.includes(normalized);
      if (!isCorrect) {
        return `<span style="color: #ffa347">${originalWord}</span>`;
      }
      return originalWord;
    })
    .join(" ");
};
