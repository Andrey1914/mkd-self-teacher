import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";

import { numerals } from "@/prisma/lessons/paragraph";

const { cardinalOrdinalNumerals } = numerals;

const Numerals = () => {
  return (
    <>
      <Paragraph data={cardinalOrdinalNumerals} />
    </>
  );
};

export default Numerals;
