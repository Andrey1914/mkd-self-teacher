import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph";
import { ConjugationTable, GrammarTable } from "@/components/lesson/Tables";
import { FillInExercise } from "@/components/lesson/Exercises";
import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock";

import { grammar } from "@/prisma/lessons/paragraph";
import { conjugationLesson1 } from "@/prisma/lessons/tables";
import { exercisesLesson1 } from "@/prisma/lessons/exercises";
import { payAttentionsLesson1 } from "@/prisma/lessons/pay-attention";

const { verbConjugation, ruleConjugation } = grammar;
const { aClass, eClass, iClass } = conjugationLesson1;
const { payAttention3 } = payAttentionsLesson1;
const { exercise4, exercise5, exercise6 } = exercisesLesson1;

export const VerbConjugation = () => {
  return (
    <>
      <Paragraph data={verbConjugation} />
      <ConjugationTable data={aClass} />
      <FillInExercise data={exercise4} />
      <GrammarTable data={iClass} />
      <PayAttentionBlock data={payAttention3} />
      <FillInExercise data={exercise5} />
      <ConjugationTable data={eClass} />
      <Paragraph data={ruleConjugation} />
      <FillInExercise data={exercise6} />
    </>
  );
};

// export default VerbConjugation;
