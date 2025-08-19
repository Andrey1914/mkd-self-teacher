import { BaseProps, CommonContent } from "@/types";

export interface GlossaryTableBlock extends BaseProps {
  type: string;
  title?: {
    ru?: string;
    mkd?: string;
  };
  content: CommonContent;

  data?: Partial<GlossaryTableBlock>;
}
