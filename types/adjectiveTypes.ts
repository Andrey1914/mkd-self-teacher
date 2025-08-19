import { BaseProps, CommonContent } from "@/types";
export interface AdjectivesTableBlock extends BaseProps {
  type: string;
  // slug?: string;
  // category?: string;
  // title?: string;
  // subtitle?: string;
  // content: AdjectiveContent;
  content: CommonContent;

  data?: Partial<AdjectivesTableBlock>;
}

// export interface AdjectiveContent {
//   // subtitle: string[];
//   // words: AdjectiveWords[];
//   words: CommonContent[];
// }

// export interface AdjectiveWords {
//   masculine: string;
//   feminine: string;
//   neuter: string;
//   plural: string;
// }
