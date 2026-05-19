import Link from "next/link";
import { lesson1 } from "@/prisma/lessons/lesson-1";

export const Lesson1Heading = () => {
  const title = lesson1.title as { ru: string; mkd: string };
  const section = lesson1.sections?.[0];
  const sectionTitle = section?.title as
    | { ru: string; mkd: string }
    | undefined;

  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link href="/lesson/1" scroll={false}>
            <h2 style={{ textIndent: 0 }}>
              {title.ru} <span>{title.mkd}</span>
            </h2>
          </Link>

          <Link href="/lesson/1#lesson-1_airport" scroll={false}>
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
