import React from "react";

import { DialogueCity } from "./Dialogue";
import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock";
import { Vocabulary } from "@/components/lesson/Vocabulary";

import { payAttentionsLesson4 } from "@/prisma/lessons/pay-attention";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-4";

const { payAttention1, payAttention2 } = payAttentionsLesson4;

export const Lecture = () => {
  return (
    <>
      <DialogueCity />
      <PayAttentionBlock data={payAttention1} />
      <PayAttentionBlock data={payAttention2} />
      <Vocabulary lesson={vocabulary} />
    </>
  );
};
