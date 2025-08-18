import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph";
import { NumeralsTable } from "@/components/lesson/Tables";

import { numerals } from "@/prisma/lessons/paragraph";
import { numeralsTable } from "@/prisma/lessons/tables";

const { cardinalOrdinalNumerals, finalPartCardinalOrdinalNumerals } = numerals;
const { cardinalOrdinalNumeralsTable } = numeralsTable;

export const Numerals = () => {
  return (
    <>
      <Paragraph data={cardinalOrdinalNumerals} />
      <NumeralsTable data={cardinalOrdinalNumeralsTable} />
      <Paragraph data={finalPartCardinalOrdinalNumerals} />
    </>
  );
};
