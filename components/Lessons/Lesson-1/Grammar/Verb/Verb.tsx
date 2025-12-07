import { Paragraph } from "@/components/lesson/Paragraph";
import { GenericTable } from "@/components/lesson/Tables";
import { ExamplesTable } from "@/components/lesson/Tables";
import { FillInExercise } from "@/components/lesson/Exercises";

import { grammarLesson1 } from "@/prisma/lessons/paragraph";
import { grammarPronouns } from "@/prisma/lessons/tables";
import { examples } from "@/prisma/lessons/tables";
import { exercisesLesson1 } from "@/prisma/lessons/exercises";

import {
  tableClassName,
  tdClassName,
  getColorizedThClassName,
} from "@/components/lesson/Tables/rules";

const { toBe } = grammarLesson1;
const { exercise2, exercise3 } = exercisesLesson1;
const { grammarPronouns2 } = grammarPronouns;
const { lesson1 } = examples;
const { example1 } = lesson1;

export const Verb = () => {
  return (
    <>
      <Paragraph data={toBe} />
      <GenericTable
        data={grammarPronouns2}
        classNames={{
          table: tableClassName,
          td: tdClassName,
          th: getColorizedThClassName,
        }}
      />
      <ExamplesTable data={example1} />
      <FillInExercise data={exercise2} />
      <FillInExercise data={exercise3} />
    </>
  );
};
