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

export default function lectureConfigs(): Record<string, LectureConfig> {
  return {
    "1_part1": {
      lessonId: 1,
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
      mainAnchor: "lesson-2_taxi-hotel",
      title: lesson2.sections?.[0]?.subtitle as LocalizedText,
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
      mainAnchor: "lesson-3_acquaintance",
      title: lesson3.sections?.[0]?.subtitle as LocalizedText,
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
          anchor: "occupation-3",
          text: glossary.occupationTable.title as LocalizedText,
          layout: "column",
        },
      ],
    },

    "4": {
      lessonId: 4,
      mainAnchor: "lesson-4_exploring-the-city",
      title: lesson4.sections?.[0]?.subtitle as LocalizedText,
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
      mainAnchor: "lesson-5_restaurant",
      title: lesson5.sections?.[0]?.subtitle as LocalizedText,
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
          id: "occupation",
          anchor: "occupation-5",
          text: glossary.occupationTable.title as LocalizedText,
          layout: "column",
        },
      ],
    },

    "6": {
      lessonId: 6,
      mainAnchor: "lesson-6_car-rental",
      title: lesson6.sections?.[0]?.subtitle as LocalizedText,
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
  };
}
