import { ExercisesProps } from "@/types";

export const exercise4: ExercisesProps = {
  type: "exercises",
  title: "Упражнение 4",
  slug: "lesson-3",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [`Вставте подходящие полные формы дательного падежа.`],
      content: {
        sentences: [
          {
            mkd: `1. Зо*што ___ ми ку*пуваш ка*фе?`,
            answer: [`мене`],
          },
          {
            mkd: `2. Му пишу*вате пи*смо ___ ?!`,
            answer: [`нему`],
          },
          {
            mkd: `3. ___ не ни се jа*вува.`,
            answer: [`Нам`],
          },
          {
            mkd: `4. ___ си брагода*риме.`,
            answer: [`Себе`],
          },
          {
            mkd: `5. ___ не им раска*жуваш за Са*ња Ива*новска?`,
            answer: [`Ним`],
          },
          {
            mkd: `6. Зо*што не ти чи*таат пи*смо ___ ?`,
            answer: [`тебе`],
          },
          {
            mkd: `7. Са*кам да ѝ се jа*вам ___ .`,
            answer: [`неjзе`],
          },
          {
            mkd: `8. ___ ви се до*паѓа ту*ка?`,
            answer: [`Вам`],
          },
        ],
      },
    },
  ],
};
