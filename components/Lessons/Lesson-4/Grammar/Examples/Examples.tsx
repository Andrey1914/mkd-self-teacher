import { ExamplesTable } from "@/components/lesson/Tables";

import { examples } from "@/prisma/lessons/tables";

const { lesson4: examplesLesson4 } = examples;

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
} = examplesLesson4;

export const Examples = () => {
  return (
    <>
      <ExamplesTable data={example1} id="verb-future" />
      <ExamplesTable data={example2} />
      <ExamplesTable data={example3} />
      <ExamplesTable data={example4} />
      <ExamplesTable data={example5} />
      <ExamplesTable data={example6} id="verb-have-have-not" />
      <ExamplesTable data={example7} />
      <ExamplesTable data={example8} />
      <ExamplesTable data={example9} id="lets-construction" />
    </>
  );
};
