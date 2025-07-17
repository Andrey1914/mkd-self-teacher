import React from "react";

import { GrammarTable } from "@/components/lesson/Tables";
import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";

import { grammarPronouns1 } from "@/prisma/lessons/tables";
import { grammar } from "@/prisma/lessons/paragraph";

export const FormsOfPersonalPronouns = () => {
  return (
    <>
      <GrammarTable data={grammarPronouns1} />
      <Paragraph data={grammar.intro} />
    </>
  );
};
