import { HeadingLesson } from "@/components/lesson/Heading";

import { lesson14 } from "@/prisma/lessons/lesson-14";

export const Intro = () => {
  return <HeadingLesson lessonData={lesson14} TitleIconSrc="/sport.png" />;
};
