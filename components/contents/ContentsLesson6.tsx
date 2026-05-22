import { Heading, Lecture, Grammar } from "@/components/contents/Lesson-6";

export const ContentsLesson6 = () => {
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
