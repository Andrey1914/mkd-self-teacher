import React from "react";

import { ExamplesTable } from "@/components/lesson/Tables";

import { examples } from "@/prisma/lessons/tables";

const { lesson6: examplesLesson6 } = examples;
const { example1, example2, example3 } = examplesLesson6;

export const Examples = () => {
  return (
    <>
      <ExamplesTable data={example1} />
      <ExamplesTable data={example2} />
      <ExamplesTable data={example3} />
    </>
  );
};
