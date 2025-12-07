import { Paragraph } from "@/components/lesson/Paragraph";
import { GenericTable } from "@/components/lesson/Tables";

import { grammarLesson2 } from "@/prisma/lessons/paragraph";
import { numeralsTable } from "@/prisma/lessons/tables";

import {
  tableWithoutBorderLayoutAutoClassName,
  getColorizedThClassName,
  getColorizedExceptFirstTdClassName,
} from "@/components/lesson/Tables/rules";

const { cardinalOrdinalNumerals, finalPartCardinalOrdinalNumerals } =
  grammarLesson2;

const { cardinalOrdinalNumeralsTable } = numeralsTable;

export const Numerals = () => {
  return (
    <>
      <Paragraph data={cardinalOrdinalNumerals} />
      <GenericTable
        data={cardinalOrdinalNumeralsTable}
        classNames={{
          table: tableWithoutBorderLayoutAutoClassName,
          th: getColorizedThClassName,
          td: getColorizedExceptFirstTdClassName,
        }}
      />
      <Paragraph data={finalPartCardinalOrdinalNumerals} />
    </>
  );
};
