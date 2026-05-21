import Link from "next/link";
import { lesson5 } from "@/prisma/lessons/lesson-5";

export const Heading = () => {
  const title = lesson5.title as { ru: string; mkd: string };
  const section = lesson5.sections?.[0];
  const sectionTitle = section?.title as
    | { ru: string; mkd: string }
    | undefined;

  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link href="/lesson/5">
            <h2 style={{ textIndent: 0 }}>
              {title.ru} <span>{title.mkd}</span>
            </h2>
          </Link>

          <Link href="/lesson/5#lesson-5_restaurant">
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
