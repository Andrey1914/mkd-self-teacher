export interface ExampleRow {
  mkd: string;
  ru: string;
}

export interface ExampleContent {
  text?: string;
  words: ExampleRow[];
}

export interface ExampleSection {
  type: string;
  slug?: string;
  subtitle?: string;
  content: ExampleContent;
}
