import { GrammarTableProps } from "@/types/grammarTypes";

const grammarPronouns1: GrammarTableProps = {
  type: "grammar-pronouns-1",
  title: ["ГРАММАТИКА", "<span>ГРАМАТИКА</span>"],
  subtitle: ["ФОРМЫ ЛИЧНЫХ МЕСТОИМЕНИЙ"],
  content: {
    subtitle: ["Лицо", "Единственное число", "Множественное число"],
    words: [
      {
        persone: "1-e",
        singular: "<span>jас</span> я",
        plural: "<span>ни\u0301е</span> мы",
      },
      {
        persone: "2-e",
        singular: "<span>ти</span> ты",
        plural: "<span>ви\u0301е</span> вы",
      },
      {
        persone: "3-e",
        singular: "<span>тој, то\u0301а, та\u0301а</span> он, оно, она",
        plural: "<span>ти\u0301е</span> они",
      },
    ],
  },
};

export default grammarPronouns1;
