import React from "react";

import { DialogueCity } from "./Dialogue";
import { Intro } from "./Intro";
import { Paragraph } from "@/components/lesson/Paragraph";
// import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock";
import { Vocabulary } from "@/components/lesson/Vocabulary";
import { GlossaryTable } from "@/components/lesson/Tables";

import { lectureLesson5 } from "@/prisma/lessons/paragraph";
import { glossary } from "@/prisma/lessons/tables";

// import { payAttentionsLesson4 } from "@/prisma/lessons/pay-attention";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-5";

// const { payAttention1, payAttention2 } = payAttentionsLesson4;
const { intro } = lectureLesson5;

const { foodTable } = glossary;

export const Lecture = () => {
  return (
    <>
      <Intro />
      <DialogueCity />
      <Paragraph data={intro} />
      {/* <PayAttentionBlock data={payAttention1} /> */}
      {/* <PayAttentionBlock data={payAttention2} /> */}
      <Vocabulary lesson={vocabulary} />
      <GlossaryTable data={foodTable} />
    </>
  );
};
