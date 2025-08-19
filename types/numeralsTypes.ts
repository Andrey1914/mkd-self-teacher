import { BaseProps, CommonContent } from "@/types/baseTypes";

export interface NumeralsTableBlock extends BaseProps {
  type: string;
  // slug?: string;
  // category?: string;
  // title?: string;
  // subtitle?: string;
  content: CommonContent;
  // content: NumeralsContent;

  data?: Partial<NumeralsTableBlock>;
}

// export interface NumeralsContent {
//   subtitle?: string[];
//   words: NumeralsWords[];
// }

// export interface NumeralsWords {
//   numbers: number;
//   cardinal: string;
//   ordinal: string;
// }
