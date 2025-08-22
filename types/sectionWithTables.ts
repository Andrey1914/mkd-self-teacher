import { ExercisesProps } from "@/types";

export type TableEntry = {
  title: string;
  rows: string[][];
};

export type SectionWithTables = {
  type: string;
  title?: string | string[];
  tableEntries?: {
    create: TableEntry[];
  };
  exercises?: ExercisesProps[];
  prompt?: string[] | string;
  answer?: string[] | string;
};
