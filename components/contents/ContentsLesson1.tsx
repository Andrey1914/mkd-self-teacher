import Link from "next/link";
import { lesson1 } from "@/prisma/lessons/lesson-1";
import {
  Lesson1Lecture,
  Lesson1Phonetics,
} from "@/components/contents/Lesson-1";

export const ContentsLesson1 = () => {
  const title = lesson1.title as { ru: string; mkd: string };
  const section = lesson1.sections?.[0];
  const sectionTitle = section?.title as
    | { ru: string; mkd: string }
    | undefined;

  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link href="/lesson/1">
            <h2 style={{ textIndent: 0 }}>
              {title.ru} <span>{title.mkd}</span>
            </h2>
          </Link>
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link href="/lesson/1#lesson-1_airport">
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
            <li>
              <Lesson1Lecture />
            </li>
            <li>
              <Lesson1Phonetics />
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};
