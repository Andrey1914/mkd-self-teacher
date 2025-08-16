import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";
import { ExamplesTable } from "@/components/lesson/Tables";

import { grammar } from "@/prisma/lessons/paragraph";
import { examples } from "@/prisma/lessons/tables";

// const { verbType, reflexiveVerbs } = grammar;
const { verbType } = grammar;

const { lesson1 } = examples;
const { example2 } = lesson1;

const VerbType = () => {
  return (
    <>
      <Paragraph data={verbType} />
      {/* <Paragraph data={reflexiveVerbs} /> */}
      <ExamplesTable data={example2} />
    </>
  );
};

export default VerbType;
