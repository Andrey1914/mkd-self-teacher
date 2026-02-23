import { ExamplesTable } from "@/components/lesson/Tables";
import { Paragraph } from "@/components/lesson/Paragraph";
import { GenericTable } from "@/components/lesson/Tables";

import { examples, grammarTables } from "@/prisma/lessons/tables";
import { grammarLesson15 } from "@/prisma/lessons/paragraph";

const { lesson15: examplesLesson15 } = examples;
const { example1, example2, example3, example4, example5 } = examplesLesson15;
const { pluperfect } = grammarLesson15;
const { pluperfect: pluperfectTable } = grammarTables;

import {
  tableClassName,
  thColorizedClassName,
  tdColorizedClassName,
} from "@/components/lesson/Tables/rules";

export const Examples = () => {
  return (
    <>
      <ExamplesTable data={example1} titleIconSrc="/grammar.png" />
      <ExamplesTable data={example2} />
      <GenericTable
        data={pluperfectTable}
        classNames={{
          table: tableClassName,
          th: thColorizedClassName,
          td: tdColorizedClassName,
        }}
      />
      <ExamplesTable data={example3} />
      <ExamplesTable data={example4} />
      <Paragraph data={pluperfect} />
      <ExamplesTable data={example5} />
    </>
  );
};
