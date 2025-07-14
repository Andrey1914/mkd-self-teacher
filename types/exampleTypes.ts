export interface ExampleRow {
  mkd: string;
  ru: string;
}

export interface ExampleContent {
  words: ExampleRow[];
}

export interface ExampleSection {
  type: string;
  content: ExampleContent;
}
