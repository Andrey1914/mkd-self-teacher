import { HeadingLesson } from "@/components/lesson/Heading";

import { lesson13 } from "@/prisma/lessons/lesson-13";

export const Intro = () => {
  return <HeadingLesson lessonData={lesson13} TitleIconSrc="/loss.png" />;
};
