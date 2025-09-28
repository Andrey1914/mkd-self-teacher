import { TablesProps } from "@/types";

export const grammarPronouns1: TablesProps = {
  type: "grammar-pronouns-1",
  title: {
    ru: "ГРАММАТИКА",
    mkd: "ГРАММАТИКА",
  },
  subtitle: ["ФОРМЫ ЛИЧНЫХ МЕСТОИМЕНИЙ"],
  content: {
    subtitle: ["Лицо", "Единственное число", "Множественное число"],
    words: [
      {
        person: "1-e",
        singular: "<span>jас</span> я",
        plural: "<span>ни\u0301е</span> мы",
      },
      {
        person: "2-e",
        singular: "<span>ти</span> ты",
        plural: "<span>ви\u0301е</span> вы",
      },
      {
        person: "3-e",
        singular: "<span>тој, то\u0301а, та\u0301а</span> он, оно, она",
        plural: "<span>ти\u0301е</span> они",
      },
    ],
  },
};
