import { stripPunctuation as coreStripPunctuation } from "@/utils/core";

export const stripPunctuation = (s: string) => coreStripPunctuation(s);
