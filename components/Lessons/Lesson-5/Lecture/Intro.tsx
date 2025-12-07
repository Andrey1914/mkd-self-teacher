import { HeadingLesson } from "@/components/lesson/Heading";

import { lesson5 } from "@/prisma/lessons/lesson-5";

export const Intro = () => {
  return <HeadingLesson lessonData={lesson5} TitleIconSrc="/restaurant.png" />;
};
