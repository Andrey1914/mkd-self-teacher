const DRAG_MARKER_REGEX = /\*\*([\s\S]*?)\*\*/g;

export function hasDraggableWords(promptText: string): boolean {
  return promptText.includes("**");
}

export function extractDraggableWords(promptText: string): string[] | null {
  const allWords: string[] = [];
  let match: RegExpExecArray | null;
  DRAG_MARKER_REGEX.lastIndex = 0;

  while ((match = DRAG_MARKER_REGEX.exec(promptText)) !== null) {
    const rawContent = match[1];
    if (rawContent) {
      const cleanContent = rawContent.replace(/<[^>]*>/g, "");
      const words = cleanContent
        .split(",")
        .map((word) => word.trim())
        .filter((word) => word.length > 0);

      allWords.push(...words);
    }
  }

  if (allWords.length === 0) return null;

  return allWords.map((word, index) => {
    const isLast = index === allWords.length - 1;
    return isLast ? `${word}.` : `${word},`;
  });
}

export function removeWordsFromPrompt(promptText: string): string {
  if (!promptText) return "";

  let cleaned = promptText.replace(/\*\*([\s\S]*?)\*\*/g, "");

  cleaned = cleaned.replace(/<span[^>]*>\s*<\/span>/g, "");

  return cleaned.trim();
}
