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
            mkd: `1. Со*ња ___ те пра*шува?`,
            answer: [`тебе`],
          },
          {
            mkd: `2. Не не* зна*ат ___ ?`,
            answer: [`нас`],
          },
          {
            mkd: `3. ___ не ве ра*зберам.`,
            answer: [`Вас`],
          },
          {
            mkd: `4. Зо*што ___ ме прашу*вате за то*а?`,
            answer: [`мене`],
          },
          {
            mkd: `5. Са*мо ___ се са*каш!`,
            answer: [`себе`],
          },
          {
            mkd: `6. Не jа са*каме ___ .`,
            answer: [`неа`],
          },
          {
            mkd: `7. Зо*што ___ го че*кате?`,
            answer: [`него`],
          },
          {
            mkd: `8. Зо*што не го ко*ристиш ___ ?`,
            answer: [`нив`],
          },
        ],
      },
    },
  ],
};
