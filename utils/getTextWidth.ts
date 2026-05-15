import { getTextWidth as coreGetTextWidth } from "./core";

export const getTextWidth = (text: string, font = "16px Arial") => {
  return coreGetTextWidth(text, font);
};
