import { ExampleSection } from "@/types/exampleTypes";

export const example1: ExampleSection = {
  type: "example-1",
  content: {
    text: `Формы глагола «быть» в настоящем времени избегают позиции первого слова в предложении, фразе:`,
    words: [
      {
        mkd: `<span>И јас «сум» Македонец.</span>`,
        ru: `И я македонец.`,
      },
      {
        mkd: `<span>Македонец «сум».</span>`,
        ru: `Я македонец.`,
      },
    ],
  },
};
