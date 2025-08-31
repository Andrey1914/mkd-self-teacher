import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph";

import { grammarLesson4 } from "@/prisma/lessons/paragraph";

const { definitenessCategory } = grammarLesson4;

export const Grammar = () => {
  return (
    <>
      <Paragraph data={definitenessCategory} part="title" />

      <Paragraph data={definitenessCategory} part="text" />
    </>
  );
};
