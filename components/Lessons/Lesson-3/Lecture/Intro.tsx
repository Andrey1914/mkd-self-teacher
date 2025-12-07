import { HeadingLesson } from "@/components/lesson/Heading";

import { lesson3 } from "@/prisma/lessons/lesson-3";

export const Intro = () => {
  return (
    <HeadingLesson lessonData={lesson3} TitleIconSrc="/acquaintances.png" />
  );
};
