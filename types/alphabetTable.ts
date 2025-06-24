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

// types/lesson.ts

// export type TableRow = {
//   letter: string;
//   sound: string;
// };

// export type TableEntryInput = {
//   title: string;
//   rows: TableRow[];
// };

// export type SectionBase = {
//   type: string;
//   title: string[];
//   //   content: any;
// };

// export type SectionWithTableEntries = SectionBase & {
//   tableEntries?: {
//     create: TableEntryInput[];
//   };
// };

// export type LessonInput = {
//   slug: string;
//   title: string[];
//   sections: SectionWithTableEntries[];
// };
