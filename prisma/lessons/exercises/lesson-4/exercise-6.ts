import { ExercisesProps } from "@/types";

export const exercise6: ExercisesProps = {
  type: "exercises",
  title: "Упражнение 6",
  slug: "lesson-4",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [
        `Вставьте предлоги <span>без</span>, <span>до</span>, <span>низ</span>, <span>од</span>, <span>о\u0301колу</span>, 
        <span>по\u0301краj</span>, <span>пре\u0301ку</span>, <span>со</span>.`,
      ],
      content: {
        sentences: [
          {
            mkd: `1. Ше\u0301таме ___ Би\u0301тола. 2.  ___ Ско\u0301пjе ___ О\u0301хрид и\u0301ма 170 км. 3. Тре\u0301ба да
            преми\u0301нуваш ___ пат са\u0301мо на зе\u0301лено све\u0301тло. 4. Зе\u0301мjата се вр\u0301ти ___ Со\u0301нцето.
            5. О\u0301диш на ра\u0301бота ___ ме\u0301тро. 6. Са\u0301кам да ше\u0301таме ___ Ва\u0301рдар. 7. Не почну\u0301ваме
            ра\u0301бота ___ вас.
            `,
            answer: [
              `низ`,
              `Од`,
              `до`,
              `преку`,
              `околу`,
              `со`,
              `покраj`,
              `без`,
            ],
          },
        ],
      },
    },
  ],
};
