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
  content: ExampleContent;
}
