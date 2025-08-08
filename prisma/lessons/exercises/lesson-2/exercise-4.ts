import { FillInExerciseData } from "@/types/exerciseTypes";

const exercise4: FillInExerciseData = {
  type: "exercises",
  title: "Упражнение 4",
  slug: "lesson-2",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [
        `Образуйте форму множественного числа от следующих словосочетаний среднего рода.`,
      ],
      content: {
        sentences: [
          {
            mkd: `<span>умо\u0301рено де\u0301те ___, е\u0301вро ___, в\u0301аше и\u0301ме ___, до\u0301бро ме\u0301сто ___, 
            за\u0301морне пату\u0301вање ___, мо\u0301е пре\u0301зиме ___, ка\u0301кво пре\u0301зимjе ___, не\u0301jзино та\u0301кси ___.`,
            answer: [
              `уморени деца`,
              `евра`,
              `ваши имења`,
              `добри места`,
              `заморни патувања`,
              `мои презимења`,
              `какви приземjа`,
              `неjзини таксиjа`,
            ],
          },
        ],
      },
    },
  ],
};

export default exercise4;
