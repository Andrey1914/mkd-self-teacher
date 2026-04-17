import { HeadingLesson } from "@/components/lesson/Heading";
import { Paragraph } from "@/components/lesson/Paragraph";

import { lesson1 } from "@/prisma/lessons/lesson-1";
import { lectureLesson1 } from "@/prisma/lessons/paragraph";

const { lectureIntro } = lectureLesson1;

export const Intro = () => {
  return (
    <>
      <HeadingLesson lessonData={lesson1} TitleIconSrc="/airport.webp" />
      <Paragraph data={lectureIntro} part="text" />
    </>
  );
};
