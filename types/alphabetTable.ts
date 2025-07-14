export type AlphabetTable = {
  slug: string;
  sections: {
    tableEntries: {
      create: Array<{
        title: string;
        rows: Array<{
          letter: string;
          sound: string;
        }>;
      }>;
    };
  }[];
};
