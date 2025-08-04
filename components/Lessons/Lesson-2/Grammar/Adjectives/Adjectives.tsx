import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";
import { AdjectivesTable } from "@/components/lesson/Tables";

import { adjectives } from "@/prisma/lessons/paragraph";
import { genderNumberPronominalOfAdjectives } from "@/prisma/lessons/tables/adjectives";

const { introAdjectives } = adjectives;

const Adjectives = () => {
  return (
    <>
      <Paragraph data={introAdjectives} />
      <AdjectivesTable data={genderNumberPronominalOfAdjectives} />
    </>
  );
};

export default Adjectives;
