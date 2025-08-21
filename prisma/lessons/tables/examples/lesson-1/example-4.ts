// import { ExampleSection } from "@/types/exampleTypes";
import { TablesProps } from "@/types";

export const example4: TablesProps = {
  slug: "lesson-1",
  type: "example-4",
  content: {
    text: `Кроме того, вопрос может оформлятся вопросительным словом <span>да\u0301ли</span>, которое не переводится на русский язык
      и просто сигнализирует о том, что перед нами вопрос:`,
    words: [
      {
        mkd: `<span>Да\u0301ли На\u0301таша жи\u0301вее во Ско\u0301пjе?</span>`,
        ru: `Наташа живет в Скопье?`,
      },
    ],
  },
};
