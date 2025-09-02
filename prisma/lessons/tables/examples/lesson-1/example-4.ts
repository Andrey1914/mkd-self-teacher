import { TablesProps } from "@/types";

export const example4: TablesProps = {
  slug: "lesson-1",
  type: "example-4",
  content: {
    text: `Кроме того, вопрос может оформлятся вопросительным словом <span>да\u0301ли</span>, которое не переводится на русский язык
      и просто сигнализирует о том, что перед нами вопрос:`,
    words: [
      {
        mkd: `Да\u0301ли На\u0301таша жи\u0301вее во Ско\u0301пjе?`,
        ru: `Наташа живет в Скопье?`,
      },
    ],
  },
};
