import { BaseProps, CommonContent } from "@/types";
export interface AdjectivesTableBlock extends BaseProps {
  type: string;
  content: CommonContent;

  data?: Partial<AdjectivesTableBlock>;
}
