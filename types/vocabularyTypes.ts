export interface VocabularyProps {
  lesson: VocabularyData;
}

export interface VocabularyData {
  title?: {
    ru?: string;
    mkd?: string;
  };
  slug: string;
  sections: {
    type?: string;
    content?: {
      subtitle: string[];
      words: VocabularyWord[];
    };
  }[];
  // sections: VocabularySection[];
}

// export interface VocabularySection {
//   type: string;
//   content?: {
//     subtitle: string[];
//     words: VocabularyWord[];
//   };
// }

export interface VocabularyWord {
  mkd?: string;
  pron: string;
  ru: string;
}
