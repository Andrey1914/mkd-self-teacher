import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph";
// import // ConjugationTable,
// // GrammarTable,
// "@/components/lesson/Tables";
import { GenericTable } from "@/components/lesson/Tables";
import { FillInExercise } from "@/components/lesson/Exercises";
import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock";

import { grammarLesson1 } from "@/prisma/lessons/paragraph";
import { conjugationLesson1 } from "@/prisma/lessons/tables";
import { exercisesLesson1 } from "@/prisma/lessons/exercises";
import { payAttentionsLesson1 } from "@/prisma/lessons/pay-attention";
import { styles } from "@/components/lesson/Tables/styles";

const { verbConjugation, ruleConjugation } = grammarLesson1;
const { aClass, eClass, iClass } = conjugationLesson1;
const { payAttention3 } = payAttentionsLesson1;
const { exercise4, exercise5, exercise6 } = exercisesLesson1;

const {
  table,
  // headerCell, secondRowCell, headerCellBorderLeft,
  cell,
} = styles.generic;

export const VerbConjugation = () => {
  return (
    <>
      <Paragraph data={verbConjugation} />
      {/* <ConjugationTable data={aClass} /> */}
      <GenericTable
        data={aClass}
        classNames={{
          table: table,
          td: cell,
        }}
      />
      <FillInExercise data={exercise4} />
      {/* <GrammarTable data={iClass} /> */}
      <GenericTable
        data={iClass}
        classNames={{
          table: table,
          td: cell,
        }}
      />
      <PayAttentionBlock data={payAttention3} />
      <FillInExercise data={exercise5} />
      <GenericTable
        data={eClass}
        classNames={{
          table: table,
          td: cell,
        }}
      />
      <Paragraph data={ruleConjugation} />
      <FillInExercise data={exercise6} />
    </>
  );
};
