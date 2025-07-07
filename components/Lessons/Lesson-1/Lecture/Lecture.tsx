import React from "react";

import { DialogueAtAirport } from "@/components/Lessons/Lesson-1/Lecture/Dialogue";
import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock/PayAttentionBlock";
import { Vocabulary } from "@/components/lesson/Vocabulary/Vocabulary";
import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";
import { CountriesNationalitiesTable } from "@/components/lesson/Tables";

import {
  payAttention1,
  payAttention2,
} from "@/prisma/lessons/pay-attention/lesson-1";
import { vocabulary1, vocabulary2 } from "@/prisma/lessons/vocabulary/lesson-1";
import { explanation } from "@/prisma/lessons/paragraph";
import { countriesNationalitiesTable } from "@/prisma/lessons/tables";

export const Lecture = () => {
  return (
    <>
      <DialogueAtAirport />
      <PayAttentionBlock data={payAttention1} />
      <Vocabulary lesson={vocabulary1} />{" "}
      <PayAttentionBlock data={payAttention2} />
      <Vocabulary lesson={vocabulary2} />
      <Paragraph data={explanation} />
      <CountriesNationalitiesTable data={countriesNationalitiesTable} />
    </>
  );
};
