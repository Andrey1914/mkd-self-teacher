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
      <Link href="/lesson/1#pronouns">
        <h3 style={{ display: "flex", flexDirection: "column", textIndent: 0 }}>
          {title?.ru}
          <span>{title?.mkd}</span>
        </h3>
      </Link>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link href="/lesson/1#pronouns">
            <p>{subtitle}</p>
          </Link>
        </li>
        <li>
          <Link href="/lesson/1#to-be">
            <p>{verbTitle}</p>
          </Link>
          <ul style={{ paddingLeft: "20px", listStyle: "none" }}>
            <li>
              <Link href="/lesson/1#to-be">
                <p>{formatText(verbSubtitle)}</p>
              </Link>
            </li>
            <li>
              <Link href="/lesson/1#verb-type">
                <p>{verbTypeTitle}</p>
              </Link>
              <ul style={{ paddingLeft: "20px", listStyle: "none" }}>
                <li>
                  <Link href="/lesson/1#reflexive-verbs">
                    <p>{reflexiveVerbsSubtitle}</p>
                  </Link>
                </li>
                <li>
                  <Link href="/lesson/1#conjugation-verb">
                    <p>{conjugationVerbSubtitle}</p>
                  </Link>
                </li>
                <li>
                  <Link href="/lesson/1#a-class">
                    <p>{aClassSubtitle}</p>
                  </Link>
                </li>
                <li>
                  <Link href="/lesson/1#i-class">
                    <p>{iClassSubtitle}</p>
                  </Link>
                </li>
                <li>
                  <Link href="/lesson/1#e-class">
                    <p>{eClassSubtitle}</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/lesson/1#negation">
            <p>{negationTitle}</p>
          </Link>
        </li>
        <li>
          <Link href="/lesson/1#interrogative-sentences">
            <p>{interrogativeSentencesSubtitle}</p>
          </Link>
        </li>
      </ul>
    </>
  );
};
