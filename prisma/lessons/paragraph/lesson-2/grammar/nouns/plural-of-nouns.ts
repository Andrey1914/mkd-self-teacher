import { ParagraphSectionsProps } from "@/types";

const pluralOfNouns: ParagraphSectionsProps = {
  type: "plural-of-noun",
  subtitle: ["МНОЖЕСТВЕННОЕ ЧИСЛО ИМЁН СУЩЕСТВИТЕЛЬНЫХ"],
  content: {
    subtitle: ["ПРОСТОЕ МНОЖЕСТВЕННОЕ ЧИСЛО"],
    text: `Некоторые существительные имеют или только форму единственного числа, или только множественного: <span>И\u0301нтернет</span>,
    <span>во\u0301лjа</span>, <span>панта\u0301лони</span>.

    У остальных выбор оканчания во множественном числе зависит от рода существительного и его основы.
    `,
  },
};

export default pluralOfNouns;
