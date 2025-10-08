// Helper function for text normalization
// export const normalizeText = (text: string): string =>
//   (text ?? "")
//     .replace(/<[^>]*>/g, "") // Remove HTML tags
//     .replace(/\u0301/g, "") // Remove accent marks
//     .replace(/\s+/g, " ") // Collapse the gaps
//     .trim()
//     .toLowerCase();

import { normalizeText as coreNormalizeText } from "@/utils/core";

// Helper function for text normalization
export const normalizeText = (text: string): string =>
  coreNormalizeText(text, {
    removeHtmlTags: true,
    removeAccents: true,
    collapseSpaces: true,
    trim: true,
    lowercase: true,
  });
