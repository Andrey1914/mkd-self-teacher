import { DialogueBlock } from "@/components/lesson/DialogueBlock";

import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-13";

export const Dialogue = () => {
  return (
    <>
      <DialogueBlock data={dialogueBlock} />
    </>
  );
};
