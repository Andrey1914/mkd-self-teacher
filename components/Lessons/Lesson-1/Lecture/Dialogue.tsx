import { DialogueBlock } from "@/components/lesson/DialogueBlock";

import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-1";

export const DialogueAtAirport = () => {
  return (
    <>
      <DialogueBlock data={dialogueBlock} />
    </>
  );
};
