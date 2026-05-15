import { BaseProps } from "@/types";

export interface AlphabetTable extends BaseProps {
  sections: {
    tableEntries: {
      create: Array<{
        rows: Array<{
          letter: string;
          sound: string;
        }>;
      }>;
    };
  }[];
}
