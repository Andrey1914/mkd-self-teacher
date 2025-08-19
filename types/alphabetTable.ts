import { BaseProps } from "@/types";

export interface AlphabetTable extends BaseProps {
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
