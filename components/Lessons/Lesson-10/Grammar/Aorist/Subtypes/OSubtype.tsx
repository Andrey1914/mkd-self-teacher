import React from "react";

import { GenericTable } from "@/components/lesson/Tables/GenericTable";

import { grammarTables } from "@/prisma/lessons/tables";

import {
  tableClassName,
  thColorizedClassName,
  tdColorizedClassName,
} from "@/components/lesson/Tables/rules";

const { oSubtypes } = grammarTables;
const { oSubtype1, oSubtype2 } = oSubtypes;

export const AoristOSubtype = () => {
  return (
    <>
      <GenericTable
        data={oSubtype1}
        classNames={{
          table: tableClassName,
          th: thColorizedClassName,
          td: tdColorizedClassName,
        }}
      />
      <GenericTable
        data={oSubtype2}
        classNames={{
          table: tableClassName,
          th: thColorizedClassName,
          td: tdColorizedClassName,
        }}
      />
    </>
  );
};
