import type { ExercisesProps } from "@/types";

type Section = ExercisesProps["sections"][number];

/**
 * Determines the configuration of the exercise: the number of fields, whether placeholders are needed.
 */
export const determineExerciseConfig = (
  section: Section,
  pronouns: string[]
) => {
  const isSingleInput = section.singleInput === true;
  const answers = section.content.answer ?? [];

  const usePlaceholders =
    !isSingleInput &&
    answers.length > 0 &&
    answers.every((answer) =>
      pronouns.some((pronoun) => answer.trim().startsWith(pronoun))
    );

  const inputCount = isSingleInput ? 1 : pronouns.length;

  return { usePlaceholders, inputCount };
};
