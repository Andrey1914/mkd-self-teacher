// import { ExampleSection } from "@/types";
import { TablesProps } from "@/types";

export const example6: TablesProps = {
  slug: "lesson-3",
  type: "example-6",
  content: {
    text: `Место частицы <span>не</span> зависит от смысла:`,
    words: [
      {
        mkd: `<span>Не са\u0301кам да боле\u0301дувам.</span>`,
        ru: `Я не хочу болеть.`,
      },
      {
        mkd: `<span>Са\u0301каме да не боле\u0301дувам.</span>`,
        ru: `Я хочу не болеть.`,
      },
    ],
  },
};
