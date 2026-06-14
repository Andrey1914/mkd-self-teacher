import type { LectureConfig, LocalizedText } from "@/components/contents/types";

import { lectureLesson1 } from "@/prisma/lessons/paragraph";
import { countriesNationalitiesTable } from "@/prisma/lessons/tables";
import { glossary } from "@/prisma/lessons/tables";
import { lessons } from "@/prisma/lessons";
import { dialogues } from "@/prisma/lessons/dialogues";
import { vocabularies } from "@/prisma/lessons/vocabulary";

const [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
  lesson11,
  lesson12,
  lesson13,
  lesson14,
  lesson15,
  lesson16,
  lesson17,
] = lessons;

const [
  dialogue1,
  dialogue2,
  dialogue3,
  dialogue4,
  dialogue5,
  dialogue6,
  dialogue7,
  dialogue8,
  dialogue9,
  dialogue10,
  dialogue11,
  dialogue12,
  dialogue13,
  dialogue14,
  dialogue15,
  dialogue16,
  dialogue17,
] = dialogues;

const [
  vocabulary1Block_1,
  vocabulary1Block_2,
  vocabulary2Block,
  vocabulary3Block,
  vocabulary4Block,
  vocabulary5Block,
  vocabulary6Block,
  vocabulary7Block,
  vocabulary8Block,
  vocabulary9Block,
  vocabulary10Block,
  vocabulary11Block,
  vocabulary12Block,
  vocabulary13Block,
  vocabulary14Block,
  vocabulary15Block,
  vocabulary16Block,
  vocabulary17Block,
] = vocabularies;

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
          text: vocabulary1Block_1.title as LocalizedText,
          layout: "column",
        },
        {
          id: "vocabulary",
          anchor: "vocabulary-2",
          text: vocabulary1Block_2.title as LocalizedText,
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
    "11": {
      lessonId: 11,
      lessonData: lesson11,
      mainAnchor: "lesson-11_holidays",
      title: lesson11.sections?.[0]?.subtitle as LocalizedText,
      scroll: true,
      items: [
        {
          id: "dialogue",
          anchor: "dialogue-11",
          text: dialogue11.sections?.[0]?.subtitle as LocalizedText,
        },
        {
          id: "vocabulary",
          anchor: "vocabulary-11",
          text: vocabulary11Block.title as LocalizedText,
          formatMkd: true,
          layout: "column",
        },
        {
          id: "time",
          anchor: "time",
          text: glossary.time.title as LocalizedText,
          formatMkd: true,
          layout: "row",
        },
      ],
    },
    "12": {
      lessonId: 12,
      lessonData: lesson12,
      mainAnchor: "lesson-12_unexpected-meeting",
      title: lesson12.sections?.[0]?.subtitle as LocalizedText,
      scroll: true,
      items: [
        {
          id: "dialogue",
          anchor: "dialogue-12",
          text: dialogue12.sections?.[0]?.subtitle as LocalizedText,
        },
        {
          id: "vocabulary",
          anchor: "vocabulary-12",
          text: vocabulary12Block.title as LocalizedText,
          formatMkd: true,
          layout: "column",
        },
        {
          id: "family",
          anchor: "family",
          text: glossary.family.title as LocalizedText,
          formatMkd: true,
          layout: "row",
        },
      ],
    },
    "13": {
      lessonId: 13,
      lessonData: lesson13,
      mainAnchor: "lesson-13_nastya-loses-her-wallet",
      title: lesson13.sections?.[0]?.subtitle as LocalizedText,
      scroll: true,
      items: [
        {
          id: "dialogue",
          anchor: "dialogue-13",
          text: dialogue13.sections?.[0]?.subtitle as LocalizedText,
        },
        {
          id: "vocabulary",
          anchor: "vocabulary-13",
          text: vocabulary13Block.title as LocalizedText,
          formatMkd: true,
          layout: "column",
        },
        {
          id: "appearance-and-care",
          anchor: "appearance-and-care",
          text: glossary.appearanceAndCare.title as LocalizedText,
          formatMkd: true,
          layout: "row",
        },
      ],
    },
    "14": {
      lessonId: 14,
      lessonData: lesson14,
      mainAnchor: "lesson-14_sport",
      title: lesson14.sections?.[0]?.subtitle as LocalizedText,
      scroll: true,
      items: [
        {
          id: "dialogue",
          anchor: "dialogue-14",
          text: dialogue14.sections?.[0]?.subtitle as LocalizedText,
        },
        {
          id: "vocabulary",
          anchor: "vocabulary-14",
          text: vocabulary14Block.title as LocalizedText,
          formatMkd: true,
          layout: "column",
        },
        {
          id: "sport",
          anchor: "sport",
          text: glossary.sport.title as LocalizedText,
          formatMkd: true,
          layout: "row",
        },
      ],
    },
    "15": {
      lessonId: 15,
      lessonData: lesson15,
      mainAnchor: "lesson-15_learning-a-language",
      title: lesson15.sections?.[0]?.subtitle as LocalizedText,
      scroll: true,
      items: [
        {
          id: "dialogue",
          anchor: "dialogue-15",
          text: dialogue15.sections?.[0]?.subtitle as LocalizedText,
        },
        {
          id: "vocabulary",
          anchor: "vocabulary-15",
          text: vocabulary15Block.title as LocalizedText,
          formatMkd: true,
          layout: "column",
        },
      ],
    },
    "16": {
      lessonId: 16,
      lessonData: lesson16,
      mainAnchor: "lesson-16_music",
      title: lesson16.sections?.[0]?.subtitle as LocalizedText,
      scroll: true,
      items: [
        {
          id: "dialogue",
          anchor: "dialogue-16",
          text: dialogue16.sections?.[0]?.subtitle as LocalizedText,
        },
        {
          id: "vocabulary",
          anchor: "vocabulary-16",
          text: vocabulary16Block.title as LocalizedText,
          formatMkd: true,
          layout: "column",
        },
        {
          id: "music",
          anchor: "music",
          text: glossary.music.title as LocalizedText,
          formatMkd: true,
          layout: "row",
        },
      ],
    },
    "17": {
      lessonId: 17,
      lessonData: lesson17,
      mainAnchor: "lesson-17_farewell",
      title: lesson17.sections?.[0]?.subtitle as LocalizedText,
      scroll: true,
      items: [
        {
          id: "dialogue",
          anchor: "dialogue-17",
          text: dialogue17.sections?.[0]?.subtitle as LocalizedText,
        },
        {
          id: "vocabulary",
          anchor: "vocabulary-17",
          text: vocabulary17Block.title as LocalizedText,
          formatMkd: true,
          layout: "column",
        },
      ],
    },
  };
}
