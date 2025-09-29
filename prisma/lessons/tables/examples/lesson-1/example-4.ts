import { TablesProps } from "@/types";

export const example4: TablesProps = {
  slug: "lesson-1",
  type: "example-4",
  content: {
    text: `Кроме того, вопрос может оформлятся вопросительным словом <span>да*ли</span>, которое не переводится на русский язык
      и просто сигнализирует о том, что перед нами вопрос:`,
    words: [
      {
        mkd: `Да*ли На*таша жи*вее во Ско*пjе?`,
        ru: `Наташа живет в Скопье?`,
      },
    ],
  },
};
