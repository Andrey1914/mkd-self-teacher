export const MACEDONIAN_PRONOUNS = ["Jас", "Ти", "Ние", "Вие", "Тие"];

export const CYRILLIC_TO_LATIN_MAP: Record<string, string> = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  ѓ: "gj",
  е: "e",
  ж: "zh",
  з: "z",
  ѕ: "dz",
  и: "i",
  ј: "j",
  к: "k",
  л: "l",
  љ: "lj",
  м: "m",
  н: "n",
  њ: "nj",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  ќ: "kj",
  у: "u",
  ф: "f",
  х: "h",
  ц: "c",
  ч: "ch",
  џ: "dj",
  ш: "sh",
};

export const LATIN_TO_CYRILLIC_DIGRAPHS: Record<string, string> = {
  zh: "ж",
  ch: "ч",
  sh: "ш",
  gj: "ѓ",
  kj: "ќ",
  dz: "ѕ",
  lj: "љ",
  nj: "њ",
  dj: "џ",
};

export const LATIN_TO_CYRILLIC_MAP: Record<string, string> = {
  j: "ј",
  a: "а",
  e: "е",
  o: "о",
  s: "с",
  p: "п",
  y: "у",
  k: "к",
  x: "х",
  v: "в",
  m: "м",
  h: "н",
  d: "д",
  t: "т",
  z: "з",
  l: "л",
  r: "р",
  c: "ц",
  g: "г",
  n: "н",
  u: "у",
  i: "и",
  f: "ф",
};

// Regular expressions for text cleaning
export const TEXT_PATTERNS = {
  HTML_TAGS: /<[^>]*>/g,
  ACCENT_MARKS: /\u0301/g,
  MULTIPLE_SPACES: /\s+/g,
  PUNCTUATION: /^[^0-9A-Za-z\u0400-\u04FF]+|[^0-9A-Za-z\u0400-\u04FF]+$/g,
  WORD_BOUNDARY: /(\s+)/,
  WHITESPACE: /\S/,
} as const;

// Highlighting styles
export const HIGHLIGHT_STYLES = {
  CORRECT: "0 0 8px 3px #00c150",
  INCORRECT: "0 0 8px 3px #ffa347",
  INCORRECT_COLOR: "#ffa347",
} as const;

// Text formatting settings
export const TEXT_FORMAT_CONFIG = {
  ACCENT_REPLACEMENT: "$1\u0301",
  BOLD_PATTERN: /«(.*?)»/g,
  ITALIC_PATTERN: /\[([^\]]+)\]/g,
  SPECIAL_ITALIC_PATTERN: /\[\[([^\]]+)\]\]/g,
} as const;

// Default settings for normalization
export const DEFAULT_NORMALIZE_OPTIONS = {
  trim: true,
  lowercase: true,
  convertLatinToCyrillic: true,
  convertCyrillicToLatin: false,
  removeHtmlTags: false,
  removeAccents: false,
  collapseSpaces: false,
};
