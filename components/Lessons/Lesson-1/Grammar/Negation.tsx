import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";

import { negation } from "@/prisma/lessons/paragraph";

export const Negation = () => {
  return (
    <>
      <Paragraph data={negation} />
    </>
  );
};
