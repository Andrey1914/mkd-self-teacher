export interface TablesProps {
  slug?: string;
  type: string;
  title?: string[] | string | { ru?: string; mkd?: string };
  text?: string;
  subtitle?: string[] | string;
  content: TablesContent;

  data?: Partial<TablesProps>;
}

export interface TablesContent {
  subtitle?: string[] | string;
  text?: string;
  dativeHeader?: string;
  accusativeHeader?: string;
  columns?: string[];
  words?: TablesWords[];
  rows?: TablesRows[];
}

export interface TablesWords {
  // gender-number-pronominal-of-adjectives, grammar-pronouns
  masculine?: string;
  feminine?: string;
  neuter?: string;
  plural?: string;
  // a-class
  singularPerson?: string;
  singularForm?: string;
  pluralPerson?: string;
  pluralForm?: string;
  // e-class, grammar-pronouns
  person?: string;
  forms?: string[];
  // examples
  mkd?: string;
  ru?: string;
  // grammar-pronouns
  singular?: string;
  // cardinal-ordinal-numerals
  numbers?: number;
  cardinal?: string;
  ordinal?: string;
  // countries-nationalities
  land?: string;
  nationality?: string;
  adjective?: string;
}

export interface TablesRows {
  // personal-pronouns
  pronoun?: string;
  dativeShort?: string;
  dativeFull?: string;
  accusativeShort?: string;
  accusativeFull?: string;
}
