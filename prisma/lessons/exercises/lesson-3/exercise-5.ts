import { ExercisesProps } from "@/types";

export const exercise5: ExercisesProps = {
  type: "exercises",
  title: "Упражнение 5",
  slug: "lesson-3",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [`Вставте подходящие полные формы винительного падежа.`],
      content: {
        sentences: [
          {
            mkd: `1. Со\u0301ња ___ те пра\u0301шува?`,
            answer: [`тебе`],
          },
          {
            mkd: `2. Не не\u0301 зна\u0301ат ___ ?`,
            answer: [`нас`],
          },
          {
            mkd: `3. ___ не ве ра\u0301зберам.`,
            answer: [`Вас`],
          },
          {
            mkd: `4. Зо\u0301што ___ ме прашу\u0301вате за то\u0301а?`,
            answer: [`мене`],
          },
          {
            mkd: `5. Са\u0301мо ___ се са\u0301каш!`,
            answer: [`себе`],
          },
          {
            mkd: `6. Не jа са\u0301каме ___ .`,
            answer: [`неа`],
          },
          {
            mkd: `7. Зо\u0301што ___ го че\u0301кате?`,
            answer: [`него`],
          },
          {
            mkd: `8. Зо\u0301што не го ко\u0301ристиш ___ ?`,
            answer: [`нив`],
          },
        ],
      },
    },
  ],
};
