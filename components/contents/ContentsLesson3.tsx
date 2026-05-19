import { Heading, Lecture, Grammar } from "@/components/contents/Lesson-3";

export const ContentsLesson3 = () => {
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
