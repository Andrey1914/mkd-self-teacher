import {
  Lesson1Heading,
  Lesson1LectureFirstPart,
  Lesson1LectureSecondPart,
  Lesson1Phonetics,
} from "@/components/contents/Lesson-1";

export const ContentsLesson1 = () => {
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Lesson1Heading />
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
      </ul>
    </>
  );
};
