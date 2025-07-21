import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";
import { ConjugationTable, GrammarTable } from "@/components/lesson/Tables";
import { FillInExercise } from "@/components/lesson/Exercises";
import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock/PayAttentionBlock";

import { grammar } from "@/prisma/lessons/paragraph";
import { aClass, iClass, eClass } from "@/prisma/lessons/tables";
import {
  exercise4,
  exercise5,
  exercise6,
} from "@/prisma/lessons/exercises/lesson-1";
import { payAttention3 } from "@/prisma/lessons/pay-attention/lesson-1";

const { verbConjugation, ruleConjugation } = grammar;

const VerbConjugation = () => {
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

export default VerbConjugation;
