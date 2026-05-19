import Link from "next/link";
import { formatText } from "@/utils";
import { grammarLesson1 } from "@/prisma/lessons/paragraph";
import {
  grammarPronouns,
  examples,
  conjugationLesson1,
} from "@/prisma/lessons/tables";

export const Lesson1Grammar = () => {
  const section = grammarPronouns.grammarPronouns1;
  const title = section?.title as { ru: string; mkd: string };
  const subtitle = section?.subtitle as string[];

  const verb = grammarLesson1.toBe;
  const verbTitle = verb.title as string;
  const verbSubtitle = verb.subtitle as string;

  const verbTypeTitle = grammarLesson1.verbType.title as string;

  const examplesLesson1 = examples.lesson1;
  const reflexiveVerbsSubtitle = examplesLesson1.example2.subtitle as string;
  const interrogativeSentencesSubtitle = examplesLesson1.example3
    .subtitle as string;

  const conjugationVerbSubtitle = grammarLesson1.verbConjugation
    .subtitle as string;

  const aClassSubtitle = conjugationLesson1.aClass.subtitle as string;
  const iClassSubtitle = conjugationLesson1.iClass.subtitle as string;
  const eClassSubtitle = conjugationLesson1.eClass.subtitle as string;

  const negationTitle = grammarLesson1.negation.title as string;

  return (
    <>
      <Link href="/lesson/1#pronouns" scroll={false}>
        <h3 style={{ display: "flex", flexDirection: "column", textIndent: 0 }}>
          {title?.ru}
          <span>{title?.mkd}</span>
        </h3>
      </Link>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link href="/lesson/1#pronouns" scroll={false}>
            <p>{subtitle}</p>
          </Link>
        </li>
        <li>
          <Link href="/lesson/1#to-be" scroll={false}>
            <p>{verbTitle}</p>
          </Link>
          <ul style={{ paddingLeft: "20px", listStyle: "none" }}>
            <li>
              <Link href="/lesson/1#to-be" scroll={false}>
                <p>{formatText(verbSubtitle)}</p>
              </Link>
            </li>
            <li>
              <Link href="/lesson/1#verb-type" scroll={false}>
                <p>{verbTypeTitle}</p>
              </Link>
              <ul style={{ paddingLeft: "20px", listStyle: "none" }}>
                <li>
                  <Link href="/lesson/1#reflexive-verbs" scroll={false}>
                    <p>{reflexiveVerbsSubtitle}</p>
                  </Link>
                </li>
                <li>
                  <Link href="/lesson/1#conjugation-verb" scroll={false}>
                    <p>{conjugationVerbSubtitle}</p>
                  </Link>
                </li>
                <li>
                  <Link href="/lesson/1#a-class" scroll={false}>
                    <p>{aClassSubtitle}</p>
                  </Link>
                </li>
                <li>
                  <Link href="/lesson/1#i-class" scroll={false}>
                    <p>{iClassSubtitle}</p>
                  </Link>
                </li>
                <li>
                  <Link href="/lesson/1#e-class" scroll={false}>
                    <p>{eClassSubtitle}</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/lesson/1#negation" scroll={false}>
            <p>{negationTitle}</p>
          </Link>
        </li>
        <li>
          <Link href="/lesson/1#interrogative-sentences" scroll={false}>
            <p>{interrogativeSentencesSubtitle}</p>
          </Link>
        </li>
      </ul>
    </>
  );
};
