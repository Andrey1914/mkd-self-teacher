import { DialogueCity } from "./Dialogue";
import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock";
import { GenericTable } from "@/components/lesson/Tables";

import { payAttentionsLesson4 } from "@/prisma/lessons/pay-attention";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-4";

import {
  getColorizedItalicTdClassName,
  tableWithoutBorderClassName,
  getColorizedThClassName,
} from "@/components/lesson/Tables/rules";

const { payAttention1, payAttention2 } = payAttentionsLesson4;

export const Lecture = () => {
  return (
    <>
      <DialogueCity />
      <PayAttentionBlock data={payAttention1} />
      <PayAttentionBlock data={payAttention2} />
      <GenericTable
        lesson={vocabulary}
        classNames={{
          table: tableWithoutBorderClassName,
          th: getColorizedThClassName,
          td: getColorizedItalicTdClassName,
        }}
      />
    </>
  );
};
