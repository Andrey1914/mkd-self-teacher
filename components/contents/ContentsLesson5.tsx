import { Heading, Lecture, Grammar } from "@/components/contents/Lesson-5";

export const ContentsLesson5 = () => {
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
