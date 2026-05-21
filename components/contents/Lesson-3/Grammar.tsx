import Link from "next/link";
import { formatText } from "@/utils";
import { grammarLesson3 } from "@/prisma/lessons/paragraph";
import { examples } from "@/prisma/lessons/tables";

export const Grammar = () => {
  const section = grammarLesson3;
  const sectionPersonal = section.personalPronouns;
  const sectionExamples = examples.lesson3;
  const sectionVerb = sectionExamples.example5;
  const sectionVerbCan = sectionExamples.example12;
  const sectionVerbNeed = section.needVerb;

  const title = sectionPersonal?.title as { ru: string; mkd: string };
  const subtitle = sectionPersonal?.subtitle as string[];
  const verbSubtitle = sectionVerb.subtitle as string;
  const verbNeedSubtitle = sectionVerbNeed.subtitle as string;
  const verbCanSubtitle = sectionVerbCan.subtitle as string;

  return (
    <>
      <Link href="/lesson/3#personal-pronouns">
        <h3 style={{ display: "flex", gap: 8, textIndent: 0 }}>
          {title?.ru}
          <span>{title?.mkd}</span>
        </h3>
      </Link>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link href="/lesson/3#personal-pronouns">
            <p>{subtitle}</p>
          </Link>
        </li>
        <li>
          <ul style={{ paddingLeft: 20, listStyle: "none" }}>
            <li>
              <Link href="/lesson/3#verb-3">
                <p>{verbSubtitle}</p>
              </Link>
            </li>
            <li>
              <ul style={{ paddingLeft: 20, listStyle: "none" }}>
                <li>
                  <Link href="/lesson/3#verb-need">
                    <p>{formatText(verbNeedSubtitle)}</p>
                  </Link>
                </li>
                <li>
                  <Link href="/lesson/3#verb-can">
                    <p>{formatText(verbCanSubtitle)}</p>
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
