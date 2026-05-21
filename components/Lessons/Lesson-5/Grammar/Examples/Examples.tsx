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
        titleIconSrc="/grammar.webp"
        id="direct-object"
      />
      <ExamplesTable data={example2} />
      <ExamplesTable data={example3} />
      <ExamplesTable data={example4} />
      <ExamplesTable data={example5} />
      <ExamplesTable data={example6} />
      <ExamplesTable data={example7} />
      <Paragraph data={verbalNoun} id="verbal-noun" />
      <ExamplesTable data={example8} id="conjanctions" />
      <ExamplesTable data={example9} />
      <ExamplesTable data={example10} id="adversary-conjanctions" />
      <ExamplesTable data={example11} />
      <ExamplesTable data={example12} id="disjunctive-conjunctions" />
      <ExamplesTable data={example13} id="conjunctions-that-whether" />
      <ExamplesTable data={example14} />
    </>
  );
};
