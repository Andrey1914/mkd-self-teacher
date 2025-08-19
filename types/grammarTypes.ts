import { BaseProps, CommonContent } from "@/types/baseTypes";

// export interface GrammarRow {
//   person: string;
//   singular: string;
//   plural: string;
// }

// export interface GrammarContent {
//   subtitle?: string[];
//   words: GrammarRow[];
// }

export interface GrammarTableProps extends BaseProps {
  type: string;
  // category?: string;
  title?: string[];
  // subtitle?: string[];
  // text?: string[];
  // content: GrammarContent;
  content: CommonContent;

  data?: Partial<GrammarTableProps>;
}
