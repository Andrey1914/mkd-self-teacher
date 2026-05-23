import { Grammar } from "@/components/contents/Lesson-2";
import {
  HeadingGenerator,
  LectureGenerator,
} from "@/components/contents/generator";
import lectureConfigs from "@/components/contents/config";
import { lesson2 } from "@/prisma/lessons/lesson-2";

export const ContentsLesson2 = () => {
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>
          <HeadingGenerator lesson={lesson2} />
        </li>
        <li>
          <LectureGenerator config={lectureConfigs()["2"]} />
        </li>
        <li>
          <Grammar />
        </li>
      </ul>
    </>
  );
};
