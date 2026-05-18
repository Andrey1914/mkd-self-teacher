import { Paragraph } from "@/components/lesson/Paragraph";
import { AlphabetTable } from "@/components/lesson/Tables";
import { StaticExercise } from "@/components/lesson/Exercises";

import { grammarLesson1 } from "@/prisma/lessons/paragraph";
import { exercisesLesson1 } from "@/prisma/lessons/exercises";

const { exercise1 } = exercisesLesson1;
const { phonetics, features, accent, exceptions, spelling } = grammarLesson1;

export const Phonetics = () => {
  return (
    <>
      <Paragraph
        data={phonetics}
        part="title"
        titleIconSrc="/phonetics.png"
        id="lesson-1_phonetics"
      />
      <AlphabetTable />
      <Paragraph data={phonetics} part="text" />
      <Paragraph data={features} id="lesson-1_features" />
      <Paragraph data={accent} id="lesson-1_accent" />
      <Paragraph data={exceptions} id="lesson-1_exceptions" />
      <Paragraph data={spelling} id="lesson-1_spelling" />
      <StaticExercise data={exercise1} />
    </>
  );
};
