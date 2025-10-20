import React from "react";

import { HeadingLesson } from "@/components/lesson/Heading";

import { lesson4 } from "@/prisma/lessons/lesson-4";

export const Intro = () => {
  return <HeadingLesson lessonData={lesson4} TitleIconSrc="/walking.png" />;
};
