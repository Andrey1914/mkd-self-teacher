import { DialogueBlock } from "@/components/lesson/DialogueBlock";

import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-6";

export const TripToOhrid = () => {
  return (
    <>
      <DialogueBlock data={dialogueBlock} />
    </>
  );
};
