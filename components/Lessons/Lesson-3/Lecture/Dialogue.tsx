import React from "react";

import { DialogueBlock } from "@/components/lesson/DialogueBlock";

import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-3";

export const DialogueMeetingWithFriends = () => {
  return (
    <>
      <DialogueBlock data={dialogueBlock} />
    </>
  );
};
