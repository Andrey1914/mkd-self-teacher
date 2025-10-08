// /**
//  * Parses a text fragment into stylized and non-stylized parts.
//  */
// export const parseFillInPart = (part: string) => {
//   const numberPatternStart = /^(\d+\.\s*)/;
//   const letterPatternEnd = /([a-вA-V]\)\s*)$/;

//   let unstyledPrefix = "";
//   let styledText = part;
//   let unstyledSuffix = "";

//   const numberMatch = part.match(numberPatternStart);
//   const letterMatchEnd = part.match(letterPatternEnd);

//   if (numberMatch) {
//     unstyledPrefix = numberMatch[1];
//     styledText = part.replace(numberPatternStart, "");
//   } else if (letterMatchEnd) {
//     unstyledSuffix = letterMatchEnd[1];
//     styledText = part.replace(letterPatternEnd, "");
//   }

//   return { unstyledPrefix, styledText, unstyledSuffix };
// };

import { parseFillInPart as coreParseFillInPart } from "../../core/compositeUtils";

/**
 * Parses a text fragment into stylized and non-stylized parts.
 */
export const parseFillInPart = (part: string) => {
  return coreParseFillInPart(part);
};
