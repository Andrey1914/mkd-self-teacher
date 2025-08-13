export interface OccupationTableBlock {
  type: string;
  slug?: string;
  category?: string;
  title?: {
    ru?: string;
    mkd?: string;
  };
  content: OccupationContent;

  data?: Partial<OccupationTableBlock>;
}

export interface OccupationContent {
  subtitle?: string[];
  words: OccupationWords[];
}

export interface OccupationWords {
  mkd: string;
  ru: string;
}
