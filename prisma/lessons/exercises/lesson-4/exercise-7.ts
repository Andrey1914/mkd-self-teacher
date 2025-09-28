import { ExercisesProps } from "@/types";

export const exercise7: ExercisesProps = {
  type: "exercises",
  title: "Упражнение 7",
  slug: "lesson-4",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [
        `Вставьте предлоги <span>за</span>, <span>зад</span>, <span>ме*ѓу</span>, <span>над</span>, <span>по</span>, <span>под</span>, 
        <span>пред</span>.`,
      ],
      content: {
        sentences: [
          {
            mkd: `1. То*а се подаро*ците ___ родни*ните.`,
            answer: [`за`],
          },
          {
            mkd: `2. Тре*ба да о*дите ___ о*ваа у*лица и ќе сти*гнете до хо*телот.`,
            answer: [`по`],
          },
          {
            mkd: `3. ___ згра*дата ле*таат пти*ци.`,
            answer: [`Над`],
          },
          {
            mkd: `4. Ме*трото се на*оѓа ___ зе*мjата.`,
            answer: [`под`],
          },
          {
            mkd: `5. Ни*што не гле*дам за*тоа што ___ ме*не се*ди е*ден мно*гу ви*сок чо*век.`,
            answer: [`пред`],
          },
          {
            mkd: `6. Де*тето се кри*е ___ др*вото.`,
            answer: [`зад`],
          },
          {
            mkd: `7. Хо*телот се на*оѓа ___ цр*квата и мо*стот.`,
            answer: [`меѓу`],
          },
        ],
      },
    },
  ],
};
