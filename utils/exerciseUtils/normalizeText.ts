// Helper function for text normalization
export const normalizeText = (text: string): string =>
  (text ?? "")
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/\u0301/g, "") // Remove accent marks
    .replace(/\s+/g, " ") // Collapse the gaps
    .trim()
    .toLowerCase();
