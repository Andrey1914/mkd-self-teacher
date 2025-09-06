import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph";
import { DefinitenessCategoryTable } from "@/components/lesson/Tables";
import { ExamplesTable } from "@/components/lesson/Tables";

import { grammarLesson4 } from "@/prisma/lessons/paragraph";
import { grammarTables, examples } from "@/prisma/lessons/tables";

const { definitenessCategory, prepositions } = grammarLesson4;
const { definitenessCategoryTable } = grammarTables;
const { lesson4: examplesLesson4 } = examples;
const {
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example8,
  example9,
} = examplesLesson4;

export const Grammar = () => {
  return (
    <>
      <Paragraph data={definitenessCategory} part="title" />
      <DefinitenessCategoryTable data={definitenessCategoryTable} />
      <Paragraph data={definitenessCategory} part="text" />
      <ExamplesTable data={example1} />
      <ExamplesTable data={example2} />
      <ExamplesTable data={example3} />
      <ExamplesTable data={example4} />
      <ExamplesTable data={example5} />
      <ExamplesTable data={example6} />
      <ExamplesTable data={example7} />
      <ExamplesTable data={example8} />
      <ExamplesTable data={example9} />
      <Paragraph data={prepositions} part="marked" />
    </>
  );
};
