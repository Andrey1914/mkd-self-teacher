import { BaseProps, CommonContent } from "@/types";

export interface PayAttentionSection extends BaseProps {
  // type: string;
  // slug: string;
  title: string;
  content: CommonContent;
  // content: {
  //   text: string;
  // };
}

export type PayAttentionBlockProps = {
  sections: PayAttentionSection[];
};
