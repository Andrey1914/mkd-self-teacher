export interface AdjectivesData {
  slug?: string;
  sections: AdjectiveSection[];
}

export interface AdjectiveSection {
  type?: string;
  content: {
    subtitle: string[];
    words: AdjectivesWords[];
  };
}

export interface AdjectivesWords {
  masculine: string;
  feminine: string;
  neuter: string;
  plural: string;
}
