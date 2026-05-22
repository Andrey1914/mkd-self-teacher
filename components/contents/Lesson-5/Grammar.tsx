import Link from "next/link";
import { formatText } from "@/utils";
import { lectureLesson5 } from "@/prisma/lessons/paragraph";
import { examples } from "@/prisma/lessons/tables";

export const Grammar = () => {
  const section = lectureLesson5;
  const verbalNounSubtitle = section.verbalNoun.subtitle as string;
  const sectionExamples = examples.lesson5;
  const sectionTitle = sectionExamples.example1;
  const sectionConjactions = sectionExamples.example8;
  const adversaryConjanctions = sectionExamples.example10.content
    .subtitle as string;
  const disjunctiveConjunctionsSubtitle = sectionExamples.example12.content
    .subtitle as string;
  const conjunctionsThatWhether = sectionExamples.example13.subtitle as string;
  const title = sectionTitle.title as {
    ru: string;
    mkd: string;
  };
  const subtitle = sectionTitle.subtitle as string;
  const conjactionsSubtitle = sectionConjactions.subtitle as string;
  const conjactionsContentSubtitle = sectionConjactions.content
    .subtitle as string;

  return (
    <>
      <Link href="/lesson/5#direct-object">
        <h3 style={{ display: "flex", gap: 8, textIndent: 0 }}>
          {title?.ru}
          <span>{title?.mkd}</span>
        </h3>
      </Link>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link href="/lesson/5#direct-object">
            <p>{subtitle}</p>
          </Link>
        </li>
        <li>
          <ul style={{ paddingLeft: 20, listStyle: "none" }}>
            <li>
              <Link href="/lesson/5#verbal-noun">
                <p>{verbalNounSubtitle}</p>
              </Link>
            </li>
            <li>
              <Link href="/lesson/5#conjanctions">
                <p>{conjactionsSubtitle}</p>
              </Link>
            </li>
            <li>
              <ul style={{ paddingLeft: 20, listStyle: "none" }}>
                <li>
                  <Link href="/lesson/5#conjanctions">
                    <p>{conjactionsContentSubtitle}</p>
                  </Link>
                </li>
                <li>
                  <Link href="/lesson/5#adversary-conjanctions">
                    <p>{adversaryConjanctions}</p>
                  </Link>
                </li>
                <li>
                  <Link href="/lesson/5#disjunctive-conjunctions">
                    <p>{disjunctiveConjunctionsSubtitle}</p>
                  </Link>
                </li>
                <li>
                  <Link href="/lesson/5#conjunctions-that-whether">
                    <p>{formatText(conjunctionsThatWhether)}</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};
