import { GrammarTableProps } from "@/types/grammarTypes";

const iClass: GrammarTableProps = {
  type: `grammar`,
  subtitle: [`СПРЯЖЕНИЕ ГЛАГОЛОВ И-КЛАССА`],
  text: [
    `<span>о\u0301ди</span> идти, <span>се\u0301ди</span> сидеть, <span>бро\u0301и</span> считать, <span>сто\u0301и</span> стоять.`,
  ],
  content: {
    words: [
      {
        persone: `<span>jас</span>`,
        singular: `<span>о\u0301д-а-м</span>`,
        plural: `<span>бро\u0301-j-ам</span>`,
      },
      {
        persone: `<span>ти</span>`,
        singular: `<span>о\u0301д-и-ш</span>`,
        plural: `<span>бро\u0301-и-ш</span>`,
      },
      {
        persone: `<span>тоj, таа, тоа</span>`,
        singular: `<span>о\u0301д-и</span>`,
        plural: `<span>бро\u0301-и</span>`,
      },
      {
        persone: `<span>ние</span>`,
        singular: `<span>о\u0301д-и-ме</span>`,
        plural: `<span>бро\u0301-и-ме</span>`,
      },
      {
        persone: `<span>вие</span>`,
        singular: `<span>о\u0301д-и-те</span>`,
        plural: `<span>бро\u0301-и-те</span>`,
      },
      {
        persone: `<span>тие</span>`,
        singular: `<span>о\u0301д-ат</span>`,
        plural: `<span>бро\u0301-j-а-т</span>`,
      },
    ],
  },
};

export default iClass;
