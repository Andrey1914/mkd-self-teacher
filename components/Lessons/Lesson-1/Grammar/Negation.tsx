import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";

import { grammar } from "@/prisma/lessons/paragraph";

export const Negation = () => {
  return (
    <>
      <Paragraph data={grammar.negation} />
    </>
  );
};
