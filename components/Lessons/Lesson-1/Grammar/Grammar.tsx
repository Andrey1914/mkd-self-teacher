import React from "react";

import { FormsOfPersonalPronouns } from "@/components/Lessons/Lesson-1/Grammar/FormsOfPersonalPronouns";
import {
  Verb,
  VerbType,
  VerbConjugation,
} from "@/components/Lessons/Lesson-1/Grammar/Verb";
import { Negation } from "@/components/Lessons/Lesson-1/Grammar/Negation";
import { InterrogativeSentences } from "@/components/Lessons/Lesson-1/Grammar/InterrogativeSentences";

export const Grammar = () => {
  return (
    <>
      <FormsOfPersonalPronouns />
      <Verb />
      <VerbType />
      <VerbConjugation />
      <Negation />
      <InterrogativeSentences />
    </>
  );
};
