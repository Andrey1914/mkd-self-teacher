import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";
import { NumeralsTable } from "@/components/lesson/Tables";

import { numerals } from "@/prisma/lessons/paragraph";
import { numeralsTable } from "@/prisma/lessons/tables";

const { cardinalOrdinalNumerals } = numerals;
const { cardinalOrdinalNumeralsTable } = numeralsTable;

const Numerals = () => {
  return (
    <>
      <Paragraph data={cardinalOrdinalNumerals} />
      <NumeralsTable data={cardinalOrdinalNumeralsTable} />
    </>
  );
};

export default Numerals;
