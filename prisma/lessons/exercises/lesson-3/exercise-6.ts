import { ExercisesProps } from "@/types";

export const exercise6: ExercisesProps = {
  type: "exercises",
  title: "Упражнение 6",
  slug: "lesson-3",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [`Раскройте скобки.`],
      content: {
        sentences: [
          {
            mkd: `1. Jо*ван не збо*рува за (се*бе) ___ .`,
            answer: [`себе`],
          },
          {
            mkd: `2. Зо*што не збору*вате со (jас) ___ ?`,
            answer: [`мене`],
          },
          {
            mkd: `3. Не о*диме без (ти*е) ___ .`,
            answer: [`нив`],
          },
          {
            mkd: `4. То*а е пи*смо од (та*а) ___ .`,
            answer: [`неа`],
          },
          {
            mkd: `5. За (ко*j) ___ ку*пуваш по*дарок?`,
            answer: [`кого`],
          },
          {
            mkd: `6. Да*ли та*тко ѝ на Ле*jла ра*боти со (ти) ___ ?`,
            answer: [`тебе`],
          },
          {
            mkd: `7. Не почну*ваат без (ни*е) ___ .`,
            answer: [`нас`],
          },
          {
            mkd: `8. То*j е по*дарок од (то*j) ___ за (ти) ___ ?`,
            answer: [`него`, `тебе`],
          },
          {
            mkd: `8. Жи*веам над (ви*е) ___ .`,
            answer: [`вас`],
          },
        ],
      },
    },
  ],
};
