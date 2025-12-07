import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock";
import { ExamplesTable } from "@/components/lesson/Tables";
import { Paragraph } from "@/components/lesson/Paragraph";

import { payAttentionsLesson3 } from "@/prisma/lessons/pay-attention";
import { examples } from "@/prisma/lessons/tables";
import { grammarLesson3 } from "@/prisma/lessons/paragraph";

const { needVerb } = grammarLesson3;
const { lesson3: examplesLesson3 } = examples;
const {
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example8,
  example9,
  example10,
  example11,
  example12,
} = examplesLesson3;

const { payAttention2 } = payAttentionsLesson3;

export const Examples = () => {
  return (
    <>
      <ExamplesTable data={example1} />
      <ExamplesTable data={example2} />
      <ExamplesTable data={example3} />
      <ExamplesTable data={example4} />
      <PayAttentionBlock data={payAttention2} />
      <ExamplesTable data={example5} />
      <ExamplesTable data={example6} />
      <ExamplesTable data={example7} />
      <ExamplesTable data={example8} />
      <ExamplesTable data={example9} />
      <ExamplesTable data={example10} />
      <ExamplesTable data={example11} />
      <Paragraph data={needVerb} />
      <ExamplesTable data={example12} />
    </>
  );
};
