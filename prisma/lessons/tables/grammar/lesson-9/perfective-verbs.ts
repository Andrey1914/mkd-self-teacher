import { TablesProps } from "@/types";

export const perfectiveVerbs: TablesProps = {
  type: `perfective-verbs`,
  slug: "lesson-9",
  text: `Глаголы совершенного вида с корнем <span>ви*ди</span> «увидеть» и <span>се*ди</span> «сидеть» являются исключением, их 
  следует запомнить.`,
  content: {
    subtitle: [" ", "ви*ди", "до*седи"],
    rows: [
      {
        person: "јас",
        forms: ["ви*до-в", "до*седо-в"],
      },
      {
        person: "ти",
        forms: ["ви*де", "до*седе"],
      },
      {
        person: "тој, та*а, то*а",
        forms: ["ви*де", "до*седе"],
      },
      {
        person: "ни*е",
        forms: ["ви*да-вме", "до*седо-вме"],
      },
      {
        person: "ви*е",
        forms: ["ви*до-вте", "до*седо-вте"],
      },
      {
        person: "ти*е",
        forms: ["ви*до-а", "до*седо-а"],
      },
    ],
  },
};
