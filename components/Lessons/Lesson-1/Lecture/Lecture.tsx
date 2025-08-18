import React from "react";

import { DialogueAtAirport } from "./Dialogue";
import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock";
import { Vocabulary } from "@/components/lesson/Vocabulary";
import { Paragraph } from "@/components/lesson/Paragraph";
import { CountriesNationalitiesTable } from "@/components/lesson/Tables";

import { payAttentionsLesson1 } from "@/prisma/lessons/pay-attention";
import { vocabulary1, vocabulary2 } from "@/prisma/lessons/vocabulary/lesson-1";
import { paragraph } from "@/prisma/lessons/paragraph";
import { countriesNationalitiesTable } from "@/prisma/lessons/tables";

const { payAttention1, payAttention2 } = payAttentionsLesson1;

export const Lecture = () => {
  return (
    <>
      <DialogueAtAirport />
      <PayAttentionBlock data={payAttention1} />
      <Vocabulary lesson={vocabulary1} />{" "}
      <PayAttentionBlock data={payAttention2} />
      <Vocabulary lesson={vocabulary2} />
      <Paragraph data={paragraph.explanation} />
      <CountriesNationalitiesTable data={countriesNationalitiesTable} />
    </>
  );
};
