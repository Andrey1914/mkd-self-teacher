import { GrammarTableProps } from "@/types/grammarTypes";

export const grammarPronouns2: GrammarTableProps = {
  type: `grammar-pronouns-2`,
  content: {
    subtitle: [`Лицо`, `Единственное число`, `Множественное число`],
    words: [
      {
        person: `1-e`,
        singular: `<span>сум</span>`,
        plural: `<span>сме</span>`,
      },
      {
        person: `2-e`,
        singular: `<span>си</span>`,
        plural: `<span>сте</span>`,
      },
      {
        person: `3-e`,
        singular: `<span>е</span>`,
        plural: `<span>се</span>`,
      },
    ],
  },
};
