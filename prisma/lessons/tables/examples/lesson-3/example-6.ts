import { TablesProps } from "@/types";

export const example6: TablesProps = {
  slug: "lesson-3",
  type: "example-6",
  content: {
    text: `Место частицы <span>не</span> зависит от смысла:`,
    words: [
      {
        mkd: `Не са\u0301кам да боле\u0301дувам.`,
        ru: `Я не хочу болеть.`,
      },
      {
        mkd: `Са\u0301каме да не боле\u0301дувам.`,
        ru: `Я хочу не болеть.`,
      },
    ],
  },
};
