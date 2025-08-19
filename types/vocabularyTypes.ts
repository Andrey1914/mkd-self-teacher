import { BaseProps, CommonContent } from "@/types/baseTypes";

export interface VocabularyProps {
  lesson: VocabularyData;
}

export interface VocabularyData extends BaseProps {
  // type: string;
  title?: {
    ru?: string;
    mkd?: string;
  };
  // slug: string;
  sections: {
    type?: string;
    content: CommonContent;
    // content?: {
    //   subtitle: string[];
    //   words: VocabularyWord[];
    // };
  }[];
}

// export interface VocabularyWord {
//   mkd?: string;
//   pron: string;
//   ru: string;
// }
