interface SectionHeading {
  type: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  title: string[];
  content?: {
    level?: number;
    subtitle?: string[];
  };
}

export interface LessonHeadingSchema {
  title: string[];
  slug?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  sections: SectionHeading[];
}
