type TableEntry = {
  title: string;
  rows: string[][];
};

export type SectionWithTables = {
  tableEntries?: {
    create: TableEntry[];
  };
};
