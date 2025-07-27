import {
  StaticExerciseSection,
  FillInExerciseData,
  ParagraphExerciseProps,
} from "@/types";

export type TableEntry = {
  title: string;
  rows: string[][];
};

export type ExerciseType =
  | StaticExerciseSection
  | FillInExerciseData
  | ParagraphExerciseProps;

export type SectionWithTables = {
  type: string;
  title?: string | string[];
  tableEntries?: {
    create: TableEntry[];
  };
  exercises?: ExerciseType[];
  prompt?: string[] | string;
  answer?: string[] | string;
};
