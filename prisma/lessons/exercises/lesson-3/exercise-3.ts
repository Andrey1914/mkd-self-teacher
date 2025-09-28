import { ExercisesProps } from "@/types";

export const exercise3: ExercisesProps = {
  type: "exercises",
  title: "Упражнение 3",
  slug: "lesson-3",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [
        `Образуйте краткие формы винительного падежа от указанных местоимений.`,
      ],
      content: {
        sentences: [
          {
            mkd: `1. ___ (то*j) ко*ристам ко*га па*тувам.`,
            answer: [`Го`],
          },
          {
            mkd: `2. ___ (ти*е) прашу*ваме за И*стамбул.`,
            answer: [`Ги`],
          },
          {
            mkd: `3. Да*ли ___ (jас) разби*рате.`,
            answer: [`ме`],
          },
          {
            mkd: `4. Љу*бица мно*гу ___ (се*бе) са*ка.`,
            answer: [`се`],
          },
          {
            mkd: `5. Зо*што не ___ (ни*е) че*каш?`,
            answer: [`не`],
          },
          {
            mkd: `6. Че*сто ___ (та*а) ку*пуваш?`,
            answer: [`jа`],
          },
          {
            mkd: `7. Са*кам да ___ (ти) пра*шам.`,
            answer: [`те`],
          },
          {
            mkd: `8. Мно*гу са*каат да ___ (вие) запо*знаат?`,
            answer: [`ве`],
          },
        ],
      },
    },
  ],
};
