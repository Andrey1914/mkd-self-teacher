import { BaseProps, CommonContent } from "@/types";

export interface PayAttentionSection extends BaseProps {
  title: string;
  content: CommonContent;
}

export type PayAttentionBlockProps = {
  sections: PayAttentionSection[];
};
