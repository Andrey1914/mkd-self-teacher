import React from "react";

import { DialogueBlock } from "@/components/lesson/DialogueBlock";

import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-8";

export const Dialogue = () => {
  return (
    <>
      <DialogueBlock data={dialogueBlock} />
    </>
  );
};
