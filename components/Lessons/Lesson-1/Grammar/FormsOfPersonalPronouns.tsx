import React from "react";

import { GrammarTable } from "@/components/lesson/Tables";
import { Paragraph } from "@/components/lesson/Paragraph";

import { grammarPronouns } from "@/prisma/lessons/tables";
import { grammarLesson1 } from "@/prisma/lessons/paragraph";

const { intro } = grammarLesson1;
const { grammarPronouns1 } = grammarPronouns;

export const FormsOfPersonalPronouns = () => {
  return (
    <>
      <GrammarTable data={grammarPronouns1} />
      <Paragraph data={intro} />
    </>
  );
};
