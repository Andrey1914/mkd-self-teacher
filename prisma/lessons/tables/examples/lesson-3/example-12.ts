import { ExampleSection } from "@/types";

export const example12: ExampleSection = {
  slug: "lesson-3",
  type: "example-12",
  subtitle: "ГЛАГОЛ <span>МО\u0301ЖЕ</span>",
  content: {
    text: `Глагол <span>мо\u0301же</span> употребляется в личной форме для обозначения физической возможности что-либо сделать и в форме
    3-го лица ед.ч. для выражения разрешения:
    `,
    words: [
      {
        mkd: `<span>Мо\u0301жам да до\u0301jдам у\u0301тре.</span>`,
        ru: `Я могу прийти завтра.`,
      },
      {
        mkd: `<span>Мо\u0301жели да вле\u0301зам.</span>`,
        ru: `Могу ли я войти.`,
      },
    ],
  },
};
