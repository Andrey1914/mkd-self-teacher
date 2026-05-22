import Link from "next/link";
import { examples, grammarTables } from "@/prisma/lessons/tables";

export const Grammar = () => {
  const section = grammarTables.imperfect;
  const title = section.title as {
    ru: string;
    mkd: string;
  };
  const subtitle = section.subtitle as string;
  const sectionExamples = examples.lesson6;
  const sectionSubtitle = sectionExamples.example1;
  const adjectiveSubtitle = sectionSubtitle.subtitle as string;
  const degreesOfComparisonSubtitle = sectionSubtitle.content
    .subtitle as string;

  return (
    <>
      <Link href="/lesson/6#imperfect">
        <h3 style={{ display: "flex", gap: 8, textIndent: 0 }}>
          {title?.ru}
          <span>{title?.mkd}</span>
        </h3>
      </Link>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link href="/lesson/6#imperfect">
            <p>{subtitle}</p>
          </Link>
        </li>
        <li>
          <Link href="/lesson/6#adjective">
            <p>{adjectiveSubtitle}</p>
          </Link>
        </li>
        <li>
          <ul style={{ paddingLeft: 20, listStyle: "none" }}>
            <li>
              <Link href="/lesson/6#adjective">
                <p>{degreesOfComparisonSubtitle}</p>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};
