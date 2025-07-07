import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";
import { ExamplesTable } from "@/components/lesson/Tables";

import { verbType, reflexiveVerbs } from "@/prisma/lessons/paragraph";
import { example2 } from "@/prisma/lessons/tables";

export const VerbType = () => {
  return (
    <>
      <Paragraph data={verbType} />
      <Paragraph data={reflexiveVerbs} />
      <ExamplesTable data={example2} />
    </>
  );
};
