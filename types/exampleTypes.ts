import { BaseProps, CommonWords } from "@/types";

export interface ExampleContent {
  subtitle?: string;
  text?: string;
  words: CommonWords[];
}

export interface ExampleSection extends BaseProps {
  content: ExampleContent;
}
