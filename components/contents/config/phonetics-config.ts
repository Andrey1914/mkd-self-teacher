import type {
  PhoneticsConfig,
  LocalizedText,
} from "@/components/contents/types";
import { lectureLesson1 } from "@/prisma/lessons/paragraph";

export default function phoneticsConfigs(): Record<string, PhoneticsConfig> {
  return {
    "1": {
      lessonId: 1,
      mainAnchor: "lesson-1_phonetics",
      title: lectureLesson1.phonetics?.title as LocalizedText,
      scroll: true,
      items: [
        {
          id: "alphabet",
          anchor: "phonetics",
          text: lectureLesson1.phonetics?.content?.intro
            ?.subtitle as LocalizedText,
        },
        {
          id: "features",
          anchor: "features",
          text: lectureLesson1.features?.subtitle as string,
        },
        {
          id: "accent",
          anchor: "accent",
          text: lectureLesson1.accent?.subtitle as string,
          children: [
            {
              id: "exceptions",
              anchor: "exceptions",
              text: lectureLesson1.exceptions?.subtitle as string,
            },
          ],
        },
        {
          id: "spelling",
          anchor: "spelling",
          text: lectureLesson1.spelling?.subtitle as string,
        },
      ],
    },
  };
}
