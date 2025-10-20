import React from "react";

import { ExamplesTable } from "@/components/lesson/Tables";
import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock";

import { examples } from "@/prisma/lessons/tables";
import { payAttentionsLesson7 } from "@/prisma/lessons/pay-attention";

const { lesson7: examplesLesson7 } = examples;
const {
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example8,
} = examplesLesson7;

const { payAttention1 } = payAttentionsLesson7;

export const Examples = () => {
  return (
    <>
      <ExamplesTable
        data={example1}
        titleIconSrc="/grammar.png"
        titleIconSize={62}
      />
      <ExamplesTable data={example2} />
      <ExamplesTable data={example3} />
      <ExamplesTable data={example4} />
      <ExamplesTable data={example5} />
      <ExamplesTable data={example6} />
      <ExamplesTable data={example7} />
      <ExamplesTable data={example8} />
      <PayAttentionBlock data={payAttention1} />
    </>
  );
};
