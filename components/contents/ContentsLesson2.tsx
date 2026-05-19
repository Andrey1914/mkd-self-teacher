import { Heading, Lecture, Grammar } from "@/components/contents/Lesson-2";

export const ContentsLesson2 = () => {
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Heading />
        </li>
        <li>
          <Lecture />
        </li>
        <li>
          <Grammar />
        </li>
      </ul>
    </>
  );
};
