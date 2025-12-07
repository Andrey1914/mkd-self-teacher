import { HeadingLesson } from "@/components/lesson/Heading";

import { lesson7 } from "@/prisma/lessons/lesson-7";

export const Intro = () => {
  return <HeadingLesson lessonData={lesson7} TitleIconSrc="/apartment.png" />;
};
