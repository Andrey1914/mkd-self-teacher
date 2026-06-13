import type { LectureConfig, LocalizedText } from "@/components/contents/types";

import { lesson1 } from "@/prisma/lessons/lesson-1";
import { lectureLesson1 } from "@/prisma/lessons/paragraph";
import { dialogueBlock as dialogue1 } from "@/prisma/lessons/dialogues/lesson-1";
import { vocabulary1, vocabulary2 } from "@/prisma/lessons/vocabulary/lesson-1";
import { countriesNationalitiesTable } from "@/prisma/lessons/tables";

import { lesson2 } from "@/prisma/lessons/lesson-2";
import { dialogueBlock as dialogue2 } from "@/prisma/lessons/dialogues/lesson-2";
import { vocabulary as vocabulary2Block } from "@/prisma/lessons/vocabulary/lesson-2";

import { lesson3 } from "@/prisma/lessons/lesson-3";
import { dialogueBlock as dialogue3 } from "@/prisma/lessons/dialogues/lesson-3";
import { vocabulary as vocabulary3Block } from "@/prisma/lessons/vocabulary/lesson-3";
import { glossary } from "@/prisma/lessons/tables";

import { lesson4 } from "@/prisma/lessons/lesson-4";
import { dialogueBlock as dialogue4 } from "@/prisma/lessons/dialogues/lesson-4";
import { vocabulary as vocabulary4Block } from "@/prisma/lessons/vocabulary/lesson-4";

import { lesson5 } from "@/prisma/lessons/lesson-5";
import { dialogueBlock as dialogue5 } from "@/prisma/lessons/dialogues/lesson-5";
import { vocabulary as vocabulary5Block } from "@/prisma/lessons/vocabulary/lesson-5";

import { lesson6 } from "@/prisma/lessons/lesson-6";
import { dialogueBlock as dialogue6 } from "@/prisma/lessons/dialogues/lesson-6";
import { vocabulary as vocabulary6Block } from "@/prisma/lessons/vocabulary/lesson-6";

import { lesson7 } from "@/prisma/lessons/lesson-7";
import { dialogueBlock as dialogue7 } from "@/prisma/lessons/dialogues/lesson-7";
import { vocabulary as vocabulary7Block } from "@/prisma/lessons/vocabulary/lesson-7";

import { lesson8 } from "@/prisma/lessons/lesson-8";
import { dialogueBlock as dialogue8 } from "@/prisma/lessons/dialogues/lesson-8";
import { vocabulary as vocabulary8Block } from "@/prisma/lessons/vocabulary/lesson-8";

import { lesson9 } from "@/prisma/lessons/lesson-9";
import { dialogueBlock as dialogue9 } from "@/prisma/lessons/dialogues/lesson-9";
import { vocabulary as vocabulary9Block } from "@/prisma/lessons/vocabulary/lesson-9";

import { lesson10 } from "@/prisma/lessons/lesson-10";
import { dialogueBlock as dialogue10 } from "@/prisma/lessons/dialogues/lesson-10";
import { vocabulary as vocabulary10Block } from "@/prisma/lessons/vocabulary/lesson-10";

