import { normalizeText, stripPunctuation, isWord } from "./config";
import { WordState } from "@/types";

export interface Sentence {
  answer?: string[];
}

export const parseHighlightExercise = (
  originalText: string,
  answerText: string,
): WordState[] => {
  const boldWords = new Set<string>();
  const italicWords = new Set<string>();

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

export const determineExerciseConfig = (
  section: { singleInput?: boolean; content: { answer?: string[] } },
  pronouns: string[],
) => {
  const isSingleInput = section.singleInput === true;
  const answers = section.content.answer ?? [];

  const usePlaceholders =
    !isSingleInput &&
    answers.length > 0 &&
    answers.every((answer) =>
      pronouns.some((pronoun) => answer.trim().startsWith(pronoun)),
    );

  const inputCount = isSingleInput ? 1 : pronouns.length;

  return { usePlaceholders, inputCount };
};

export const parseSentenceInPart = (part: string) => {
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

export const resizeTextarea = (
  el: HTMLTextAreaElement | null,
  options: { minRows: number; maxRows: number },
) => {
  if (!el) return;

  const { minRows, maxRows } = options;

  el.style.height = "auto";

  const cs = window.getComputedStyle(el);
  const paddingTop = parseFloat(cs.paddingTop);
  const paddingBottom = parseFloat(cs.paddingBottom);

  const contentHeight = el.scrollHeight - paddingTop - paddingBottom;

  const lineHeight = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.5;

  const minHeight = minRows * lineHeight;
  const maxHeight = maxRows * lineHeight;

  const newHeight = Math.min(Math.max(contentHeight, minHeight), maxHeight);

  el.style.height = `${newHeight + paddingTop + paddingBottom}px`;

  el.style.overflowY = contentHeight > maxHeight ? "auto" : "hidden";
};
