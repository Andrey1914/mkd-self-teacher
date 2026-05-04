import { TablesProps } from "@/types";
import { EMPTY_CELL, MERGE_V, MERGE_H } from "@/constants";

export const retellingForms: TablesProps = {
  type: "retelling-forms",
  slug: "lesson-17",

  content: {
    subtitle: [
      "Модально-темпоральные формы",
      "Непересказывательные",
      "Пересказывательные",
    ],

    rows: [
      {
        tenses: "Настоящее время",
        indicative: ["пра́вам", "пра́виме"],
        renarrative: ["сум пра́вел", "сме пра́веле"],
      },
      {
        tenses: MERGE_V,
        indicative: ["пра́виш", "пра́вите"],
        renarrative: [MERGE_V, MERGE_V],
      },
      {
        tenses: MERGE_V,
        indicative: ["пра́ви", "пра́ват"],
        renarrative: ["си пра́вел", "сте пра́веле"],
      },
      {
        tenses: "Имперфект",
        indicative: ["пра́вев", "пра́вевме"],
        renarrative: [MERGE_V, MERGE_V],
      },
      {
        tenses: MERGE_V,
        indicative: ["пра́веше", "пра́вевте"],
        renarrative: ["пра́вел", "пра́веле"],
      },
      {
        tenses: MERGE_V,
        indicative: ["пра́веше", "пра́веа"],
        renarrative: [MERGE_V, MERGE_V],
      },
      {
        tenses: "Аорист",
        indicative: ["на́правив", "напра́вивме"],
        renarrative: ["сум на́правил", "сме напра́виле"],
      },
      {
        tenses: MERGE_V,
        indicative: ["на́прави", "напра́вивте"],
        renarrative: ["си на́правил", "сте напра́виле"],
      },
      {
        tenses: MERGE_V,
        indicative: ["на́прави", "напра́вија"],
        renarrative: ["на́правил", "напра́виле"],
      },
      {
        tenses: "Будущее время",
        indicative: ["ќе пра́вам", "ќе на*правам"],
        renarrative: ["ќе сум пра́вел", "ќе сум на*правел"],
      },
      {
        tenses: MERGE_V,
        indicative: ["ќе пра́виш", "ќе на*правиш"],
        renarrative: ["ќе си пра*вел", "ќе си на*правел"],
      },
      {
        tenses: MERGE_V,
        indicative: ["ќе пра́ви", "ќе на*прават и т.д."],
        renarrative: ["ќе пра́вел", "ќе на*правел и т.д."],
      },
      {
        tenses: "Будущее в прошедшем",
        indicative: ["ќе пра́вев", "ќе на*правев"],
        renarrative: [MERGE_V, MERGE_V],
      },
      {
        tenses: MERGE_V,
        indicative: ["ќе пра́веше", "ќе на*правеше и т.д."],
        renarrative: [EMPTY_CELL, EMPTY_CELL],
      },
      {
        tenses:
          "Неопределённые времена (результатив типа <span>и*ма</span> + причастие <span>-но/то</span>)",
        indicative: ["и*мам пра́вено (напра*вено) и т.д.", MERGE_H],
        renarrative: ["сум и*мал пра*вено (напра*вено) и т.д.", MERGE_H],
      },
      {
        tenses: MERGE_V,
        indicative: ["и*мав пра́вено (напра*вено) и т.д.", MERGE_H],
        renarrative: ["ќе сум и*мал пра*вено (напра*вено) и т.д.", MERGE_H],
      },
      {
        tenses: MERGE_V,
        indicative: ["ќе и*мам пра́вено (напра*вено) и т.д.", MERGE_H],
        renarrative: [EMPTY_CELL, MERGE_H],
      },
      {
        tenses: "<span>да</span>-конструкции",
        indicative: ["да пра́вам", "да на*правам"],
        renarrative: ["да сум пра*вел", "да сум на*правел"],
      },
      {
        tenses: MERGE_V,
        indicative: ["да пра́вев", "да на*правев"],
        renarrative: [EMPTY_CELL, MERGE_H],
      },
      {
        tenses: MERGE_V,
        indicative: [`да и*мам пра*вено (напра*вено) и т.д.`, MERGE_H],
        renarrative: [`да сум и*мал пра*вено (напра*вено) и т.д.`, MERGE_H],
      },
    ],
  },
};
