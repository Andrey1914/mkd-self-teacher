import React from "react";

import { DialogueAtAirport } from "./Dialogue";
import { GenericTable } from "@/components/lesson/Tables";
import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock";
import { Paragraph } from "@/components/lesson/Paragraph";

import { payAttentionsLesson1 } from "@/prisma/lessons/pay-attention";
import { vocabulary1, vocabulary2 } from "@/prisma/lessons/vocabulary/lesson-1";
import { grammarLesson1 } from "@/prisma/lessons/paragraph";
import { countriesNationalitiesTable } from "@/prisma/lessons/tables";

import {
  tableClassName,
  getColorizedItalicTdClassName,
  tableWithoutBorderClassName,
  getColorizedThClassName,
  tdColorizedClassName,
} from "@/components/lesson/Tables/rules";

const { payAttention1, payAttention2 } = payAttentionsLesson1;
const { explanation } = grammarLesson1;

export const Lecture = () => {
  return (
    <>
      <DialogueAtAirport />
      <PayAttentionBlock data={payAttention1} />
      <GenericTable
        lesson={vocabulary1}
        classNames={{
          table: tableWithoutBorderClassName,
          th: getColorizedThClassName,
          td: getColorizedItalicTdClassName,
        }}
      />{" "}
      <PayAttentionBlock data={payAttention2} />
      <GenericTable
        lesson={vocabulary2}
        classNames={{
          table: tableWithoutBorderClassName,
          th: getColorizedThClassName,
          td: getColorizedItalicTdClassName,
        }}
      />
      <Paragraph data={explanation} />
      <GenericTable
        data={countriesNationalitiesTable}
        classNames={{
          table: tableClassName,
          th: getColorizedThClassName,
          td: tdColorizedClassName,
        }}
      />
    </>
  );
};