export default function lectureConfigs(): Record<string, LectureConfig> {
  return {
    "1_part1": {
      lessonId: 1,
      lessonData: lesson1,
      mainAnchor: "lesson-1_airport",
      title: lesson1.sections?.[0]?.subtitle as LocalizedText,
      scroll: true,
      items: [
        {
          id: "introduction",
          anchor: "lesson-1_introduction",
          text: lectureLesson1.lectureIntro?.content?.intro
            ?.subtitle as LocalizedText,
        },
      ],
    },
    "1_part2": {
      lessonId: 1,
      mainAnchor: "dialogue-1",
      title: dialogue1.sections?.[0]?.title as LocalizedText,
      scroll: true,
      items: [
        {
          id: "dialogue",
          anchor: "dialogue-1",
          text: dialogue1.sections?.[0]?.subtitle as LocalizedText,
        },
        {
          id: "vocabulary",
          anchor: "vocabulary-1",
          text: vocabulary1.title as LocalizedText,
          layout: "column",
        },
        {
          id: "vocabulary",
          anchor: "vocabulary-2",
          text: vocabulary2.title as LocalizedText,
          layout: "column",
        },
        {
          id: "countries",
          anchor: "countries-nationalities",
          text: countriesNationalitiesTable.subtitle as string,
        },
      ],
    },

    "2": {
      lessonId: 2,
      lessonData: lesson2,
      mainAnchor: "lesson-2_taxi-hotel",
      title: lesson2.sections?.[0]?.subtitle as LocalizedText,
      scroll: true,
      items: [
        {
          id: "dialogue",
          anchor: "dialogue-2",
          text: dialogue2.sections?.[0]?.subtitle as LocalizedText,
        },
        {
          id: "vocabulary",
          anchor: "vocabulary-2",
          text: vocabulary2Block.title as LocalizedText,
          layout: "column",
        },
      ],
    },

    "3": {
      lessonId: 3,
      lessonData: lesson3,
      mainAnchor: "lesson-3_acquaintance",
      title: lesson3.sections?.[0]?.subtitle as LocalizedText,
      scroll: true,
      items: [
        {
          id: "dialogue",
          anchor: "dialogue-3",
          text: dialogue3.sections?.[0]?.subtitle as LocalizedText,
        },
        {
          id: "vocabulary",
          anchor: "vocabulary-3",
          text: vocabulary3Block.title as LocalizedText,
          layout: "column",
        },
        {
          id: "occupation",
          anchor: "occupation",
          text: glossary.occupationTable.title as LocalizedText,
          layout: "row",
        },
      ],
    },

    "4": {
      lessonId: 4,
      lessonData: lesson4,
      mainAnchor: "lesson-4_exploring-the-city",
      title: lesson4.sections?.[0]?.subtitle as LocalizedText,
      scroll: true,
      items: [
        {
          id: "dialogue",
          anchor: "dialogue-4",
          text: dialogue4.sections?.[0]?.subtitle as LocalizedText,
        },
        {
          id: "vocabulary",
          anchor: "vocabulary-4",
          text: vocabulary4Block.title as LocalizedText,
          formatMkd: true,
          layout: "column",
        },
      ],
    },

    "5": {
      lessonId: 5,
      lessonData: lesson5,
      mainAnchor: "lesson-5_restaurant",
      title: lesson5.sections?.[0]?.subtitle as LocalizedText,
      scroll: true,
      items: [
        {
          id: "dialogue",
          anchor: "dialogue-5",
          text: dialogue5.sections?.[0]?.subtitle as LocalizedText,
        },
        {
          id: "vocabulary",
          anchor: "vocabulary-5",
          text: vocabulary5Block.title as LocalizedText,
          formatMkd: true,
          layout: "column",
        },
        {
          id: "food",
          anchor: "food",
          text: glossary.foodTable.title as LocalizedText,
          layout: "row",
        },
      ],
    },

    "6": {
      lessonId: 6,
      lessonData: lesson6,
      mainAnchor: "lesson-6_car-rental",
      title: lesson6.sections?.[0]?.subtitle as LocalizedText,
      scroll: true,
      items: [
        {
          id: "dialogue",
          anchor: "dialogue-6",
          text: dialogue6.sections?.[0]?.subtitle as LocalizedText,
        },
        {
          id: "vocabulary",
          anchor: "vocabulary-6",
          text: vocabulary6Block.title as LocalizedText,
          formatMkd: true,
          layout: "column",
        },
      ],
    },
    "7": {
      lessonId: 7,
      lessonData: lesson7,
      mainAnchor: "lesson-7_apartments",
      title: lesson7.sections?.[0]?.subtitle as LocalizedText,
      scroll: true,
      items: [
        {
          id: "dialogue",
          anchor: "dialogue-7",
          text: dialogue7.sections?.[0]?.subtitle as LocalizedText,
        },
        {
          id: "vocabulary",
          anchor: "vocabulary-7",
          text: vocabulary7Block.title as LocalizedText,
          formatMkd: true,
          layout: "column",
        },
      ],
    },
    "8": {
      lessonId: 8,
      lessonData: lesson8,
      mainAnchor: "lesson-8_road",
      title: lesson8.sections?.[0]?.subtitle as LocalizedText,
      scroll: true,
      items: [
        {
          id: "dialogue",
          anchor: "dialogue-8",
          text: dialogue8.sections?.[0]?.subtitle as LocalizedText,
        },
        {
          id: "vocabulary",
          anchor: "vocabulary-8",
          text: vocabulary8Block.title as LocalizedText,
          formatMkd: true,
          layout: "column",
        },
      ],
    },
    "9": {
      lessonId: 9,
      lessonData: lesson9,
      mainAnchor: "lesson-9_shop",
      title: lesson9.sections?.[0]?.subtitle as LocalizedText,
      scroll: true,
      items: [
        {
          id: "dialogue",
          anchor: "dialogue-9",
          text: dialogue9.sections?.[0]?.subtitle as LocalizedText,
        },
        {
          id: "vocabulary",
          anchor: "vocabulary-9",
          text: vocabulary9Block.title as LocalizedText,
          formatMkd: true,
          layout: "column",
        },
        {
          id: "clothing-accessories",
          anchor: "clothing-accessories",
          text: glossary.clothingAccessories.title as LocalizedText,
          formatMkd: true,
          layout: "column",
        },
      ],
    },
    "10": {
      lessonId: 10,
      lessonData: lesson10,
      mainAnchor: "lesson-10_health",
      title: lesson10.sections?.[0]?.subtitle as LocalizedText,
      scroll: true,
      items: [
        {
          id: "dialogue",
          anchor: "dialogue-10",
          text: dialogue10.sections?.[0]?.subtitle as LocalizedText,
        },
        {
          id: "vocabulary",
          anchor: "vocabulary-10",
          text: vocabulary10Block.title as LocalizedText,
          formatMkd: true,
          layout: "column",
        },
        {
          id: "health",
          anchor: "health",
          text: glossary.health.title as LocalizedText,
          formatMkd: true,
          layout: "row",
        },
      ],
    },
  };
}
