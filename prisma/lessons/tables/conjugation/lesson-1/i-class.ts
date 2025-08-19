import { GrammarTableProps } from "@/types/grammarTypes";

const iClass: GrammarTableProps = {
  type: `i-class`,
  subtitle: [`СПРЯЖЕНИЕ ГЛАГОЛОВ И-КЛАССА`],
  text: `<span>о\u0301ди</span> идти, <span>се\u0301ди</span> сидеть, <span>бро\u0301и</span> считать, <span>сто\u0301и</span> стоять.`,

  content: {
    words: [
      {
        person: `<span>jас</span>`,
        singular: `<span>о\u0301д-а-м</span>`,
        plural: `<span>бро\u0301-j-ам</span>`,
      },
      {
        person: `<span>ти</span>`,
        singular: `<span>о\u0301д-и-ш</span>`,
        plural: `<span>бро\u0301-и-ш</span>`,
      },
      {
        person: `<span>тоj, таа, тоа</span>`,
        singular: `<span>о\u0301д-и</span>`,
        plural: `<span>бро\u0301-и</span>`,
      },
      {
        person: `<span>ние</span>`,
        singular: `<span>о\u0301д-и-ме</span>`,
        plural: `<span>бро\u0301-и-ме</span>`,
      },
      {
        person: `<span>вие</span>`,
        singular: `<span>о\u0301д-и-те</span>`,
        plural: `<span>бро\u0301-и-те</span>`,
      },
      {
        person: `<span>тие</span>`,
        singular: `<span>о\u0301д-ат</span>`,
        plural: `<span>бро\u0301-j-а-т</span>`,
      },
    ],
  },
};

export default iClass;
