import { StaticExerciseData } from "@/types/exerciseTypes";

const exercise1: StaticExerciseData = {
  title: "Упражнение 1",
  slug: "lesson-1",
  sections: [
    {
      type: "static-exercise",
      prompt: [
        `Прочитайте следующие слова и словосочетания, обращая внимание на правила чтения.`,
      ],
      content: {
        exercise: `<span>ла\u0301га, ли\u0301це, љю\u0301бов, г\u0301а\u0301ур, лу\u0301ге, гон, ми\u0301нистер, ср\u0301це, че\u0301ло, же\u0301на, маж, Џон, 
        шо\u0301фер, sид, jа\u0301дање, ку\u0301ка, ку\u0301к\u0301а, к\u0301е\u0301бе, ко\u0301фте, о\u0301ревче, Е\u0301лена, Jе\u0301лена, Ма\u0301риjа, интервjу\u0301, про\u0301давач,
        прода\u0301вачи, џез, кон, коњ, е\u0301втин, телефо\u0301н</span>`,
      },
    },
  ],
};

export default exercise1;
