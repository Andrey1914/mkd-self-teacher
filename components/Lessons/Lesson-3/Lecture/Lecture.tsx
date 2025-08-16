import React from "react";

import { DialogueMeetingWithFriends } from "@/components/Lessons/Lesson-3/Lecture/Dialogue";
import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock/PayAttentionBlock";
import { Vocabulary } from "@/components/lesson/Vocabulary/Vocabulary";
import {
  GlossaryTable,
  PronounTable,
  ExamplesTable,
} from "@/components/lesson/Tables";
import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";

import { payAttention1 } from "@/prisma/lessons/pay-attention/lesson-3";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-3";
import { glossary, pronounsTable, examples } from "@/prisma/lessons/tables";
import { pronouns } from "@/prisma/lessons/paragraph";

const { occupationTable } = glossary;
const { personalPronouns } = pronouns;
const { personalPronounsTable } = pronounsTable;
const { lesson3 } = examples;
const { example1 } = lesson3;

const Lecture = () => {
  return (
    <>
      <DialogueMeetingWithFriends />
      <PayAttentionBlock data={payAttention1} />
      <Vocabulary lesson={vocabulary} />
      <GlossaryTable data={occupationTable} />
      {/* <PayAttentionBlock data={payAttention2} /> */}
      {/* <Vocabulary lesson={vocabulary2} /> */}
      <Paragraph data={personalPronouns} />
      <PronounTable data={personalPronounsTable} />
      <ExamplesTable data={example1} />
    </>
  );
};

export default Lecture;
