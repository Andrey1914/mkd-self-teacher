import { TablesProps } from "@/types";

export const example1: TablesProps = {
  slug: "lesson-1",
  type: "example-1",
  content: {
    text: `Формы глагола «быть» в настоящем времени избегают позиции первого слова в предложении, фразе:`,
    words: [
      {
        mkd: `И јас «сум» Македонец.`,
        ru: `И я македонец.`,
      },
      {
        mkd: `Македонец «сум».`,
        ru: `Я македонец.`,
      },
    ],
  },
};
