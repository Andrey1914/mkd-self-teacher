import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph";
import { GenericTable } from "@/components/lesson/Tables";
import { FillInExercise } from "@/components/lesson/Exercises";
import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock";

import { grammarLesson1 } from "@/prisma/lessons/paragraph";
import { conjugationLesson1 } from "@/prisma/lessons/tables";
import { exercisesLesson1 } from "@/prisma/lessons/exercises";
import { payAttentionsLesson1 } from "@/prisma/lessons/pay-attention";

import {
  tableClassName,
  tdClassName,
  textCenterClassName,
} from "@/components/lesson/Tables/rules";

const { verbConjugation, ruleConjugation } = grammarLesson1;
const { aClass, eClass, iClass } = conjugationLesson1;
const { payAttention3 } = payAttentionsLesson1;
const { exercise4, exercise5, exercise6 } = exercisesLesson1;

export const VerbConjugation = () => {
  return (
    <>
      <Paragraph data={verbConjugation} />
      <GenericTable
        data={aClass}
        classNames={{
          table: tableClassName,
          td: tdClassName,
          text: textCenterClassName,
        }}
      />
      <FillInExercise data={exercise4} />
      <GenericTable
        data={iClass}
        classNames={{
          table: tableClassName,
          td: tdClassName,
          text: textCenterClassName,
        }}
      />
      <PayAttentionBlock data={payAttention3} />
      <FillInExercise data={exercise5} />
      <GenericTable
        data={eClass}
        classNames={{
          table: tableClassName,
          td: tdClassName,
          text: textCenterClassName,
        }}
      />
      <Paragraph data={ruleConjugation} />
      <FillInExercise data={exercise6} />
    </>
  );
};
