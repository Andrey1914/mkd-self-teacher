import { ExercisesProps } from "@/types";

export const exercise6: ExercisesProps = {
  type: "exercises",
  title: "Упражнение 6",
  slug: "lesson-4",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [
        `Вставьте предлоги <span>без</span>, <span>до</span>, <span>низ</span>, <span>од</span>, <span>о*колу</span>, 
        <span>по*краj</span>, <span>пре*ку</span>, <span>со</span>.`,
      ],
      content: {
        sentences: [
          {
            mkd: `1. Ше*таме ___ Би*тола.`,
            answer: [`низ`],
          },
          {
            mkd: `2.  ___ Ско*пjе ___ О*хрид и*ма 170 км.`,
            answer: [`Од`, `до`],
          },
          {
            mkd: `3. Тре*ба да преми*нуваш ___ пат са*мо на зе*лено све*тло.`,
            answer: [`преку`],
          },
          {
            mkd: `4. Зе*мjата се вр*ти ___ Со*нцето.`,
            answer: [`околу`],
          },
          {
            mkd: `5. О*диш на ра*бота ___ ме*тро.`,
            answer: [`со`],
          },
          {
            mkd: `6. Са*кам да ше*таме ___ Ва*рдар.`,
            answer: [`покраj`],
          },
          {
            mkd: `7. Не почну*ваме ра*бота ___ вас.`,
            answer: [`без`],
          },
        ],
      },
    },
  ],
};
