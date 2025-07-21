import {
  grammarPronouns1,
  grammarPronouns2,
} from "@/prisma/lessons/tables/grammarPronouns/lesson-1";

import {
  aClass,
  eClass,
  iClass,
} from "@/prisma/lessons/tables/conjugation/lesson-1";

export { grammarPronouns1, grammarPronouns2, aClass, eClass, iClass };

export { default as alphabetTable } from "./alphabetTable";
export { default as countriesNationalitiesTable } from "./countriesNationalitiesTable";

export * as examplesLesson1 from "./examples";
