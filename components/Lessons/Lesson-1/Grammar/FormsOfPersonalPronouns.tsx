import React from "react";

import { GrammarTable } from "@/components/lesson/Tables";
import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";

import { grammarPronouns } from "@/prisma/lessons/tables";
import { grammar } from "@/prisma/lessons/paragraph";

const { intro } = grammar;
const { grammarPronouns1 } = grammarPronouns;

export const FormsOfPersonalPronouns = () => {
  return (
    <>
      <GrammarTable data={grammarPronouns1} />
      <Paragraph data={intro} />
    </>
  );
};
