import { ExamplesTable } from "@/components/lesson/Tables";

import { examples } from "@/prisma/lessons/tables";

const { lesson16: examplesLesson16 } = examples;
const { example1, example2, example3, example4 } = examplesLesson16;

export const Examples = () => {
  return (
    <>
      <ExamplesTable data={example1} titleIconSrc="/grammar.webp" />
      <ExamplesTable data={example2} />
      <ExamplesTable data={example3} />
      <ExamplesTable data={example4} />
    </>
  );
};
