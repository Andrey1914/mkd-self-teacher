import { TablesProps } from "@/types";

export const example13: TablesProps = {
  slug: "lesson-5",
  type: "example-13",
  subtitle: "СОЮЗЫ <span>ДЕ\u0301КА</span> И <span>ДА\u0301ЛИ</span>",
  content: {
    text: `Союз <span>де\u0301ка</span> «что» употребляется в изъяснительных предложениях: <span>ми\u0301слам де\u0301ка...</span> «думаю, что...;
    <span>знам де\u0301ка...</span> «знаю, что...» Не путайте <span>де\u0301ка</span> с союзным словом/относительным местоимением <span>што</span>:`,
    words: [
      {
        mkd: `Знам што са\u0301каш.`,
        ru: `Я знаю, чего ты хочешь.`,
      },
      {
        mkd: `Изви\u0301нете што ве вознеми\u0301рувам.`,
        ru: `Извините, что я вас беспокою.`,
      },
    ],
  },
};
