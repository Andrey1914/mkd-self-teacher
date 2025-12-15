import { HeadingLesson } from "@/components/lesson/Heading";

import { lesson12 } from "@/prisma/lessons/lesson-12";

export const Intro = () => {
  return <HeadingLesson lessonData={lesson12} TitleIconSrc="/meeting.png" />;
};
