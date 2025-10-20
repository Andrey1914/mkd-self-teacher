import React from "react";

import { DialogueMeetingWithFriends } from "./Dialogue";
import { Examples } from "./Examples";
import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock";
import { PronounTable, GenericTable } from "@/components/lesson/Tables";
import { Paragraph } from "@/components/lesson/Paragraph";

import { payAttentionsLesson3 } from "@/prisma/lessons/pay-attention";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-3";
import { glossary, pronounsTable } from "@/prisma/lessons/tables";
import { grammarLesson3 } from "@/prisma/lessons/paragraph";

import {
  tableWithoutBorderClassName,
  getColorizedThClassName,
  getColorizedFirstTdClassName,
  getColorizedItalicTdClassName,
} from "@/components/lesson/Tables/rules";

const { occupationTable } = glossary;
const { personalPronouns } = grammarLesson3;
const { personalPronounsTable } = pronounsTable;
const { payAttention1 } = payAttentionsLesson3;

export const Lecture = () => {
  return (
    <>
      <DialogueMeetingWithFriends />
      <PayAttentionBlock data={payAttention1} />
      <GenericTable
        lesson={vocabulary}
        classNames={{
          table: tableWithoutBorderClassName,
          th: getColorizedThClassName,
          td: getColorizedItalicTdClassName,
        }}
      />
      <GenericTable
        data={occupationTable}
        classNames={{
          table: tableWithoutBorderClassName,
          th: getColorizedThClassName,
          td: getColorizedFirstTdClassName,
        }}
      />
      <Paragraph
        data={personalPronouns}
        titleIconSrc="/grammar.png"
        titleIconSize={62}
      />
      <PronounTable data={personalPronounsTable} />
      <Examples />
    </>
  );
};
