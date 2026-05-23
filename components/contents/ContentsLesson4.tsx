import { Grammar } from "@/components/contents/Lesson-4";
import {
  HeadingGenerator,
  LectureGenerator,
} from "@/components/contents/generator";
import lectureConfigs from "@/components/contents/config";
import { lesson4 } from "@/prisma/lessons/lesson-4";

export const ContentsLesson4 = () => {
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>
          <HeadingGenerator lesson={lesson4} />
        </li>
        <li>
          <LectureGenerator config={lectureConfigs()["4"]} />
        </li>
        <li>
          <Grammar />
        </li>
      </ul>
    </>
  );
};
