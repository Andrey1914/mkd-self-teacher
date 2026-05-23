import {
  Lesson1Phonetics,
  Lesson1Grammar,
} from "@/components/contents/Lesson-1";
import {
  LectureGenerator,
  HeadingGenerator,
} from "@/components/contents/generator";
import lectureConfigs from "@/components/contents/config";
import { lesson1 } from "@/prisma/lessons/lesson-1";

export const ContentsLesson1 = () => {
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>
          <HeadingGenerator lesson={lesson1} />
        </li>
        <li>
          <LectureGenerator config={lectureConfigs()["1_part1"]} />
        </li>
        <li>
          <Lesson1Phonetics />
        </li>
        <li>
          <LectureGenerator config={lectureConfigs()["1_part2"]} />
        </li>
        <li>
          <Lesson1Grammar />
        </li>
      </ul>
    </>
  );
};
