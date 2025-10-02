import React from "react";

import { Examples } from "./Examples";
// import { Exercises } from "./Exercises";
// import { Paragraph } from "@/components/lesson/Paragraph";
import { Imperfect } from "./Imperfect";

// import { grammarLesson6 } from "@/prisma/lessons/paragraph";

// const { imperfect } = grammarLesson6;

export const Grammar = () => {
  return (
    <>
      {/* <Paragraph data={imperfect} /> */}
      <Imperfect />
      <Examples />
      {/* <Exercises /> */}
    </>
  );
};
