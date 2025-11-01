import {
  CYRILLIC_TO_LATIN_MAP,
  LATIN_TO_CYRILLIC_DIGRAPHS,
  LATIN_TO_CYRILLIC_MAP,
  TEXT_PATTERNS,
  HIGHLIGHT_STYLES,
  TEXT_FORMAT_CONFIG,
  DEFAULT_NORMALIZE_OPTIONS,
} from "@/constants";
/**
 * Central configuration for all utilities
 * Contains constants, mappings and settings
 */

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

  result = result.normalize("NFC");

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
 * Parsing a response string into an array of arrays
 * Example: "word1/word2 word3" -> [["word1", "word2"], ["word3"]]
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
 * Parses a response string containing options separated by '/' and optional parts in '()',
 * into an array of all possible complete response options.
 * Each option is an array of "word groups" (a word or several words separated by /).
 * Parentheses () are preserved.
 * @param text Response line.
 * @returns Array of arrays of arrays of strings `string[][][]`.
 * Outer array - all sentence variations.
 * Middle array - words/word groups in a sentence.
 * Inner array - alternatives for a single word/word group (separated by /).
 * Example: "word1a/word1b (opt) word2" -> [[["word1a","word1b"], ["(opt)"], ["word2"]]]
 * (In this case, there is only one complete variant, but the structure is ready for combinations)
 * Example 2: "word1a/word1b word2a/word2b" ->
 * [[["word1a"], ["word2a"]], [["word1a"], ["word2b"]],
 * [["word1b"], ["word2a"]], [["word1b"], ["word2b"]]]
 * Although code is not currently needed to generate combinations (Example 2),
 * we will return a simple structure for now, sufficient for the current task.
 */
export const parseComplexAnswerString = (text: string): string[][][] => {
  if (!text) return [];

  // We split into "word groups", preserving spaces around brackets, if any
  const wordGroups = text.match(/\S+\/\S+|\([^)]+\)|\S+/g) || [];

  // For each group, we split by '/', keeping the brackets
  const alternativesPerGroup: string[][] = wordGroups.map((group) => {
    // Do not separate '/' if it is part of an optional block
    if (group.startsWith("(") && group.endsWith(")")) {
      return [group];
    }
    return group.split("/");
  });

  // --- Generating combinations (not yet required for your task, but here's how it could be done) ---
  // Currently, since you're only using "/" *within* a single word/phrase,
  // and not between different words, we don't need to generate combinations.
  // We simply return a structure where each "word-group" has its alternatives.
  // This will be an array with one element - an array of alternatives for each group.
  return [alternativesPerGroup];

  // If combinations were needed (for example, "иди/одона дома/куќи"):
  /*
  let results: string[][][] = [[]];
  for (const alternatives of alternativesPerGroup) {
      const newResults: string[][][] = [];
      for (const result of results) {
          for (const alternative of alternatives) {
              newResults.push([...result, [alternative]]); // Store as string[] for consistency
          }
      }
      results = newResults;
  }
  // This would return [[["иди"], ["дома"]], [["иди"], ["куќи"]], [["оди"], ["дома"]], [["оди"], ["куќи"]]]
  // But for now, the simple structure above is sufficient.
  */
};

/**
 * Checks if a piece of text is a word
 */
export const isWord = (text: string): boolean => {
  return TEXT_PATTERNS.WHITESPACE.test(text);
};
/**
 * Universal utilities for working with arrays and states
 * Simplify the creation and initialization of arrays for exercises
 */

/**
 * Creates an array of the specified length filled with the specified value.
 */
export const createFilledArray = <T>(length: number, fillValue: T): T[] => {
  return new Array(length).fill(fillValue);
};

/**
 * Creates a two-dimensional array with the given dimensions.
 */
export const create2DArray = <T>(
  rows: number,
  cols: number,
  fillValue: T
): T[][] => {
  return Array.from({ length: rows }, () => createFilledArray(cols, fillValue));
};

/**
 * Initializes the state for gap-filling exercises
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
 * Creates arrays of correct answers for exercises
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
 * Safely getting an array element by index
 */
export const safeArrayAccess = <T>(
  array: T[] | undefined,
  index: number,
  fallback: T
): T => {
  return array?.[index] ?? fallback;
};

