import React from "react";

import { DialogueBlock } from "@/components/lesson/DialogueBlock/DialogueBlock";

import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-2";

export const DialogueAtTaxiAndHotel = () => {
  return (
    <>
      <DialogueBlock data={dialogueBlock} />
    </>
  );
};
