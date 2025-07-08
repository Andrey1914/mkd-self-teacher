export interface ParagraphSectionsProps {
  type: string;
  title?: string | string[];
  subtitle?: string | string[];
  content?: ContentType;
}

export interface ContentType {
  subtitle?: string | string[];
  text?: string | string[];
  intro?: IntroType;
}

export interface IntroType {
  subtitle?: string | string[];
  intro?: string;
  text?: string;
}
