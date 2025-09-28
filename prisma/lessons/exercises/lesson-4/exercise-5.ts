import { ExercisesProps } from "@/types";

export const exercise5: ExercisesProps = {
  type: "exercises",
  title: "Упражнение 5",
  slug: "lesson-4",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [
        `Вставьте предлоги <span>во</span>, <span>врз</span>, <span>за*ради</span>, <span>каj</span>, <span>на</span>,
        <span>по*ради</span>.`,
      ],
      content: {
        sentences: [
          {
            mkd: `1. Заста*нувам ___ пр*виот кат.`,
            answer: [`на`],
          },
          {
            mkd: `2. Ми*слам де*ка А*на до*бро вли*jае ___ те*бе.`,
            answer: [`врз`],
          },
          {
            mkd: `3. О*дам на го*сти ___ приjа*телите.`,
            answer: [`каj`],
          },
          {
            mkd: `4. И*маат о*дмор ___ се*птември.`,
            answer: [`во`],
          },
          {
            mkd: `5.  ___ висо*ките температу*ри тре*ба да пи*ете мно*гу во*да.`,
            answer: [`Поради`],
          },
          {
            mkd: `6. Jо*ванка мно*гу чи*та ___ до*бри о*ценки.`,
            answer: [`заради`],
          },
        ],
      },
    },
  ],
};
