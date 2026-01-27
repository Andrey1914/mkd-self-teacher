import { DialogueBlock } from "@/components/lesson/DialogueBlock";

import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-14";

export const Dialogue = () => {
  return (
    <>
      <DialogueBlock data={dialogueBlock} />
    </>
  );
};
