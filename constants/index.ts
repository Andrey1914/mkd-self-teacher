import { NAMES } from "@/constants";
export { NAMES } from "./names";
export {
  CYRILLIC_TO_LATIN_MAP,
  LATIN_TO_CYRILLIC_DIGRAPHS,
  LATIN_TO_CYRILLIC_MAP,
} from "./transliteration";

export const MACEDONIAN_PRONOUNS = ["Jас", "Ти", "Ние", "Вие", "Тие"];

export const TABLE_HEADER_LABELS = ["Буква", "Звук", "Буква", "Звук"] as const;

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

export const EMPTY_CELL = "\u00A0";
export const MERGE_V = "MERGE_V";
export const MERGE_H = "MERGE_H";
export const ETC = "и т.д.";

export const DRAG_MARKER_REGEX = /\*\*([\s\S]*?)\*\*/g;

const nameToRegex = (name: string): string => {
  return name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\\\*/g, "\\*?");
};

export const ALL_NAMES_REGEX = new RegExp(
  NAMES.map(nameToRegex).join("|"),
  "g",
);
