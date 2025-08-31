import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph";
import { DefinitenessCategoryTable } from "@/components/lesson/Tables";

import { grammarLesson4 } from "@/prisma/lessons/paragraph";
import { grammarTables } from "@/prisma/lessons/tables";

const { definitenessCategory } = grammarLesson4;
const { definitenessCategoryTable } = grammarTables;

export const Grammar = () => {
  return (
    <>
      <Paragraph data={definitenessCategory} part="title" />
      <DefinitenessCategoryTable data={definitenessCategoryTable} />
      <Paragraph data={definitenessCategory} part="text" />
    </>
  );
};
