import React from "react";

import { DialogueMeetingWithFriends } from "./Dialogue";
import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock";
import { Vocabulary } from "@/components/lesson/Vocabulary";
import {
  GlossaryTable,
  PronounTable,
  ExamplesTable,
} from "@/components/lesson/Tables";
import { Paragraph } from "@/components/lesson/Paragraph";

import { payAttentionsLesson3 } from "@/prisma/lessons/pay-attention";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-3";
import { glossary, pronounsTable, examples } from "@/prisma/lessons/tables";
import { pronouns } from "@/prisma/lessons/paragraph";

const { occupationTable } = glossary;
const { personalPronouns } = pronouns;
const { personalPronounsTable } = pronounsTable;
const { lesson3 } = examples;
const { example1, example2, example3, example4, example5, example6, example7 } =
  lesson3;
const { payAttention1, payAttention2 } = payAttentionsLesson3;

export const Lecture = () => {
  return (
    <>
      <DialogueMeetingWithFriends />
      <PayAttentionBlock data={payAttention1} />
      <Vocabulary lesson={vocabulary} />
      <GlossaryTable data={occupationTable} />
      <Paragraph data={personalPronouns} />
      <PronounTable data={personalPronounsTable} />
      <ExamplesTable data={example1} />
      <ExamplesTable data={example2} />
      <ExamplesTable data={example3} />
      <ExamplesTable data={example4} />
      <PayAttentionBlock data={payAttention2} />
      <ExamplesTable data={example5} />
      <ExamplesTable data={example6} />
      <ExamplesTable data={example7} />
    </>
  );
};
