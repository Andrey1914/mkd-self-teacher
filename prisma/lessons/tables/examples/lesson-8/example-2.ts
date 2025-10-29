import { TablesProps } from "@/types";

export const example2: TablesProps = {
  slug: "lesson-8",
  type: "example-2",

  content: {
    text: `Ещё одна конструкция: частица <span>не*ка</span> «пусть» + глагол в форме настоящего времени 3-го лица.`,
    words: [
      {
        mkd: "Не*ка чи*та.",
        ru: "Пусть читает.",
      },
      {
        mkd: "Не*ка чи*таат.",
        ru: "Пусть читают.",
      },
    ],
  },
};
