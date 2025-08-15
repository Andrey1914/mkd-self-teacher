export interface GlossaryTableBlock {
  type: string;
  slug?: string;
  category?: string;
  title?: {
    ru?: string;
    mkd?: string;
  };
  content: GlossaryContent;

  data?: Partial<GlossaryTableBlock>;
}

export interface GlossaryContent {
  subtitle?: string[];
  words: GlossaryWords[];
}

export interface GlossaryWords {
  mkd: string;
  ru: string;
}
