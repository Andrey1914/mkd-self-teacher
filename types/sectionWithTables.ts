import { ExercisesProps } from "@/types";

export type TableEntry = {
  title?: string;
  // rows: string[][];
  rows: { letter: string; sound: string }[];
};

export type SectionWithTables = {
  type: string;
  slug?: string;
  title?: string | string[] | { ru: string; mkd: string };
  subtitle?: string | string[] | { ru: string; mkd: string };
  tableEntries?: {
    create: TableEntry[];
  };
  exercises?: ExercisesProps[];
  prompt?: string[] | string;
  answer?: string[] | string;

  // data?: Partial<SectionWithTables>;
};
