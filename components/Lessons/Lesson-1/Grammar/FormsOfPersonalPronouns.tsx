import React from "react";

import { GenericTable } from "@/components/lesson/Tables";
import { Paragraph } from "@/components/lesson/Paragraph";

import { grammarPronouns } from "@/prisma/lessons/tables";
import { grammarLesson1 } from "@/prisma/lessons/paragraph";

import {
  tableClassName,
  tdClassName,
  getColorizedThClassName,
} from "@/components/lesson/Tables/rules";

const { intro } = grammarLesson1;
const { grammarPronouns1 } = grammarPronouns;

export const FormsOfPersonalPronouns = () => {
  return (
    <>
      <GenericTable
        data={grammarPronouns1}
        classNames={{
          table: tableClassName,
          td: tdClassName,
          th: getColorizedThClassName,
        }}
      />
      <Paragraph data={intro} />
    </>
  );
};
