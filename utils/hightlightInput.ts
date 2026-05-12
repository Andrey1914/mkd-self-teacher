import { getHighlightStyle } from "@/utils/core";
import { HIGHLIGHT_STYLES } from "@/constants";

export const highlightInput = (
  input: string,
  correctAnswerString: string,
  show: boolean,
) => {
  if (!show || input.trim() === "") return {};

  const isCorrect = getHighlightStyle(input, correctAnswerString, {
    convertLatinToCyrillic: true,
  });

  return {
    boxShadow: isCorrect
      ? HIGHLIGHT_STYLES.CORRECT
      : HIGHLIGHT_STYLES.INCORRECT,
  };
};
