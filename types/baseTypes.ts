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
  rows?: CommonRows[];
  dativeHeader?: string; // dative case
  accusativeHeader?: string; // accusative case
  columns?: string[]; // Заголовки подформ
}

export interface CommonRows {
  pronoun?: string;
  dativeShort?: string;
  dativeFull?: string;
  accusativeShort?: string;
  accusativeFull?: string;
}

// Страны и национальности
export interface CountryProps {
  land?: string;
  nationality?: string;
  adjective?: string;
}

// Род (для прилагательных, местоимений)
export interface GenderProps {
  masculine?: string;
  feminine?: string;
  neuter: string;
  plural?: string;
}

// Лицо (для глаголов и местоимений)
export interface PersonProps {
  person?: string;
  singular?: string;
  forms?: string[];
  singularPerson?: string;
  singularForm?: string | string[];
  pluralPerson?: string;
  pluralForm?: string | string[];
}

// Переводы
export interface TranslationProps {
  mkd?: string;
  ru?: string;
  pron?: string;
  original?: string;
  answer?: string[];
}

// Числа
export interface NumberProps {
  numbers?: number;
  cardinal?: string;
  ordinal?: string;
}

export type CommonWords = Partial<
  CountryProps & GenderProps & PersonProps & TranslationProps & NumberProps
>;
