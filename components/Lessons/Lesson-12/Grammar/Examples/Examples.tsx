import { ExamplesTable } from "@/components/lesson/Tables";
import { GenericTable } from "@/components/lesson/Tables";
import { Paragraph } from "@/components/lesson/Paragraph";

import { examples } from "@/prisma/lessons/tables";
import { grammarTables } from "@/prisma/lessons/tables";
import { grammarLesson12 } from "@/prisma/lessons/paragraph";

import {
  tableClassName,
  thColorizedClassName,
  tdColorizedClassName,
} from "@/components/lesson/Tables/rules";

const { lesson12: examplesLesson12 } = examples;
const { example1, example2, example3, example4, example5 } = examplesLesson12;
const { perfect } = grammarTables;
const { perfectLForm } = grammarLesson12;

export const Examples = () => {
  return (
    <>
      <ExamplesTable data={example1} titleIconSrc="/grammar.png" />
      <ExamplesTable data={example2} />
      <ExamplesTable data={example3} />
      <GenericTable
        data={perfect}
        classNames={{
          table: tableClassName,
          th: thColorizedClassName,
          td: tdColorizedClassName,
        }}
      />
      <Paragraph data={perfectLForm} />
      <ExamplesTable data={example4} />
      <ExamplesTable data={example5} />
    </>
  );
};
