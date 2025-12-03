import React from "react";

import { GenericTable } from "@/components/lesson/Tables/GenericTable";

import { grammarTables } from "@/prisma/lessons/tables";

import {
  tableClassName,
  thColorizedClassName,
  tdColorizedClassName,
} from "@/components/lesson/Tables/rules";

const { nullSubtypes } = grammarTables;
const { nullSubtype } = nullSubtypes;

export const AoristNullSubtype = () => {
  return (
    <>
      <GenericTable
        data={nullSubtype}
        classNames={{
          table: tableClassName,
          th: thColorizedClassName,
          td: tdColorizedClassName,
        }}
      />
    </>
  );
};
