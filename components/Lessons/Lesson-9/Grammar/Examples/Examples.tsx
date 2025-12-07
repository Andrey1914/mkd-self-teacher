import { ExamplesTable } from "@/components/lesson/Tables";
import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock";

import { examples } from "@/prisma/lessons/tables";
import { payAttentionsLesson9 } from "@/prisma/lessons/pay-attention";

const { lesson9: examplesLesson9 } = examples;
const { example1 } = examplesLesson9;
const { payAttention1 } = payAttentionsLesson9;

export const Examples = () => {
  return (
    <>
      <ExamplesTable data={example1} />
      <PayAttentionBlock data={payAttention1} />
    </>
  );
};
