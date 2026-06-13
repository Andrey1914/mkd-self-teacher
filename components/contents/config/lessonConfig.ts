import { LessonConfig } from "@/components/contents/types";
import { Lesson1Phonetics } from "@/components/contents/Lesson-1";

export const lessonConfig: LessonConfig[] = [
  {
    lessonId: 1,
    blocks: [
      { type: "lecture", configKey: "1_part1" },
      { id: "phonetics-1", type: "custom", component: Lesson1Phonetics },
      { type: "lecture", configKey: "1_part2" },
      { type: "grammar", configKey: "1" },
    ],
  },
  {
    lessonId: 2,
    blocks: [
      { type: "lecture", configKey: "2" },
      { type: "grammar", configKey: "2" },
    ],
  },
  {
    lessonId: 3,
    blocks: [
      { type: "lecture", configKey: "3" },
      { type: "grammar", configKey: "3" },
    ],
  },
  {
    lessonId: 4,
    blocks: [
      { type: "lecture", configKey: "4" },
      { type: "grammar", configKey: "4" },
    ],
  },
  {
    lessonId: 5,
    blocks: [
      { type: "lecture", configKey: "5" },
      { type: "grammar", configKey: "5" },
    ],
  },
  {
    lessonId: 6,
    blocks: [
      { type: "lecture", configKey: "6" },
      { type: "grammar", configKey: "6" },
    ],
  },
  {
    lessonId: 7,
    blocks: [
      { type: "lecture", configKey: "7" },
      { type: "grammar", configKey: "7" },
    ],
  },
  {
    lessonId: 8,
    blocks: [
      { type: "lecture", configKey: "8" },
      { type: "grammar", configKey: "8" },
    ],
  },
  {
    lessonId: 9,
    blocks: [
      { type: "lecture", configKey: "9" },
      { type: "grammar", configKey: "9" },
    ],
  },
  {
    lessonId: 10,
    blocks: [
      { type: "lecture", configKey: "10" },
      { type: "grammar", configKey: "10" },
    ],
  },
];
