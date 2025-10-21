import React from "react";

import { ExamplesTable } from "@/components/lesson/Tables";
import { Paragraph } from "@/components/lesson/Paragraph";

import { examples } from "@/prisma/lessons/tables";
import { lectureLesson5 } from "@/prisma/lessons/paragraph";

const { lesson5: examplesLesson5 } = examples;
const { verbalNoun } = lectureLesson5;

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
  example13,
  example14,
} = examplesLesson5;

export const Examples = () => {
  return (
    <>
      <ExamplesTable
        data={example1}
        titleIconSrc="/grammar.png"
        // titleIconSize={62}
      />
      <ExamplesTable data={example2} />
      <ExamplesTable data={example3} />
      <ExamplesTable data={example4} />
      <ExamplesTable data={example5} />
      <ExamplesTable data={example6} />
      <ExamplesTable data={example7} />
      <Paragraph data={verbalNoun} />
      <ExamplesTable data={example8} />
      <ExamplesTable data={example9} />
      <ExamplesTable data={example10} />
      <ExamplesTable data={example11} />
      <ExamplesTable data={example12} />
      <ExamplesTable data={example13} />
      <ExamplesTable data={example14} />
    </>
  );
};
