import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";

import { genderOfNouns } from "@/prisma/lessons/paragraph";

const GenderOfNouns = () => {
  return (
    <>
      <Paragraph data={genderOfNouns} />
    </>
  );
};

export default GenderOfNouns;
