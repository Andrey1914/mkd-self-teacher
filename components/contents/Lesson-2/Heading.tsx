import Link from "next/link";
import { lesson2 } from "@/prisma/lessons/lesson-2";

export const Heading = () => {
  const title = lesson2.title as { ru: string; mkd: string };
  const section = lesson2.sections?.[0];
  const sectionTitle = section?.title as
    | { ru: string; mkd: string }
    | undefined;

  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link href="/lesson/2" scroll={false}>
            <h2 style={{ textIndent: 0 }}>
              {title.ru} <span>{title.mkd}</span>
            </h2>
          </Link>

          <Link href="/lesson/2#lesson-2_taxi-hotel" scroll={false}>
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
