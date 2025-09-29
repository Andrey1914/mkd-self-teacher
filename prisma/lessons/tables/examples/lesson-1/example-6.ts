import { TablesProps } from "@/types";

export const example6: TablesProps = {
  slug: "lesson-1",
  type: "example-6",
  content: {
    text: `Общий вопрос может содержать отрицание. В этом случае используется или <span>не</span> + глагол, или конструкция
      <span>да не</span> + глагол:`,
    words: [
      {
        mkd: `Не сте Маке*донци?`,
        ru: `Ви не македонцы?`,
      },
      {
        mkd: `Да не сте Маке*донци?`,
        ru: `Не македонцы ли ви?`,
      },
    ],
  },
};
