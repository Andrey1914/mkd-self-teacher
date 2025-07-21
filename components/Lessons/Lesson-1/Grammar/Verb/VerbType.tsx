import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";
import { ExamplesTable } from "@/components/lesson/Tables";

import { grammar } from "@/prisma/lessons/paragraph";
import { example2 as examplesLesson1 } from "@/prisma/lessons/tables/examples";

const { verbType, reflexiveVerbs } = grammar;

const VerbType = () => {
  return (
    <>
      <Paragraph data={verbType} />
      <Paragraph data={reflexiveVerbs} />
      <ExamplesTable data={examplesLesson1} />
    </>
  );
};

export default VerbType;
