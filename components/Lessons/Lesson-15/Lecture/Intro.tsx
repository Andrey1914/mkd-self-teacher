import { HeadingLesson } from "@/components/lesson/Heading";

import { lesson15 } from "@/prisma/lessons/lesson-15";

export const Intro = () => {
  return <HeadingLesson lessonData={lesson15} TitleIconSrc="/studying.png" />;
};
