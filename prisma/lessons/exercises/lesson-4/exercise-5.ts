import { ExercisesProps } from "@/types";

export const exercise5: ExercisesProps = {
  type: "exercises",
  title: "Упражнение 5",
  slug: "lesson-4",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [
        `Вставьте предлоги <span>во</span>, <span>врз</span>, <span>за\u0301ради</span>, <span>каj</span>, <span>на</span>,
        <span>по\u0301ради</span>.`,
      ],
      content: {
        sentences: [
          {
            mkd: `1. Заста\u0301нувам ___ пр\u0301виот кат.`,
            answer: [`на`],
          },
          {
            mkd: `2. Ми\u0301слам де\u0301ка А\u0301на до\u0301бро вли\u0301jае ___ те\u0301бе.`,
            answer: [`врз`],
          },
          {
            mkd: `3. О\u0301дам на го\u0301сти ___ приjа\u0301телите.`,
            answer: [`каj`],
          },
          {
            mkd: `4. И\u0301маат о\u0301дмор ___ се\u0301птември.`,
            answer: [`во`],
          },
          {
            mkd: `5.  ___ висо\u0301ките температу\u0301ри тре\u0301ба да пи\u0301ете мно\u0301гу во\u0301да.`,
            answer: [`Поради`],
          },
          {
            mkd: `6. Jо\u0301ванка мно\u0301гу чи\u0301та ___ до\u0301бри о\u0301ценки.`,
            answer: [`заради`],
          },
        ],
      },
    },
  ],
};