/**
 * Clones a two-dimensional array
 */
export const clone2DArray = <T>(array: T[][]): T[][] => {
  return array.map((row) => [...row]);
};

/**
 * Checks if all elements in an array match a condition.
 */
export const allMatch = <T>(
  array: T[],
  predicate: (item: T) => boolean
): boolean => {
  return array.every(predicate);
};

/**
 * Groups an array by a given key.
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
 * Filters an array with type checking
 */
export const filterWithType = <T, U extends T>(
  array: T[],
  predicate: (item: T) => item is U
): U[] => {
  return array.filter(predicate);
};

/**
 * Compares two texts with normalization
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
 * Gets the highlight style for the input field based on validity
 *
 * */

export const getHighlightStyle = (
  userInput: string,
  correctAnswerString: string,
  options: NormalizeOptions = {}
): boolean => {
  const userWords = userInput.trim().split(/\s+/).filter(Boolean);

  const correctWordGroups =
    correctAnswerString.match(/\*\*.*?\*\*|\([^)]+\)|\S+/g) || [];

  let userIdx = 0;
  let correctIdx = 0;

  while (userIdx < userWords.length && correctIdx < correctWordGroups.length) {
    const normalizedUserWord = normalizeText(userWords[userIdx], {
      trim: true,
      lowercase: true,
      ...options,
    });

    const currentCorrectGroup = correctWordGroups[correctIdx];
    const isOptional =
      currentCorrectGroup.startsWith("(") && currentCorrectGroup.endsWith(")");
    const isAlternative =
      currentCorrectGroup.startsWith("**") &&
      currentCorrectGroup.endsWith("**");

    let cleanCorrectOptions: string[] = [];
    if (isOptional) {
      cleanCorrectOptions = [
        normalizeText(currentCorrectGroup.replace(/^\(|\)$/g, ""), {
          trim: true,
          lowercase: true,
          ...options,
        }),
      ];
    } else if (isAlternative) {
      cleanCorrectOptions = currentCorrectGroup
        .replace(/^\*\*|\*\*$/g, "")
        .split(/\s*\/\s*/)
        .map((opt) =>
          normalizeText(opt, { trim: true, lowercase: true, ...options })
        );
    } else {
      cleanCorrectOptions = [
        normalizeText(currentCorrectGroup, {
          trim: true,
          lowercase: true,
          ...options,
        }),
      ];
    }

    let matched = false;

    if (isAlternative) {
      for (const alt of cleanCorrectOptions) {
        const altWords = alt.split(/\s+/);
        const userSliceWords = userWords.slice(
          userIdx,
          userIdx + altWords.length
        );
        const userSliceStr = normalizeText(userSliceWords.join(" "), {
          trim: true,
          lowercase: true,
          ...options,
        });
        const altNorm = normalizeText(alt, {
          trim: true,
          lowercase: true,
          ...options,
        });

        // console.log("Проверяем варианты:");
        // console.log("То, что ввел пользователь:", userSliceWords.join(" "));
        // console.log("Нормализованный ввод пользователя:", userSliceStr);
        // console.log("Альтернативный вариант:", alt);
        // console.log("Нормализованный вариант:", altNorm);

        if (userSliceStr === altNorm) {
          userIdx += altWords.length;
          correctIdx++;
          matched = true;
          break;
        }
      }
    } else {
      if (cleanCorrectOptions.includes(normalizedUserWord)) {
        userIdx++;
        correctIdx++;
        matched = true;
      }
    }

    if (matched) continue;

    if (isOptional) {
      correctIdx++;
      continue;
    }

    return false;
  }

  if (userIdx < userWords.length) {
    return false;
  }

  while (correctIdx < correctWordGroups.length) {
    const currentCorrectGroup = correctWordGroups[correctIdx];
    const isOptional =
      currentCorrectGroup.startsWith("(") && currentCorrectGroup.endsWith(")");
    const isAlternative =
      currentCorrectGroup.startsWith("**") &&
      currentCorrectGroup.endsWith("**");

    if (!isOptional && !isAlternative) {
      return false;
    }
    if (isAlternative) {
      return false;
    }
    correctIdx++;
  }

  return true;
};

