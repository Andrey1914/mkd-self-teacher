import React from "react";

import { HeadingLesson } from "@/components/lesson/Heading";

import { lesson6 } from "@/prisma/lessons/lesson-6";

export const Intro = () => {
  return <HeadingLesson lessonData={lesson6} />;
};
