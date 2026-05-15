import { parseSentenceInPart as coreParseFillInPart } from "../../core/compositeUtils";

export const parseFillInPart = (part: string) => {
  return coreParseFillInPart(part);
};
