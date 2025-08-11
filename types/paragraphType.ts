export interface ParagraphSectionsProps {
  type: string;
  title?: string | string[];
  subtitle?: string | string[];
  content?: ContentType;
}

export interface ContentType {
  [key: string]: string | string[] | ContentType | IntroType | undefined;
  subtitle?: string | string[];
  text?: string | string[];
  intro?: IntroType;
}

export interface IntroType {
  [key: string]: string | string[] | undefined;
  subtitle?: string | string[];
  intro?: string;
  text?: string;
}
