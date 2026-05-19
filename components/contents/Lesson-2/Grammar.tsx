import Link from "next/link";
import { grammarLesson2 } from "@/prisma/lessons/paragraph";

export const Grammar = () => {
  const section = grammarLesson2;
  const sectionGender = section.genderOfNouns;
  const sectionPlural = section.pluralOfNouns;
  const sectionCountable = section.countablePlural;
  const sectionAdjectives = section.introAdjectives;
  const sectionNumerals = section.cardinalOrdinalNumerals;

  const title = sectionGender?.title as { ru: string; mkd: string };
  const subtitle = sectionGender?.subtitle as string[];
  const genderSubtitle = sectionGender?.content?.subtitle as string;
  const pluralSubtitle = sectionPlural.subtitle as string;
  const pluralContentSubtitle = sectionPlural.content?.subtitle as string;
  const countableSubtitle = sectionCountable.content?.subtitle as string;
  const adjectivesSubtitle = sectionAdjectives.subtitle as string;
  const numeralsSubtitle = sectionNumerals.subtitle as string;

  return (
    <>
      <Link href="/lesson/2#gender-of-nouns" scroll={false}>
        <h3 style={{ display: "flex", gap: 8, textIndent: 0 }}>
          {title?.ru}
          <span>{title?.mkd}</span>
        </h3>
      </Link>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link href="/lesson/2#gender-of-nouns" scroll={false}>
            <p>{subtitle}</p>
          </Link>
        </li>
        <li>
          <ul style={{ paddingLeft: 20, listStyle: "none" }}>
            <li>
              <Link href="/lesson/2#gender-of-nouns" scroll={false}>
                <p>{genderSubtitle}</p>
              </Link>
            </li>
            <li>
              <Link href="/lesson/2#plural-of-nouns" scroll={false}>
                <p>{pluralSubtitle}</p>
              </Link>
            </li>
            <li>
              <ul style={{ paddingLeft: 20, listStyle: "none" }}>
                <li>
                  <Link href="/lesson/2#plural-of-nouns" scroll={false}>
                    <p>{pluralContentSubtitle}</p>
                  </Link>
                </li>
                <li>
                  <Link href="/lesson/2#countable-plural" scroll={false}>
                    <p>{countableSubtitle}</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link href="/lesson/2#adjectives" scroll={false}>
                <p>{adjectivesSubtitle}</p>
              </Link>
            </li>
            <li>
              <Link href="/lesson/2#numerals-cardinal-ordinal" scroll={false}>
                <p>{numeralsSubtitle}</p>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};
