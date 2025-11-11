import React from "react";

import { HeadingLesson } from "@/components/lesson/Heading";

import { lesson9 } from "@/prisma/lessons/lesson-9";

export const Intro = () => {
  return <HeadingLesson lessonData={lesson9} TitleIconSrc="/shop.png" />;
};
