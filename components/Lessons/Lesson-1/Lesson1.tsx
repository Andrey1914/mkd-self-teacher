import { Intro, Lecture } from "@/components/Lessons/Lesson-1/Lecture";
import { Phonetics } from "@/components/Lessons/Lesson-1/Phonetics";
import { Grammar } from "@/components/Lessons/Lesson-1/Grammar";

export const Lesson1 = () => {
  return (
    <>
      <Intro />
      <Phonetics />
      <Lecture />
      <Grammar />
    </>
  );
};
