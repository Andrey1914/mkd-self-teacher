import { LessonConfig } from "@/components/contents/types";

const customLessons: Record<number, LessonConfig> = {
  1: {
    lessonId: 1,
    blocks: [
      { type: "lecture", configKey: "1_part1" },
      { type: "phonetics", configKey: "1" },
      { type: "lecture", configKey: "1_part2" },
      { type: "grammar", configKey: "1" },
    ],
  },
};

const generateStandardLesson = (id: number): LessonConfig => ({
  lessonId: id,
  blocks: [
    { type: "lecture", configKey: String(id) },
    { type: "grammar", configKey: String(id) },
  ],
});

export const lessonConfig: LessonConfig[] = Array.from(
  { length: 17 },
  (_, i) => {
    const id = i + 1;
    return customLessons[id] || generateStandardLesson(id);
  },
);
