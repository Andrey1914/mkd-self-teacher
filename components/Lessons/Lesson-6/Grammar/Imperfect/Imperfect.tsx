import React from "react";

import { GenericTable } from "@/components/lesson/Tables/GenericTable";

import { grammarTables } from "@/prisma/lessons/tables";
import { aClass, iClass, eClass } from "@/prisma/lessons/tables/conjugation";
import {
  grammarPronouns1,
  grammarPronouns2,
} from "@/prisma/lessons/tables/grammar";
import { countriesNationalitiesTable } from "@/prisma/lessons/tables";

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
      <GenericTable data={aClass} />
      <GenericTable data={iClass} />
      <GenericTable data={eClass} />
      <GenericTable data={grammarPronouns1} />
      <GenericTable data={grammarPronouns2} />
      <GenericTable data={countriesNationalitiesTable} />
    </>
  );
};
