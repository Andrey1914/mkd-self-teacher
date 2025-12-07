import { HeadingLesson } from "@/components/lesson/Heading";

import { lesson2 } from "@/prisma/lessons/lesson-2";

export const Intro = () => {
  return <HeadingLesson lessonData={lesson2} TitleIconSrc="/taxi-hotel.png" />;
};
