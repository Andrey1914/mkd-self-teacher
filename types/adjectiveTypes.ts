export interface AdjectivesTableBlock {
  type: string;
  slug?: string;
  category?: string;
  title?: string;
  subtitle?: string;
  content: AdjectiveContent;

  data?: Partial<AdjectivesTableBlock>;
}

export interface AdjectiveContent {
  subtitle: string[];
  words: AdjectiveWords[];
}

export interface AdjectiveWords {
  masculine: string;
  feminine: string;
  neuter: string;
  plural: string;
}
