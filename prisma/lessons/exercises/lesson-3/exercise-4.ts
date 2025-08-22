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
            mkd: `1. Зо\u0301што ___ ми ку\u0301пуваш ка\u0301фе?`,
            answer: [`мене`],
          },
          {
            mkd: `2. Му пишу\u0301вате пи\u0301смо ___ ?!`,
            answer: [`нему`],
          },
          {
            mkd: `3. ___ не ни се jа\u0301вува.`,
            answer: [`Нам`],
          },
          {
            mkd: `4. ___ си брагода\u0301риме.`,
            answer: [`Себе`],
          },
          {
            mkd: `5. ___ не им раска\u0301жуваш за Са\u0301ња Ива\u0301новска?`,
            answer: [`Ним`],
          },
          {
            mkd: `6. Зо\u0301што не ти чи\u0301таат пи\u0301смо ___ ?`,
            answer: [`тебе`],
          },
          {
            mkd: `7. Са\u0301кам да ѝ се jа\u0301вам ___ .`,
            answer: [`неjзе`],
          },
          {
            mkd: `8. ___ ви се до\u0301паѓа ту\u0301ка?`,
            answer: [`Вам`],
          },
        ],
      },
    },
  ],
};
