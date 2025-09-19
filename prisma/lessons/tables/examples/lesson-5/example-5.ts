import { TablesProps } from "@/types";

export const example5: TablesProps = {
  slug: "lesson-5",
  type: "example-5",
  content: {
    text: `Вопросительное слого <span>кого</span> также удваивается:
    `,
    words: [
      {
        mkd: `Ко\u0301го го че\u0301каш?`,
        ru: `Кого ты ждёшь?`,
      },
    ],
  },
};
