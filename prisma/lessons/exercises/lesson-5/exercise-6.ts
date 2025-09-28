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
            mkd: `бро*и ___ ,`,
            answer: [`броење`],
          },
          {
            mkd: `ви*ка ___ ,`,
            answer: [`викање`],
          },
          {
            mkd: `жи*вее ___ ,`,
            answer: [`живеење`],
          },
          {
            mkd: `запо*знава ___ ,`,
            answer: [`запознавање`],
          },
          {
            mkd: `зна*е ___ ,`,
            answer: [`знаење`],
          },
          {
            mkd: `зна*чи ___ ,`,
            answer: [`значење`],
          },
          {
            mkd: `ми*сли ___ ,`,
            answer: [`мислење`],
          },
          {
            mkd: `о*ди ___ ,`,
            answer: [`одење`],
          },
          {
            mkd: `па*тува ___ ,`,
            answer: [`патување`],
          },
        ],
      },
    },
  ],
};
