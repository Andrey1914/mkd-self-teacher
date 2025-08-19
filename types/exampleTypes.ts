import { BaseProps, CommonWords } from "@/types";
// export interface ExampleRow {
//   mkd: string;
//   ru: string;
// }

export interface ExampleContent {
  subtitle?: string;
  text?: string;
  // words: ExampleRow[];
  words: CommonWords[];
}

export interface ExampleSection extends BaseProps {
  // type: string;
  // slug?: string;
  // subtitle?: string;
  content: ExampleContent;
  // content: CommonContent;
}
