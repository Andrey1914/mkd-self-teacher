import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph";

import { grammar } from "@/prisma/lessons/paragraph";

const { negation } = grammar;

export const Negation = () => {
  return (
    <>
      <Paragraph data={negation} />
    </>
  );
};
