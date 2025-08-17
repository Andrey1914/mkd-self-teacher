import { GrammarTableProps } from "@/types/grammarTypes";

const grammarPronouns2: GrammarTableProps = {
  type: `grammar-pronouns-2`,
  content: {
    subtitle: [`Лицо`, `Единственное число`, `Множественное число`],
    words: [
      {
        persone: `1-e`,
        singular: `<span>сум</span>`,
        plural: `<span>сме</span>`,
      },
      {
        persone: `2-e`,
        singular: `<span>си</span>`,
        plural: `<span>сте</span>`,
      },
      {
        persone: `3-e`,
        singular: `<span>е</span>`,
        plural: `<span>се</span>`,
      },
    ],
  },
};

export default grammarPronouns2;
