import Link from "next/link";
import { formatText } from "@/utils";
import { grammarLesson4 } from "@/prisma/lessons/paragraph";
import { examples } from "@/prisma/lessons/tables";

export const Grammar = () => {
  const section = grammarLesson4;
  const sectionDefinitenessCategory = section.definitenessCategory;
  const sectionExamples = examples.lesson4;
  const sectionVerb = sectionExamples.example1;
  const sectionVerbHaveHavnt = sectionExamples.example6;
  const sectionLetsConstruction = sectionExamples.example9;
  const sectionVerbFuture = sectionVerb.content.subtitle as string;
  const verbHaveHavntSubtitle = sectionVerbHaveHavnt.subtitle as string;
  const letsConstructionSubtitle = sectionLetsConstruction.subtitle as string;
  const prepositions = section.prepositions.subtitle as string;

  const title = sectionDefinitenessCategory?.title as {
    ru: string;
    mkd: string;
  };
  const subtitle = sectionDefinitenessCategory?.content?.intro
    ?.subtitle as string[];
  const verbSubtitle = sectionVerb.subtitle as string;

  return (
    <>
      <Link href="/lesson/4#definiteness-category">
        <h3 style={{ display: "flex", gap: 8, textIndent: 0 }}>
          {title?.ru}
          <span>{title?.mkd}</span>
        </h3>
      </Link>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link href="/lesson/4#definiteness-category">
            <p>{subtitle}</p>
          </Link>
        </li>
        <li>
          <ul style={{ paddingLeft: 20, listStyle: "none" }}>
            <li>
              <Link href="/lesson/4#verb-future">
                <p>{verbSubtitle}</p>
              </Link>
            </li>
            <li>
              <ul style={{ paddingLeft: 20, listStyle: "none" }}>
                <li>
                  <Link href="/lesson/4#verb-future">
                    <p>{sectionVerbFuture}</p>
                  </Link>
                </li>
                <li>
                  <Link href="/lesson/4#verb-have-have-not">
                    <p>{formatText(verbHaveHavntSubtitle)}</p>
                  </Link>
                </li>
                <li>
                  <Link href="/lesson/4#lets-construction">
                    <p>{formatText(letsConstructionSubtitle)}</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/lesson/4#prepositions">
                <p>{prepositions}</p>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};
