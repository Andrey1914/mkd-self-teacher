import { ExercisesProps } from "@/types";

export const exercise8: ExercisesProps = {
  type: "exercises",
  title: "Упражнение 8",
  slug: "lesson-5",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [
        `Вставьте предлоги <span>без</span>, <span>в</span>, <span>во</span>, <span>за</span>, <span>каj</span>, <span>од</span>,
        <span>о*свен</span>.`,
      ],
      content: {
        sentences: [
          {
            mkd: `1. Ко*га до*аѓам во Со*лун не престо*jувам во хо*тел, ту*ку ___ мо*ите приjа*тели.`,
            answer: [`каj`],
          },
          {
            mkd: `2. ___ сре*да ќе о*диме ___ о*воj ре*сторан.`,
            answer: [`В`, `во`],
          },
          {
            mkd: `3. Си*те при*бори за jа*дење се ___ сре*бро.`,
            answer: [`од`],
          },
          {
            mkd: `4. Са*мо Да*вор не*ма да до*jде на сва*дбата. Си*те ќе до*jдат ___ не*го.`,
            answer: [`освен`],
          },
          {
            mkd: `5. Зо*што це*ло вре*ме ме др*жиш ___ ра*ка? Не сум де*те.`,
            answer: [`за`],
          },
          {
            mkd: `6. Пи*jам ка*фе ___ ше*кер.`,
            answer: [`без`],
          },
        ],
      },
    },
  ],
};
