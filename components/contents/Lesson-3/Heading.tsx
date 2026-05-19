import Link from "next/link";
import { lesson3 } from "@/prisma/lessons/lesson-3";

export const Heading = () => {
  const title = lesson3.title as { ru: string; mkd: string };
  const section = lesson3.sections?.[0];
  const sectionTitle = section?.title as
    | { ru: string; mkd: string }
    | undefined;

  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link href="/lesson/3" scroll={false}>
            <h2 style={{ textIndent: 0 }}>
              {title.ru} <span>{title.mkd}</span>
            </h2>
          </Link>

          <Link href="/lesson/3#lesson-3_acquaintance" scroll={false}>
            <h3
              style={{
                display: "flex",
                flexDirection: "column",
                textIndent: 0,
              }}
            >
              {sectionTitle?.ru}
              <span>{sectionTitle?.mkd}</span>
            </h3>
          </Link>
        </li>
      </ul>
    </>
  );
};
