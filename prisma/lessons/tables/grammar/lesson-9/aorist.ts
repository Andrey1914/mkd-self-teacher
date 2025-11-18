import { TablesProps } from "@/types";

export const aorist: TablesProps = {
  type: "aorist",
  slug: "lesson-9",
  title: {
    ru: "ГРАММАТИКА",
    mkd: "ГРАМАТИКА",
  },
  subtitle: ["АОРИСТ"],
  text: `Аорист от глаголов совершенного вида (отвечают на вопрос [что сделать?]) используется для повествования о прошлом, свидетелем 
  которого говорящий был.
  
  Аорист от глаголов а-класса образуется без чередований.`,
  content: {
    words: [
      {
        singularPerson: "<span>јас</span>",
        singularForm: "<span>про*чита-в</span>",
        pluralPerson: "<span>ни*е</span>",
        pluralForm: "<span>прочи*та-вме</span>",
      },
      {
        singularPerson: "<span>ти</span>",
        singularForm: "<span>про*чита</span>",
        pluralPerson: "<span>ви*е</span>",
        pluralForm: "<span>прочи*та-вте</span>",
      },
      {
        singularPerson: "<span>тој, та*а, то*а</span>",
        singularForm: "<span>про*чита</span>",
        pluralPerson: "<span>ти*е</span>",
        pluralForm: "<span>прочи*та-а</span>",
      },
    ],
  },
};
