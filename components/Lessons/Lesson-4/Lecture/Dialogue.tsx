import { DialogueBlock } from "@/components/lesson/DialogueBlock";

import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-4";

export const DialogueCity = () => {
  return (
    <>
      <DialogueBlock data={dialogueBlock} />
    </>
  );
};
