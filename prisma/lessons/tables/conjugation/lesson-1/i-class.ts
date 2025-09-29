// import { GrammarTableProps } from "@/types/grammarTypes";
import { TablesProps } from "@/types";

export const iClass: TablesProps = {
  type: `i-class`,
  subtitle: [`СПРЯЖЕНИЕ ГЛАГОЛОВ И-КЛАССА`],
  text: `<span>о*ди</span> идти, <span>се*ди</span> сидеть, <span>бро*и</span> считать, <span>сто*и</span> стоять.`,
  content: {
    words: [
      {
        person: `<span>jас</span>`,
        singular: `<span>о*д-а-м</span>`,
        plural: `<span>бро*-j-ам</span>`,
      },
      {
        person: `<span>ти</span>`,
        singular: `<span>о*д-и-ш</span>`,
        plural: `<span>бро*-и-ш</span>`,
      },
      {
        person: `<span>тоj, таа, тоа</span>`,
        singular: `<span>о*д-и</span>`,
        plural: `<span>бро*-и</span>`,
      },
      {
        person: `<span>ние</span>`,
        singular: `<span>о*д-и-ме</span>`,
        plural: `<span>бро*-и-ме</span>`,
      },
      {
        person: `<span>вие</span>`,
        singular: `<span>о*д-и-те</span>`,
        plural: `<span>бро*-и-те</span>`,
      },
      {
        person: `<span>тие</span>`,
        singular: `<span>о*д-ат</span>`,
        plural: `<span>бро*-j-а-т</span>`,
      },
    ],
  },
};
