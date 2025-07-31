import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";

import { noun } from "@/prisma/lessons/paragraph";

const {
  genderOfNouns,
  pluralOfNouns,
  feminineNouns,
  masculineNouns,
  neuterNouns,
  countablePlural,
} = noun;

const Nouns = () => {
  return (
    <>
      <Paragraph data={genderOfNouns} />
      <Paragraph data={pluralOfNouns} />
      <Paragraph data={feminineNouns} />
      <Paragraph data={masculineNouns} />
      <Paragraph data={neuterNouns} />
      <Paragraph data={countablePlural} />
    </>
  );
};

export default Nouns;
