export interface GrammarRow {
  persone: string;
  singular: string;
  plural: string;
}

export interface GrammarContent {
  subtitle?: string[];
  words: GrammarRow[];
}

export interface GrammarTableProps {
  type: string;
  category?: string;
  title?: string[];
  subtitle?: string[];
  text?: string[];
  content: GrammarContent;

  data?: Partial<GrammarTableProps>;
}
