import { TablesProps } from "@/types";

export const example6: TablesProps = {
  slug: "lesson-3",
  type: "example-6",
  content: {
    text: `Место частицы <span>не</span> зависит от смысла:`,
    words: [
      {
        mkd: `Не са*кам да боле*дувам.`,
        ru: `Я не хочу болеть.`,
      },
      {
        mkd: `Са*каме да не боле*дувам.`,
        ru: `Я хочу не болеть.`,
      },
    ],
  },
};
