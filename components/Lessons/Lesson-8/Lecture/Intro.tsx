import { HeadingLesson } from "@/components/lesson/Heading";

import { lesson8 } from "@/prisma/lessons/lesson-8";

export const Intro = () => {
  return <HeadingLesson lessonData={lesson8} TitleIconSrc="/road.png" />;
};
