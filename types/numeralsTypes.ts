export interface NumeralsTableBlock {
  type: string;
  slug?: string;
  category?: string;
  title?: string;
  subtitle?: string;
  content: NumeralsContent;

  data?: Partial<NumeralsTableBlock>;
}

export interface NumeralsContent {
  subtitle?: string[];
  words: NumeralsWords[];
}

export interface NumeralsWords {
  numbers: number;
  cardinal: string;
  ordinal: string;
}
