import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph";
import { DefinitenessCategoryTable } from "@/components/lesson/Tables";
import { ExamplesTable } from "@/components/lesson/Tables";

import { grammarLesson4 } from "@/prisma/lessons/paragraph";
import { grammarTables, examples } from "@/prisma/lessons/tables";

const { definitenessCategory } = grammarLesson4;
const { definitenessCategoryTable } = grammarTables;
const { lesson4: examplesLesson4 } = examples;
const { example1, example2 } = examplesLesson4;

export const Grammar = () => {
  return (
    <>
      <Paragraph data={definitenessCategory} part="title" />
      <DefinitenessCategoryTable data={definitenessCategoryTable} />
      <Paragraph data={definitenessCategory} part="text" />
      <ExamplesTable data={example1} />
      <ExamplesTable data={example2} />
    </>
  );
};
