import React from "react";

import { HeadingLesson } from "@/components/lesson/Heading";

import { lesson10 } from "@/prisma/lessons/lesson-10";

export const Intro = () => {
  return <HeadingLesson lessonData={lesson10} TitleIconSrc="/health.png" />;
};
