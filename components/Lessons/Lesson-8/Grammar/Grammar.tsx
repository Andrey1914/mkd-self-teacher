import React from "react";

import { Examples } from "./Examples";
// import { Exercises } from "./Exercises";
import { Paragraph } from "@/components/lesson/Paragraph";

import { grammarLesson8 } from "@/prisma/lessons/paragraph";

const { imperative } = grammarLesson8;

export const Grammar = () => {
  return (
    <>
      <Paragraph data={imperative} titleIconSrc="/grammar.png" />
      <Examples />
      {/* <Exercises /> */}
    </>
  );
};
