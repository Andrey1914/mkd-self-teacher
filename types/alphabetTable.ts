import { BaseProps } from "@/types";

export interface AlphabetTable extends BaseProps {
  // type: string;
  // slug: string;
  sections: {
    tableEntries: {
      create: Array<{
        title?: string;
        rows: Array<{
          letter: string;
          sound: string;
        }>;
      }>;
    };
  }[];
}
