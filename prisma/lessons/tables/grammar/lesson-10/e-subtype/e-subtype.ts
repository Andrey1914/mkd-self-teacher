import { TablesProps } from "@/types";

export const eSubtype: TablesProps = {
  type: `e-subtype`,
  slug: "lesson-10",
  subtitle: `3. E-подтип`,
  text: `У глаголов типа <span>у*мре</span> «умереть», имеющих видовую пару типа <span>у*мира</span> «умирать», чередований нет.`,
  content: {
    words: [
      {
        singularPerson: "<span>јас</span>",
        singularForm: "<span>у*мре-в</span>",
        pluralPerson: "<span>ние</span>",
        pluralForm: "<span>у*мре-вме</span>",
      },
      {
        singularPerson: "<span>ти</span>",
        singularForm: "<span>у*мре</span>",
        pluralPerson: "<span>вие</span>",
        pluralForm: "<span>у*мре-вте</span>",
      },
      {
        singularPerson: "<span>тој, таа, тоа</span>",
        singularForm: "<span>у*мре</span>",
        pluralPerson: "<span>тие</span>",
        pluralForm: "<span>у*мре-а</span>",
      },
    ],
  },
};
