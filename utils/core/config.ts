/**
 * Central configuration for all utilities
 * Contains constants, mappings and settings
 */

// Mappings for converting between Cyrillic and Latin
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

export type NormalizeOptions = Partial<typeof DEFAULT_NORMALIZE_OPTIONS>;
/**
 * Universal utilities for working with text
 * Combine normalization, formatting, and validation
 */

import parse from "html-react-parser";

/**
 * Universal text normalization function
 * Combines the functionality of normalizeAnswer and normalizeText
 */
export const normalizeText = (
  input: string,
  options: NormalizeOptions = {}
): string => {
  const config = { ...DEFAULT_NORMALIZE_OPTIONS, ...options };

  if (!input) return "";

  let result = input;

  // Removing HTML tags
  if (config.removeHtmlTags) {
    result = result.replace(TEXT_PATTERNS.HTML_TAGS, "");
  }

  // Removing accents
  if (config.removeAccents) {
    result = result.replace(TEXT_PATTERNS.ACCENT_MARKS, "");
  }

  // Space compression
  if (config.collapseSpaces) {
    result = result.replace(TEXT_PATTERNS.MULTIPLE_SPACES, " ");
  }

  // Convert to lowercase
  if (config.lowercase) {
    result = result.toLowerCase();
  }

  // Trimming spaces
  if (config.trim) {
    result = result.trim();
  }

  // Converting Latin to Cyrillic
  if (config.convertLatinToCyrillic) {
    // First, digraphs (double symbols)
    Object.entries(LATIN_TO_CYRILLIC_DIGRAPHS).forEach(([latin, cyr]) => {
      result = result.replaceAll(latin, cyr);
    });

    // Then single characters
    result = result
      .split("")
      .map((char) => LATIN_TO_CYRILLIC_MAP[char] ?? char)
      .join("");
  }

  // Converting Cyrillic to Latin
  if (config.convertCyrillicToLatin) {
    result = result
      .split("")
      .map((char) => CYRILLIC_TO_LATIN_MAP[char] ?? char)
      .join("");
  }

  return result;
};

/**
 * Removes punctuation from the beginning and end of a line.
 */
export const stripPunctuation = (text: string): string => {
  if (!text) return "";
  return text.replace(TEXT_PATTERNS.PUNCTUATION, "");
};

/**
 * Universal text formatting function with HTML markup
 */
export const formatText = (
  text: string | undefined,
  options: {
    keepEmptyLines?: boolean;
    processAccents?: boolean;
  } = {}
) => {
  if (!text) return null;

  const { keepEmptyLines = false, processAccents = true } = options;

  let processed = text;

  // Accent processing
  if (processAccents) {
    processed = processed.replace(
      /([а-яёa-z])\*/gi,
      TEXT_FORMAT_CONFIG.ACCENT_REPLACEMENT
    );
  }

  // Markup processing
  processed = processed
    .replace(
      TEXT_FORMAT_CONFIG.SPECIAL_ITALIC_PATTERN,
      (_, inner) => `<em>[[${inner}]]</em>`
    )
    .replace(
      TEXT_FORMAT_CONFIG.ITALIC_PATTERN,
      (_, inner) => `<em>${inner}</em>`
    )
    .replace(
      TEXT_FORMAT_CONFIG.BOLD_PATTERN,
      (_, inner) => `<strong>${inner}</strong>`
    );

  if (keepEmptyLines) {
    return parse(
      processed
        .split(/\s*\/\s*/)
        .map((p) => `<p>${p.trim()}</p>`)
        .join("")
    );
  }

  return parse(processed);
};

/**
 * Gets the width of the text to measure
 */
export const getTextWidth = (text: string, font = "16px Arial"): number => {
  if (typeof document === "undefined") return 60; // SSR fallback

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return 60;

  ctx.font = font;
  return ctx.measureText(text).width + 12;
};

/**
 * Universal function for clearing the response array
 */
export const cleanAnswers = (
  answers: string[] | undefined,
  options: NormalizeOptions = {}
): string[] | undefined => {
  if (!answers) return undefined;

  const normalizeOptions = {
    trim: true,
    convertLatinToCyrillic: false,
    lowercase: false,
    collapseSpaces: true,
    ...options,
  };

  return answers.map((answer) =>
    normalizeText(
      answer.replace(TEXT_PATTERNS.MULTIPLE_SPACES, " "),
      normalizeOptions
    )
  );
};

/**
 * Парсинг строки ответов в массив массивов
 * Пример: "word1/word2 word3" -> [["word1", "word2"], ["word3"]]
 */
export const parseAnswerWords = (text: string): string[][] => {
  return normalizeText(text, {
    trim: true,
    lowercase: true,
    convertLatinToCyrillic: true,
  })
    .split(/\s+/)
    .map((word) => word.split("/"));
};

/**
 * Проверяет, является ли часть текста словом
 */
export const isWord = (text: string): boolean => {
  return TEXT_PATTERNS.WHITESPACE.test(text);
};
/**
 * Универсальные утилиты для работы с массивами и состояниями
 * Упрощают создание и инициализацию массивов для упражнений
 */

/**
 * Создает массив заданной длины, заполненный указанным значением
 */
