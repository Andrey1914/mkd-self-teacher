import type { WordState } from "@/types";

import { normalizeText } from "./normalizeText";
import { stripPunctuation } from "./stripPunctuation";

/**
 * Парсит оригинальный текст и текст с ответами для упражнения HighlightWords.
 * @param originalText - Исходный текст для упражнения.
 * @param answerText - Текст с правильной разметкой (bold/italic).
 * @returns Массив объектов WordState для инициализации состояния.
 */
export const parseHighlightExercise = (
  originalText: string,
  answerText: string
): WordState[] => {
  const boldWords = new Set<string>();
  const italicWords = new Set<string>();

  // Ищем все слова, которые должны быть жирными
  const boldRegex = /«([^»]+)»/g;
  let boldMatch;
  while ((boldMatch = boldRegex.exec(answerText))) {
    const phrase = normalizeText(boldMatch[1]);
    phrase.split(/\s+/).forEach((w) => {
      const key = stripPunctuation(w);
      if (key) boldWords.add(key);
    });
  }

  // Ищем все слова, которые должны быть курсивом
  const italicRegex = /<em\b[^>]*>([\s\S]*?)<\/em>/gi;
  let italicMatch;
  while ((italicMatch = italicRegex.exec(answerText))) {
    const phrase = normalizeText(italicMatch[1]);
    phrase.split(/\s+/).forEach((w) => {
      const key = stripPunctuation(w);
      if (key) italicWords.add(key);
    });
  }

  // Разбиваем оригинальный текст на слова и пробелы (для сохранения форматирования)
  const textParts = originalText.replace(/<span>|<\/span>/g, "").split(/(\s+)/);

  return textParts.map((part) => {
    const isWord = /\S/.test(part);
    if (!isWord) {
      return {
        text: part,
        isWord: false,
        userStyle: "normal",
        correctStyle: "normal",
        status: "unchecked",
        touched: false,
      };
    }

    const normalizedWord = normalizeText(part);
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
      userStyle: "normal",
      correctStyle,
      status: "unchecked",
      touched: false,
    };
  });
};
