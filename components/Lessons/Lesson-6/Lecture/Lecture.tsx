import React from "react";

import { TripToOhrid } from "./Dialogue";
import { Intro } from "./Intro";
import { Paragraph } from "@/components/lesson/Paragraph";
import { Vocabulary } from "@/components/lesson/Vocabulary";

import { lectureLesson6 } from "@/prisma/lessons/paragraph";

import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-6";

const { intro } = lectureLesson6;

export const Lecture = () => {
  return (
    <>
      <Intro />
      <TripToOhrid />
      <Paragraph data={intro} />
      <Vocabulary lesson={vocabulary} />
    </>
  );
};
