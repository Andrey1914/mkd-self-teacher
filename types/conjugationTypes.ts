export interface ConjugationSimpleRow {
  person: string;
  forms: string[];
}

export interface ConjugationPairRow {
  singularPerson: string;
  singularForm: string | string[];
  pluralPerson: string;
  pluralForm: string | string[];
}

export type ConjugationRow = ConjugationSimpleRow | ConjugationPairRow;

export interface ConjugationContent {
  words: ConjugationRow[];
}

export interface ConjugationTableSection {
  type: string;
  table?: true;
  subtitle?: string[];
  text?: string[];
  content: ConjugationContent;
}
