import { Grammar } from "@/components/contents/Lesson-3";
import {
  HeadingGenerator,
  LectureGenerator,
} from "@/components/contents/generator";
import lectureConfigs from "@/components/contents/config";
import { lesson3 } from "@/prisma/lessons/lesson-3";

export const ContentsLesson3 = () => {
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>
          <HeadingGenerator lesson={lesson3} />
        </li>
        <li>
          <LectureGenerator config={lectureConfigs()["3"]} />
        </li>
        <li>
          <Grammar />
        </li>
      </ul>
    </>
  );
};
