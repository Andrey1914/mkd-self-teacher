import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph";
import { ExamplesTable } from "@/components/lesson/Tables";

import { grammar } from "@/prisma/lessons/paragraph";
import { examples } from "@/prisma/lessons/tables";

const { verbType } = grammar;

const { lesson1 } = examples;
const { example2 } = lesson1;

export const VerbType = () => {
  return (
    <>
      <Paragraph data={verbType} />
      <ExamplesTable data={example2} />
    </>
  );
};
