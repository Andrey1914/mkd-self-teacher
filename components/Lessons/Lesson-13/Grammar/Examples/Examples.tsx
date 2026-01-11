import { ExamplesTable } from "@/components/lesson/Tables";
import { Paragraph } from "@/components/lesson/Paragraph";

import { examples } from "@/prisma/lessons/tables";
import { grammarLesson13 } from "@/prisma/lessons/paragraph";

const { lesson13: examplesLesson13 } = examples;
const { example1, example2, example3, example4, example5 } = examplesLesson13;
const { formsOfRetelling } = grammarLesson13;

export const Examples = () => {
  return (
    <>
      <ExamplesTable data={example1} titleIconSrc="/grammar.png" />
      <ExamplesTable data={example2} />
      <Paragraph data={formsOfRetelling} />
      <ExamplesTable data={example3} />
      <ExamplesTable data={example4} />
      <ExamplesTable data={example5} />
    </>
  );
};
