import { Grammar } from "@/components/contents/Lesson-6";
import {
  HeadingGenerator,
  LectureGenerator,
} from "@/components/contents/generator";
import lectureConfigs from "@/components/contents/config";
import { lesson6 } from "@/prisma/lessons/lesson-6";

export const ContentsLesson6 = () => {
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>
          <HeadingGenerator lesson={lesson6} />
        </li>
        <li>
          <LectureGenerator config={lectureConfigs()["6"]} />
        </li>
        <li>
          <Grammar />
        </li>
      </ul>
    </>
  );
};
