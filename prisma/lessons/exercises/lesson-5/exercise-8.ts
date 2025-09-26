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
        <span>о\u0301свен</span>.`,
      ],
      content: {
        sentences: [
          {
            mkd: `1. Ко\u0301га до\u0301аѓам во Со\u0301лун не престо\u0301jувам во хо\u0301тел, ту\u0301ку ___ мо\u0301ите приjа\u0301тели.`,
            answer: [`каj`],
          },
          {
            mkd: `2. ___ сре\u0301да ќе о\u0301диме ___ о\u0301воj ре\u0301сторан.`,
            answer: [`В`, `во`],
          },
          {
            mkd: `3. Си\u0301те при\u0301бори за jа\u0301дење се ___ сре\u0301бро.`,
            answer: [`од`],
          },
          {
            mkd: `4. Са\u0301мо Да\u0301вор не\u0301ма да до\u0301jде на сва\u0301дбата. Си\u0301те ќе до\u0301jдат ___ не\u0301го.`,
            answer: [`освен`],
          },
          {
            mkd: `5. Зо\u0301што це\u0301ло вре\u0301ме ме др\u0301жиш ___ ра\u0301ка? Не сум де\u0301те.`,
            answer: [`за`],
          },
          {
            mkd: `6. Пи\u0301jам ка\u0301фе ___ ше\u0301кер.`,
            answer: [`без`],
          },
        ],
      },
    },
  ],
};
