import { TablesProps } from "@/types";

export const example1: TablesProps = {
  slug: "lesson-17",
  type: "example-1",
  anchor: "the-construction-there-is/is-not",
  title: {
    ru: "ГРАММАТИКА",
    mkd: "ГРАМАТИКА",
  },
  subtitle:
    "КОНСТРУКЦИЯ <span>ИМА/НЕМА</span> + ПРИЧАСТИЕ НА <span>-НО/ТО</span>",
  content: {
    text: `Помимо форм перфекта, образующегося при помощи л-формы, в македонском языке существует конструкция <span>и*ма/не*ма</span> + причастие 
    на <span>-но/то</span>, которая также имеет перфективное значение:`,
    words: [
      {
        mkd: "До*сега не*мам про*бано маке*донско ви*но.",
        ru: "До этого момента я никогда не пробовал македонское вино.",
      },
    ],
  },
};
