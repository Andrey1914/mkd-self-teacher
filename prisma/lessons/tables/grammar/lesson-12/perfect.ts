import { TablesProps } from "@/types";

export const perfect: TablesProps = {
  type: "perfect",
  text: "Перфект образуется при помощи глагола «быть» в форме настоящего времени (для форм 1-го лича ед.ч. и мн.ч.) и л-формы:",
  content: {
    words: [
      {
        singularPerson: "<span>јас</span>",
        singularForm: "<span>сум би*л/а</span>",
        pluralPerson: "<span>ние</span>",
        pluralForm: "<span>сме би*ле</span>",
      },
      {
        singularPerson: "<span>ти</span>",
        singularForm: "<span>си би*л/а</span>",
        pluralPerson: "<span>вие</span>",
        pluralForm: "<span>сте би*ле</span>",
      },
      {
        singularPerson: "<span>тој, таа, тоа</span>",
        singularForm: "<span>би*л/а/о</span>",
        pluralPerson: "<span>тие</span>",
        pluralForm: "<span>би*ле</span>",
      },
    ],
  },
};
