import { HeadingLesson } from "@/components/lesson/Heading";
import { Paragraph } from "@/components/lesson/Paragraph";

import { lesson1 } from "@/prisma/lessons/lesson-1";
import { lectureLesson1 } from "@/prisma/lessons/paragraph";

const { lectureIntro } = lectureLesson1;

export const Intro = () => {
  return (
    <>
      <div id="lesson-1_airport">
        <HeadingLesson lessonData={lesson1} TitleIconSrc="/airport.webp" />
      </div>
      <div id="lesson-1_introduction">
        <Paragraph data={lectureIntro} part="text" />
      </div>
    </>
  );
};
