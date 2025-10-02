import React from "react";

import { GenericTable } from "@/components/lesson/Tables/GenericTable";

import { grammarTables } from "@/prisma/lessons/tables";

import { styles } from "@/components/lesson/Tables/styles";

const { imperfect } = grammarTables;
const { table, headerCell, secondRowCell, headerCellBorderLeft, cell } =
  styles.generic;

export const Imperfect = () => {
  return (
    <>
      <GenericTable
        data={imperfect}
        classNames={{
          table: table,
          td: cell,
          th: (index) =>
            `${headerCell} ${secondRowCell} ${
              index > 0 ? headerCellBorderLeft : ""
            }`,
        }}
      />
    </>
  );
};
