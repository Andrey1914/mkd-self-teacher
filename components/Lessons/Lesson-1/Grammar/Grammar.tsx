import { FormsOfPersonalPronouns } from "./FormsOfPersonalPronouns";
import { Verb, VerbType, VerbConjugation } from "./Verb";
import { Negation } from "./Negation";
import { InterrogativeSentences } from "./InterrogativeSentences";

export const Grammar = () => {
  return (
    <>
      <FormsOfPersonalPronouns />
      <Verb />
      <VerbType />
      <VerbConjugation />
      <Negation />
      <InterrogativeSentences />
    </>
  );
};
