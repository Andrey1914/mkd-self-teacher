import type { ExercisesProps } from "@/types";
import { determineExerciseConfig as coreDetermineExerciseConfig } from "../../core/compositeUtils";

type Section = ExercisesProps["sections"][number];

export const determineExerciseConfig = (
  section: Section,
  pronouns: string[],
) => {
  return coreDetermineExerciseConfig(section, pronouns);
};
