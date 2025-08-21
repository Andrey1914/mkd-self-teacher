// import { ExampleSection } from "@/types";
import { TablesProps } from "@/types";

// export const example3: ExampleSection = {
export const example3: TablesProps = {
  slug: "lesson-3",
  type: "example-3",
  content: {
    text: `Краткие и полные формы возвратных и личных местоимений используются при логическом выделении, полное местоимение может менять
    свое место:`,
    words: [
      {
        mkd: `<span>И\u0301ван не\u0301му (на\u0301 него) му пи\u0301шува пи\u0301смо.</span>`,
        ru: `Иван пишет письмо (именно) ему.`,
      },
      {
        mkd: `<span>И\u0301ван му пи\u0301шува пи\u0301смо не\u0301му (на\u0301 него).</span>`,
        ru: `Иван пишет письмо (именно) ему.`,
      },
      {
        mkd: `<span>И\u0301ван не\u0301го го зна\u0301е.</span>`,
        ru: `Иван знает (именно) его.`,
      },
      {
        mkd: `<span>И\u0301ван го зна\u0301е не\u0301го.</span>`,
        ru: `Иван знает (именно) его.`,
      },
    ],
  },
};
