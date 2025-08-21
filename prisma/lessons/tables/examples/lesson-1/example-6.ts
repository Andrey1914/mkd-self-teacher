// import { ExampleSection } from "@/types/exampleTypes";
import { TablesProps } from "@/types";

export const example6: TablesProps = {
  slug: "lesson-1",
  type: "example-6",
  content: {
    text: `Общий вопрос может содержать отрицание. В этом случае используется или <span>не</span> + глагол, или конструкция
      <span>да не</span> + глагол:`,
    words: [
      {
        mkd: `<span>Не сте Маке\u0301донци?</span>`,
        ru: `Ви не македонцы?`,
      },
      {
        mkd: `<span>Да не сте Маке\u0301донци?</span>`,
        ru: `Не македонцы ли ви?`,
      },
    ],
  },
};
