import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";

import { noun } from "@/prisma/lessons/paragraph";

const { genderOfNouns } = noun;

const GenderOfNouns = () => {
  return (
    <>
      <Paragraph data={genderOfNouns} />
    </>
  );
};

export default GenderOfNouns;
