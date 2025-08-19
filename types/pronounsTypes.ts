import { CommonContent } from "@/types";

export interface PronounTableProps {
  type: string;
  slug: string;
  title?: string | string[];
  subtitle?: string[];
  text?: string[];
  content: CommonContent;

  data?: Partial<PronounTableProps>;
}
