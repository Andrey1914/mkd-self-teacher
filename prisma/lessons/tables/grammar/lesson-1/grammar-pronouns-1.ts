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
        plural: "<span>ни*е</span> мы",
      },
      {
        person: "2-e",
        singular: "<span>ти</span> ты",
        plural: "<span>ви*е</span> вы",
      },
      {
        person: "3-e",
        singular: "<span>тој, то*а, та*а</span> он, оно, она",
        plural: "<span>ти*е</span> они",
      },
    ],
  },
};
