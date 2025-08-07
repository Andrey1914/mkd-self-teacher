import React from "react";

import { Nouns } from "@/components/Lessons/Lesson-2/Grammar/Noun";
import { Adjectives } from "@/components/Lessons/Lesson-2/Grammar/Adjectives";
import { Numerals } from "@/components/Lessons/Lesson-2/Grammar/Numerals";
import { Exercises } from "@/components/Lessons/Lesson-2/Grammar/Exercises";

const Grammar = () => {
  return (
    <>
      <Nouns />
      <Adjectives />
      <Numerals />
      <Exercises />
    </>
  );
};

export default Grammar;
