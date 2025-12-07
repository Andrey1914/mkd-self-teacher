import { DialogueBlock } from "@/components/lesson/DialogueBlock";

import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-7";

export const Apartments = () => {
  return (
    <>
      <DialogueBlock data={dialogueBlock} />
    </>
  );
};
