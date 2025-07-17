import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";
import { ExamplesTable } from "@/components/lesson/Tables";

import { grammar } from "@/prisma/lessons/paragraph";
import { example2 } from "@/prisma/lessons/tables";

const VerbType = () => {
  return (
    <>
      <Paragraph data={grammar.verbType} />
      <Paragraph data={grammar.reflexiveVerbs} />
      <ExamplesTable data={example2} />
    </>
  );
};

export default VerbType;
