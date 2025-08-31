import { TablesProps } from "@/types";

export const example1: TablesProps = {
  slug: "lesson-3",
  type: "example-1",
  content: {
    text: `Краткие формы возвратных и личных местоимений используются при наличии глагола. Обратите внимание, что краткие формы стоят
    перед глаголом:`,
    words: [
      {
        mkd: `<span>И\u0301ван му пи\u0301шував пи\u0301смо.</span>`,
        ru: `Иван пишет ему письмо.`,
      },
      {
        mkd: `<span>И\u0301ван го зна\u0301е</span>`,
        ru: `Иван его знает.`,
      },
    ],
  },
};
