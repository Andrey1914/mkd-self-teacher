import { HeadingLesson } from "@/components/lesson/Heading";

import { lesson11 } from "@/prisma/lessons/lesson-11";

export const Intro = () => {
  return <HeadingLesson lessonData={lesson11} TitleIconSrc="/christmas.png" />;
};
