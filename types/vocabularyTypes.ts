import { BaseProps, CommonContent } from "@/types/baseTypes";

export interface VocabularyProps {
  lesson: VocabularyData;
}

export interface VocabularyData extends BaseProps {
  title?: {
    ru?: string;
    mkd?: string;
  };
  sections: {
    type?: string;
    content: CommonContent;
  }[];
}
