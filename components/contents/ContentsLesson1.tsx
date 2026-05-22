import {
  Heading,
  Lesson1LectureFirstPart,
  Lesson1LectureSecondPart,
  Lesson1Phonetics,
  Lesson1Grammar,
} from "@/components/contents/Lesson-1";

export const ContentsLesson1 = () => {
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Heading />
        </li>
        <li>
          <Lesson1LectureFirstPart />
        </li>
        <li>
          <Lesson1Phonetics />
        </li>
        <li>
          <Lesson1LectureSecondPart />
        </li>
        <li>
          <Lesson1Grammar />
        </li>
      </ul>
    </>
  );
};
