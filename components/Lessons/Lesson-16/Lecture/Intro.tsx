import { HeadingLesson } from "@/components/lesson/Heading";

import { lesson16 } from "@/prisma/lessons/lesson-16";

export const Intro = () => {
  return <HeadingLesson lessonData={lesson16} TitleIconSrc="/music.png" />;
};
