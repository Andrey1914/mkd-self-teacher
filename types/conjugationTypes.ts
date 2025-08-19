import { CommonWords } from "@/types";
// export interface ConjugationSimpleRow {
//   person: string;
//   forms: string[];
// }

// export interface ConjugationPairRow {
//   singularPerson: string;
//   singularForm: string | string[];
//   pluralPerson: string;
//   pluralForm: string | string[];
// }

// export type ConjugationRow = ConjugationSimpleRow | ConjugationPairRow;

export interface ConjugationContent {
  // words: ConjugationRow[];
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
