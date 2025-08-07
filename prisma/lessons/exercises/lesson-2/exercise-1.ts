import { FillInExerciseData } from "@/types/exerciseTypes";

const exercise1: FillInExerciseData = {
  type: "exercises",
  title: "Упражнение 1",
  slug: "lesson-2",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [
        `Замените существительные мужского рода местоимением <span>тоj</span>, женского — <span>та́а</span>, — среднего <span>то\u0301а</span>.`,
      ],
      content: {
        sentences: [
          {
            mkd: `<span>аеродро\u0301м ___ , Благоja ___ , вре\u0301ме ___ , дедо ___ , жена ___ , излез ___ , кафе ___ , киви ___ , 
            колега ___ , колешка ___ , контрола ___ , куфер ___ , место ___ , одмор ___ , октомври ___ , патување ___ , проблем ___ ,
            слабост ___ , такси ___ , туризам ___ , цел ___ </span>`,
            answer: [
              `тоj`,
              `тоj`,
              `тоа`,
              `тоj`,
              `таа`,
              `тоj`,
              `тоа`,
              `тоа`,
              `тоj`,
              `таа`,
              `таа`,
              `тоj`,
              `тоа`,
              `тоj`,
              `тоj`,
              `тоа`,
              `тоj`,
              `таа`,
              `тоа`,
              `тоj`,
              `таа`,
            ],
          },
        ],
      },
    },
  ],
};

export default exercise1;
