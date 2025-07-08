import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";

import { genderOfNouns } from "@/prisma/lessons/paragraph";

export const GenderOfNouns = () => {
  return (
    <>
      <Paragraph data={genderOfNouns} />
    </>
  );
};
