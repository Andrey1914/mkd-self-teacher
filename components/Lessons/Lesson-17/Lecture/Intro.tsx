import { HeadingLesson } from "@/components/lesson/Heading";

import { lesson17 } from "@/prisma/lessons/lesson-17";

export const Intro = () => {
  return <HeadingLesson lessonData={lesson17} TitleIconSrc="/farewell.webp" />;
};
