import { BaseProps, CommonContent } from "@/types";

export interface GlossaryTableBlock extends BaseProps {
  type: string;
  // slug?: string;
  // category?: string;
  title?: {
    ru?: string;
    mkd?: string;
  };
  // subtitle?: string;
  // content: GlossaryContent;
  content: CommonContent;

  data?: Partial<GlossaryTableBlock>;
}

// export interface GlossaryContent {
//   subtitle?: string[];
//   words: GlossaryWords[];
// }

// export interface GlossaryWords {
//   mkd: string;
//   ru: string;
// }
