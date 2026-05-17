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
      <div id="lesson-1_phonetics">
        <Paragraph
          data={phonetics}
          part="title"
          titleIconSrc="/phonetics.png"
        />
      </div>
      <AlphabetTable />
      <Paragraph data={phonetics} part="text" />
      <div id="lesson-1_features">
        <Paragraph data={features} />
      </div>
      <div id="lesson-1_accent">
        <Paragraph data={accent} />
      </div>
      <div id="lesson-1_exeptions">
        <Paragraph data={exceptions} />
      </div>
      <Paragraph data={spelling} />
      <StaticExercise data={exercise1} />
    </>
  );
};