export const createFilledArray = <T>(length: number, fillValue: T): T[] => {
  return new Array(length).fill(fillValue);
};

/**
 * Создает двумерный массив с заданными размерами
 */
export const create2DArray = <T>(
  rows: number,
  cols: number,
  fillValue: T
): T[][] => {
  return Array.from({ length: rows }, () => createFilledArray(cols, fillValue));
};

/**
 * Инициализирует состояние для упражнений с заполнением пробелов
 */
export const initializeFillInState = <T>(
  sentences: Array<{ answer?: string[] }> | undefined,
  fillValue: T
) => {
  if (!sentences) return [];

  return sentences.map((sentence) =>
    createFilledArray(sentence.answer?.length || 0, fillValue)
  );
};

/**
 * Создает массивы правильных ответов для упражнений
 */
export const getCorrectAnswers = (
  sentences: Array<{ answer?: string[] }> | undefined
) => {
  if (!sentences) return { correctInputs: [], correctFlags: [] };

  const correctInputs = sentences.map((sentence) => [
    ...(sentence.answer ?? []),
  ]);
  const correctFlags = sentences.map((sentence) =>
    createFilledArray(sentence.answer?.length || 0, true)
  );

  return { correctInputs, correctFlags };
};

/**
 * Безопасное получение элемента массива по индексу
 */
export const safeArrayAccess = <T>(
  array: T[] | undefined,
  index: number,
  fallback: T
): T => {
  return array?.[index] ?? fallback;
};

/**
 * Клонирует двумерный массив
 */
export const clone2DArray = <T>(array: T[][]): T[][] => {
  return array.map((row) => [...row]);
};

/**
 * Проверяет, все ли элементы в массиве соответствуют условию
 */
export const allMatch = <T>(
  array: T[],
  predicate: (item: T) => boolean
): boolean => {
  return array.every(predicate);
};

/**
 * Группирует массив по заданному ключу
 */
export const groupBy = <T, K extends string | number>(
  array: T[],
  keyFn: (item: T) => K
): Record<K, T[]> => {
  return array.reduce((groups, item) => {
    const key = keyFn(item);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {} as Record<K, T[]>);
};

/**
 * Фильтрует массив с проверкой типа
 */
export const filterWithType = <T, U extends T>(
  array: T[],
  predicate: (item: T) => item is U
): U[] => {
  return array.filter(predicate);
};

/**
 * Сравнивает два текста с нормализацией
 */
export const compareTexts = (
  input: string,
  correct: string,
  options: NormalizeOptions = {}
): boolean => {
  const defaultOptions = {
    convertLatinToCyrillic: true,
  };

  const normalizedInput = normalizeText(input, {
    ...defaultOptions,
    ...options,
  });
  const normalizedCorrect = normalizeText(correct, {
    ...defaultOptions,
    ...options,
  });

  return normalizedInput === normalizedCorrect;
};

/**
 * Получает стиль выделения для поля ввода на основе корректности
 */
export const getHighlightStyle = (
  input: string,
  correct: string,
  show: boolean,
  options: NormalizeOptions = {}
) => {
  if (!show || input === "") return {};

  const isCorrect = compareTexts(input, correct, options);

  return {
    boxShadow: isCorrect
      ? HIGHLIGHT_STYLES.CORRECT
      : HIGHLIGHT_STYLES.INCORRECT,
  };
};

/**
 * Генерирует HTML строку с выделенными неправильными словами
 */
export const generateHighlightedText = (
  userInput: string,
  correctOptions: string[][],
  options: NormalizeOptions = {}
): string => {
  const rawWords = userInput.trim().split(/\s+/);

  return rawWords
    .map((originalWord, idx) => {
      const normalized = normalizeText(originalWord, {
        trim: true,
        lowercase: true,
        convertLatinToCyrillic: true,
        ...options,
      });

      const isCorrect = correctOptions[idx]?.includes(normalized);

      if (!isCorrect) {
        return `<span style="color: ${HIGHLIGHT_STYLES.INCORRECT_COLOR}">${originalWord}</span>`;
      }
      return originalWord;
    })
    .join(" ");
};

/**
 * Проверяет, является ли строка пустой или содержит только пробелы
 */
export const isEmptyOrWhitespace = (text: string | undefined): boolean => {
  return !text || text.trim().length === 0;
};

/**
 * Валидирует массив ответов
 */
export const validateAnswers = (
  answers: string[] | undefined,
  requiredLength?: number
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!answers) {
    errors.push("Answers array is required");
    return { isValid: false, errors };
  }

  if (requiredLength && answers.length !== requiredLength) {
    errors.push(`Expected ${requiredLength} answers, got ${answers.length}`);
  }

  const emptyAnswers = answers
    .map((answer, index) => ({ answer, index }))
    .filter(({ answer }) => isEmptyOrWhitespace(answer));

  if (emptyAnswers.length > 0) {
    errors.push(
      `Empty answers at positions: ${emptyAnswers
        .map(({ index }) => index)
        .join(", ")}`
    );
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Проверяет, содержит ли текст определенный паттерн
 */
export const matchesPattern = (text: string, pattern: RegExp): boolean => {
  return pattern.test(text);
};
