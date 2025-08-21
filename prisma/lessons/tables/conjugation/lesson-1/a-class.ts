// import { ConjugationTableSection } from "@/types/conjugationTypes";
import { TablesProps } from "@/types";

// export const aClass: ConjugationTableSection = {
export const aClass: TablesProps = {
  type: "a-class",
  subtitle: ["СПРЯЖЕНИЕ ГЛАГОЛОВ A-КЛАССА"],
  text: "<span>cе в\u0301ика</span> называться",
  content: {
    words: [
      {
        singularPerson: "<span>јас</span>",
        singularForm: "<span>се ви́к-а-м</span>",
        pluralPerson: "<span>ние</span>",
        pluralForm: "<span>се ви́к-а-ме</span>",
      },
      {
        singularPerson: "<span>ти</span>",
        singularForm: "<span>се ви́к-а-ш</span>",
        pluralPerson: "<span>вие</span>",
        pluralForm: "<span>се ви́к-а-те</span>",
      },
      {
        singularPerson: "<span>тој, таа, тоа</span>",
        singularForm: "<span>се ви́к-а</span>",
        pluralPerson: "<span>тие</span>",
        pluralForm: "<span>се ви́к-а-ат</span>",
      },
    ],
  },
};
