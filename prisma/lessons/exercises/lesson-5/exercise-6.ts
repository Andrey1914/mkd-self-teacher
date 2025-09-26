import { ExercisesProps } from "@/types";

export const exercise6: ExercisesProps = {
  type: "exercises",
  title: "Упражнение 6",
  slug: "lesson-5",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [`Образуйте глагольные существительные от данных глаголов.`],
      content: {
        sentences: [
          {
            mkd: `бро\u0301и ___ ,`,
            answer: [`броење`],
          },
          {
            mkd: `ви\u0301ка ___ ,`,
            answer: [`викање`],
          },
          {
            mkd: `жи\u0301вее ___ ,`,
            answer: [`живеење`],
          },
          {
            mkd: `запо\u0301знава ___ ,`,
            answer: [`запознавање`],
          },
          {
            mkd: `зна\u0301е ___ ,`,
            answer: [`знаење`],
          },
          {
            mkd: `зна\u0301чи ___ ,`,
            answer: [`значење`],
          },
          {
            mkd: `ми\u0301сли ___ ,`,
            answer: [`мислење`],
          },
          {
            mkd: `о\u0301ди ___ ,`,
            answer: [`одење`],
          },
          {
            mkd: `па\u0301тува ___ ,`,
            answer: [`патување`],
          },
        ],
      },
    },
  ],
};
