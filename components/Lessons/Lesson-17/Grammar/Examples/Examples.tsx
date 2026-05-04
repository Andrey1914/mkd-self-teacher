import { ExamplesTable, GenericTable } from "@/components/lesson/Tables";
import { Paragraph } from "@/components/lesson/Paragraph";

import { examples, grammarTables } from "@/prisma/lessons/tables";
import { grammarLesson17 } from "@/prisma/lessons/paragraph";

import {
  tableClassName,
  textCenterClassName,
  getColorizedThClassName,
  getColorizedBorderedExceptFirstTdClassName,
  getTableWidth,
} from "@/components/lesson/Tables/rules";

const { lesson17: examplesLesson17 } = examples;
const { ruleAfterExamples } = grammarLesson17;
const { example1, example2, example3, example4 } = examplesLesson17;

const { retellingForms } = grammarTables;

export const Examples = () => {
  return (
    <>
      <ExamplesTable data={example1} titleIconSrc="/grammar.webp" />
      <ExamplesTable data={example2} />
      <Paragraph data={ruleAfterExamples} />
      <GenericTable
        data={retellingForms}
        classNames={{
          table: tableClassName,
          td: getColorizedBorderedExceptFirstTdClassName,
          th: (index) =>
            `${getColorizedThClassName(index)} ${getTableWidth(index)}`,
          text: textCenterClassName,
        }}
      />
      <ExamplesTable data={example3} />
      <ExamplesTable data={example4} />
    </>
  );
};
