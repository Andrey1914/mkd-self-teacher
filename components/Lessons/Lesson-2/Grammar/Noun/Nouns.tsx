import { Paragraph } from "@/components/lesson/Paragraph";

import { grammarLesson2 } from "@/prisma/lessons/paragraph";

const {
  genderOfNouns,
  pluralOfNouns,
  feminineNouns,
  masculineNouns,
  neuterNouns,
  countablePlural,
} = grammarLesson2;

export const Nouns = () => {
  return (
    <>
      <Paragraph
        data={genderOfNouns}
        titleIconSrc="/grammar.webp"
        id="gender-of-nouns"
      />
      <Paragraph data={pluralOfNouns} id="plural-of-nouns" />
      <Paragraph data={feminineNouns} />
      <Paragraph data={masculineNouns} />
      <Paragraph data={neuterNouns} />
      <Paragraph data={countablePlural} id="countable-plural" />
    </>
  );
};
