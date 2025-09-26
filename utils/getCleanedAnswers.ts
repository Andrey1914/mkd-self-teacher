import { normalizeAnswer } from "@/utils";

export const getCleanedAnswers = (
  answers: string[] | undefined
): string[] | undefined => {
  return answers?.map((answer) =>
    normalizeAnswer(answer.replace(/\s+/g, " "), {
      trim: true,
      convertLatinToCyrillic: false,
      lowercase: false,
    })
  );
};
