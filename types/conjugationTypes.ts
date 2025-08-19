import { CommonWords } from "@/types";

export interface ConjugationContent {
  words: CommonWords[];
}

export interface ConjugationTableSection {
  type: string;
  slug?: string;
  category?: string;
  title?: string | string[];
  table?: true;
  subtitle?: string[];
  text?: string;
  content: ConjugationContent;

  data?: Partial<ConjugationTableSection>;
}
