import { Grammar } from "@/components/contents/Lesson-5";
import {
  HeadingGenerator,
  LectureGenerator,
} from "@/components/contents/generator";
import lectureConfigs from "@/components/contents/config";
import { lesson5 } from "@/prisma/lessons/lesson-5";

export const ContentsLesson5 = () => {
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>
          <HeadingGenerator lesson={lesson5} />
        </li>
        <li>
          <LectureGenerator config={lectureConfigs()["5"]} />
        </li>
        <li>
          <Grammar />
        </li>
      </ul>
    </>
  );
};
