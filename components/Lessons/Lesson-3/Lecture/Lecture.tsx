import React from "react";

import { DialogueMeetingWithFriends } from "./Dialogue";
import { Examples } from "./Examples";
import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock";
import { Vocabulary } from "@/components/lesson/Vocabulary";
import { GlossaryTable, PronounTable } from "@/components/lesson/Tables";
import { Paragraph } from "@/components/lesson/Paragraph";

import { payAttentionsLesson3 } from "@/prisma/lessons/pay-attention";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-3";
import { glossary, pronounsTable } from "@/prisma/lessons/tables";
import { grammarLesson3 } from "@/prisma/lessons/paragraph";

const { occupationTable } = glossary;
const { personalPronouns } = grammarLesson3;
const { personalPronounsTable } = pronounsTable;

const { payAttention1 } = payAttentionsLesson3;

export const Lecture = () => {
  return (
    <>
      <DialogueMeetingWithFriends />
      <PayAttentionBlock data={payAttention1} />
      <Vocabulary lesson={vocabulary} />
      <GlossaryTable data={occupationTable} />
      <Paragraph data={personalPronouns} />
      <PronounTable data={personalPronounsTable} />
      <Examples />
    </>
  );
};
