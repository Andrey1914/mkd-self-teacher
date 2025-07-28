import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";

import { noun } from "@/prisma/lessons/paragraph";

const { genderOfNouns, pluralOfNouns, feminineNouns } = noun;

const Nouns = () => {
  return (
    <>
      <Paragraph data={genderOfNouns} />
      <Paragraph data={pluralOfNouns} />
      <Paragraph data={feminineNouns} />
    </>
  );
};

export default Nouns;
