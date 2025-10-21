import React from "react";

import { Examples } from "./Examples";
import { Exercises } from "./Exercises";
import { Paragraph } from "@/components/lesson/Paragraph";
import { DefinitenessCategoryTable } from "@/components/lesson/Tables";

import { grammarLesson4 } from "@/prisma/lessons/paragraph";
import { grammarTables } from "@/prisma/lessons/tables";

const { definitenessCategory, prepositions } = grammarLesson4;
const { definitenessCategoryTable } = grammarTables;

export const Grammar = () => {
  return (
    <>
      <Paragraph
        data={definitenessCategory}
        part="title"
        titleIconSrc="/grammar.png"
        // titleIconSize={62}
      />
      <DefinitenessCategoryTable data={definitenessCategoryTable} />
      <Paragraph data={definitenessCategory} part="text" />
      <Examples />
      <Paragraph data={prepositions} part="marked" />
      <Exercises />
    </>
  );
};
