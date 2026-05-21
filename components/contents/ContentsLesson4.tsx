import { Heading, Lecture, Grammar } from "@/components/contents/Lesson-4";

export const ContentsLesson4 = () => {
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
