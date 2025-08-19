import { BaseProps, CommonContent } from "@/types/baseTypes";

export interface GrammarTableProps extends BaseProps {
  type: string;
  title?: string[];
  content: CommonContent;

  data?: Partial<GrammarTableProps>;
}
