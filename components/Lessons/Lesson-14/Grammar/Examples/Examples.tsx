import { ExamplesTable } from "@/components/lesson/Tables";
// import { Paragraph } from "@/components/lesson/Paragraph";
import { GenericTable } from "@/components/lesson/Tables";

import { examples, grammarTables } from "@/prisma/lessons/tables";
// import { grammarLesson13 } from "@/prisma/lessons/paragraph";

const { lesson14: examplesLesson14 } = examples;
const {
  example1,
  // example2, example3, example4, example5
} = examplesLesson14;
// const { formsOfRetelling } = grammarLesson13;
const { futureInThePast } = grammarTables;

import {
  tableClassName,
  thColorizedClassName,
  tdColorizedClassName,
} from "@/components/lesson/Tables/rules";

export const Examples = () => {
  return (
    <>
      <ExamplesTable data={example1} titleIconSrc="/grammar.png" />
      <GenericTable
        data={futureInThePast}
        classNames={{
          table: tableClassName,
          th: thColorizedClassName,
          td: tdColorizedClassName,
        }}
      />
      {/* <ExamplesTable data={example2} /> */}
      {/* <Paragraph data={formsOfRetelling} /> */}
      {/* <ExamplesTable data={example3} /> */}
      {/* <ExamplesTable data={example4} /> */}
      {/* <ExamplesTable data={example5} /> */}
    </>
  );
};
