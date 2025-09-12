import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph";

import { grammarLesson1 } from "@/prisma/lessons/paragraph";

const { negation } = grammarLesson1;

export const Negation = () => {
  return (
    <>
      <Paragraph data={negation} />
    </>
  );
};
