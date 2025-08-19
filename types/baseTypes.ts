export interface BaseProps extends CommonProps, CommonContent {}

type JsonValue =
  | string
  | string[]
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export interface TitleObject {
  ru?: string;
  mkd?: string;
}
export interface CommonProps {
  type?: string;
  slug?: string;
  category?: string;
  title?: JsonValue | TitleObject;
  subtitle?: string | string[];
}

export interface CommonContent {
  subtitle?: string | string[];
  text?: string;
  words?: CommonWords[];
}

export interface CommonWords {
  land?: string;
  nationality?: string;
  adjective?: string;
  masculine?: string;
  feminine?: string;
  neuter?: string;
  plural?: string;
}
