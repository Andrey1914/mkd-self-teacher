import { TablesProps } from "@/types";

export const example4: TablesProps = {
  slug: "lesson-11",
  type: "example-4",

  content: {
    text: `Чаще всего слово <span>ден</span> употребляется без предлога с определёнными определениями типа <span>о*воj</span>,
    <span>тоj</span>, <span>о*ноj</span>, <span>наре*дниот</span> и т.д.:
    имеется в виду день, соотносимый с конкретной датой):`,
    words: [
      {
        mkd: "Тоj ден ни*што не му ре*ков.",
        ru: "В тот день я ему ничего не сказал.",
      },
      {
        mkd: "Наре*дниот ден за*мина.",
        ru: "На следующий день он уехал.",
      },
    ],
  },
};
