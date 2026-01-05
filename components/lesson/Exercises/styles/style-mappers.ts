export type WordStyle = "normal" | "bold" | "italic";
export type WordStatus = "unchecked" | "correct" | "incorrect";

export function getWordStyleClass(
  style: WordStyle,
  classes: {
    normal: string;
    bold: string;
    italic: string;
  }
) {
  switch (style) {
    case "bold":
      return classes.bold;
    case "italic":
      return classes.italic;
    default:
      return classes.normal;
  }
}

export function getWordStatusClass(
  status: WordStatus,
  classes: {
    correct: string;
    incorrect: string;
  }
) {
  switch (status) {
    case "correct":
      return classes.correct;
    case "incorrect":
      return classes.incorrect;
    default:
      return "";
  }
}