export const generateHighlightedText = (
  userInput: string,
  correctAnswerString: string,
  options: NormalizeOptions = {}
): string => {
  const userWords = userInput.trim().split(/\s+/).filter(Boolean);
  const resultHtml: string[] = [];

  // REGEX: Finds groups of variants (**...**), optionals (...), and regular words
  const correctWordGroups =
    correctAnswerString.match(/\*\*.*?\*\*|\([^)]+\)|\S+/g) || [];

  let userIdx = 0;
  let correctIdx = 0;

  while (userIdx < userWords.length) {
    const currentUserWord = userWords[userIdx];
    const normalizedUserWord = normalizeText(currentUserWord, {
      trim: true,
      lowercase: true,
      convertLatinToCyrillic: true,
      ...options,
    });

    if (correctIdx >= correctWordGroups.length) {
      resultHtml.push(
        `<span style="color: ${HIGHLIGHT_STYLES.INCORRECT_COLOR}; font-weight: 500;">${currentUserWord}</span>`
      );
      userIdx++;
      continue;
    }

    const currentCorrectGroup = correctWordGroups[correctIdx];
    const isOptional =
      currentCorrectGroup.startsWith("(") && currentCorrectGroup.endsWith(")");
    const isAlternative =
      currentCorrectGroup.startsWith("**") &&
      currentCorrectGroup.endsWith("**");

    let cleanCorrectOptions: string[] = [];

    if (isOptional) {
      // "(се)" -> ["се"]
      cleanCorrectOptions = [
        normalizeText(currentCorrectGroup.replace(/^\(|\)$/g, ""), {
          trim: true,
          lowercase: true,
          ...options,
        }),
      ];
    } else if (isAlternative) {
      // "**некому / на некого**" -> ["некому", "на некого"]

      cleanCorrectOptions = currentCorrectGroup
        .replace(/^\*\*|\*\*$/g, "")
        .split(/\s*\/\s*/)
        .map((opt) =>
          normalizeText(opt, { trim: true, lowercase: true, ...options })
        );
    } else {
      cleanCorrectOptions = [
        normalizeText(currentCorrectGroup, {
          trim: true,
          lowercase: true,
          ...options,
        }),
      ];
    }

    if (cleanCorrectOptions.includes(normalizedUserWord)) {
      resultHtml.push(currentUserWord);
      userIdx++;
      correctIdx++;
      continue;
    }

    let multiWordMatch = false;

    if (isAlternative) {
      for (const alt of cleanCorrectOptions) {
        const altWords = alt.split(/\s+/);
        const userSliceWords = userWords.slice(
          userIdx,
          userIdx + altWords.length
        );
        const userSliceStr = normalizeText(userSliceWords.join(" "), {
          trim: true,
          lowercase: true,
          ...options,
        });
        const altNorm = normalizeText(alt, {
          trim: true,
          lowercase: true,
          ...options,
        });

        // console.log("Проверяем варианты:");
        // console.log("Пользовательский срез:", userSliceWords.join(" "));
        // console.log("Нормализованный срез пользователя:", userSliceStr);
        // console.log("Альтернативный вариант:", alt);
        // console.log("Нормализованный вариант:", altNorm);

        if (userSliceStr === altNorm) {
          resultHtml.push(...userSliceWords);
          userIdx += altWords.length;
          correctIdx++;
          multiWordMatch = true;
          break;
        }
      }
    } else {
      if (cleanCorrectOptions.includes(normalizedUserWord)) {
        resultHtml.push(currentUserWord);
        userIdx++;
        correctIdx++;
        multiWordMatch = true;
      }
    }

    if (multiWordMatch) {
      continue;
    }

    if (isOptional) {
      correctIdx++;
      continue;
    }

    resultHtml.push(
      `<span style="color: ${HIGHLIGHT_STYLES.INCORRECT_COLOR}; font-weight: 500;">${currentUserWord}</span>`
    );
    userIdx++;
    correctIdx++;
  }

  return resultHtml.join(" ");
};

/**
 * Checks if a string is empty or contains only spaces.
 */
export const isEmptyOrWhitespace = (text: string | undefined): boolean => {
  return !text || text.trim().length === 0;
};

/**
 * Validates the response array
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
 * Checks if the text contains a certain pattern
 */
export const matchesPattern = (text: string, pattern: RegExp): boolean => {
  return pattern.test(text);
};
