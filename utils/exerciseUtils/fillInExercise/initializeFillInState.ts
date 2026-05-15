import { Sentence } from "@/types";
import { initializeFillInState as coreInitializeFillInState } from "../../core";

export const initializeFillInState = (sentences: Sentence[] | undefined) => {
  const initialInputs = coreInitializeFillInState(sentences, "");
  const initialFlags = coreInitializeFillInState(sentences, false);

  return { initialInputs, initialFlags };
};
