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
