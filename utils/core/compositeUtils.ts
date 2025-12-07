/**
 * Композитные утилиты для сложных операций
 * Объединяют несколько базовых утилит для выполнения сложных задач
 */

import { normalizeText, stripPunctuation, isWord } from "./config";

// Типы для упражнений
export interface WordState {
  text: string;
  isWord: boolean;
  userStyle: "normal" | "bold" | "italic";
  correctStyle: "normal" | "bold" | "italic";
  status: "unchecked" | "correct" | "incorrect";
  touched: boolean;
}

export interface Sentence {
  answer?: string[];
}

/**
 * Парсит упражнение на выделение слов
 */
export const parseHighlightExercise = (
  originalText: string,
  answerText: string
): WordState[] => {
  const boldWords = new Set<string>();
  const italicWords = new Set<string>();

  // Ищем слова, которые должны быть жирными
  const boldRegex = /«([^»]+)»/g;
  let boldMatch;
  while ((boldMatch = boldRegex.exec(answerText))) {
    const phrase = normalizeText(boldMatch[1], {
      removeHtmlTags: true,
      removeAccents: true,
      collapseSpaces: true,
      lowercase: true,
    });
    phrase.split(/\s+/).forEach((w) => {
      const key = stripPunctuation(w);
      if (key) boldWords.add(key);
    });
  }

  // Ищем слова, которые должны быть курсивными
  const italicRegex = /<em\b[^>]*>([\s\S]*?)<\/em>/gi;
  let italicMatch;
  while ((italicMatch = italicRegex.exec(answerText))) {
    const phrase = normalizeText(italicMatch[1], {
      removeHtmlTags: true,
      removeAccents: true,
      collapseSpaces: true,
      lowercase: true,
    });
    phrase.split(/\s+/).forEach((w) => {
      const key = stripPunctuation(w);
      if (key) italicWords.add(key);
    });
  }

  // Разбиваем оригинальный текст на слова и пробелы
  const textParts = originalText.replace(/<span>|<\/span>/g, "").split(/(\s+)/);

  return textParts.map((part) => {
    const partIsWord = isWord(part);
    if (!partIsWord) {
      return {
        text: part,
        isWord: false,
        userStyle: "normal" as const,
        correctStyle: "normal" as const,
        status: "unchecked" as const,
        touched: false,
      };
    }

    const normalizedWord = normalizeText(part, {
      removeHtmlTags: true,
      removeAccents: true,
      collapseSpaces: true,
      lowercase: true,
    });
    const key = stripPunctuation(normalizedWord);

    let correctStyle: "normal" | "bold" | "italic" = "normal";
    if (italicWords.has(key)) {
      correctStyle = "italic";
    } else if (boldWords.has(key)) {
      correctStyle = "bold";
    }

    return {
      text: part,
      isWord: true,
      userStyle: "normal" as const,
      correctStyle,
      status: "unchecked" as const,
      touched: false,
    };
  });
};

/**
 * Определяет конфигурацию упражнения
 */
export const determineExerciseConfig = (
  section: { singleInput?: boolean; content: { answer?: string[] } },
  pronouns: string[]
) => {
  const isSingleInput = section.singleInput === true;
  const answers = section.content.answer ?? [];

  const usePlaceholders =
    !isSingleInput &&
    answers.length > 0 &&
    answers.every((answer) =>
      pronouns.some((pronoun) => answer.trim().startsWith(pronoun))
    );

  const inputCount = isSingleInput ? 1 : pronouns.length;

  return { usePlaceholders, inputCount };
};

/**
 * Парсит часть текста для fill-in упражнения
 */
export const parseFillInPart = (part: string) => {
  const numberPatternStart = /^(\d+[\.\)]\s*)/;

  const suffixPattern = /(\s*(\(\?\)|\([a-вA-V]\))\s*)$/;

  let unstyledPrefix = "";
  let styledText = part;
  let unstyledSuffix = "";

  const numberMatch = part.match(numberPatternStart);
  if (numberMatch) {
    unstyledPrefix = numberMatch[1];
    styledText = part.replace(numberPatternStart, "");
  }

  const suffixMatch = styledText.match(suffixPattern);
  if (suffixMatch) {
    unstyledSuffix = suffixMatch[1];
    styledText = styledText.replace(suffixMatch[1], "");
  }

  return { unstyledPrefix, styledText, unstyledSuffix };
};

/**
 * Автоматически изменяет размер textarea
 */
export const resizeTextarea = (
  el: HTMLTextAreaElement | null,
  options: { minRows: number; maxRows: number }
) => {
  if (!el) return;

  const { minRows, maxRows } = options;

  // Сбрасываем высоту для корректного вычисления scrollHeight
  el.style.height = "auto";

  const cs = window.getComputedStyle(el);
  const paddingTop = parseFloat(cs.paddingTop);
  const paddingBottom = parseFloat(cs.paddingBottom);

  // scrollHeight включает контент и padding; вычитаем padding для чистой высоты контента
  const contentHeight = el.scrollHeight - paddingTop - paddingBottom;

  // Вычисляем высоту одной строки
  const lineHeight = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.5;

  const minHeight = minRows * lineHeight;
  const maxHeight = maxRows * lineHeight;

  // Вычисляем новую высоту, ограничивая между min и max
  const newHeight = Math.min(Math.max(contentHeight, minHeight), maxHeight);

  // Применяем новую высоту, добавляя padding обратно
  el.style.height = `${newHeight + paddingTop + paddingBottom}px`;

  // Показываем скроллбар только если контент превышает максимальную высоту
  el.style.overflowY = contentHeight > maxHeight ? "auto" : "hidden";
};
