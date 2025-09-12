import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph";

import { grammarLesson2 } from "@/prisma/lessons/paragraph";

const {
  genderOfNouns,
  pluralOfNouns,
  feminineNouns,
  masculineNouns,
  neuterNouns,
  countablePlural,
} = grammarLesson2;

export const Nouns = () => {
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
