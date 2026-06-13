import Link from "next/link";
import type { LessonData } from "@/types";

interface LessonHeadingProps {
  lesson: LessonData;
}

export const HeadingGenerator = ({ lesson }: LessonHeadingProps) => {
  if (!lesson) {
    console.error(
      "HeadingGenerator: Свойство 'lesson' не передано или равно undefined!",
    );
    return (
      <div
        style={{
          color: "orange",
        }}
      >
        Секция заголовков не найдена.
      </div>
    );
  }
  const { numericId, title, sections } = lesson;

  const firstSection = sections?.[0];

  const lessonTitle = title as { ru: string; mkd: string };
  const sectionTitle = firstSection?.title as
    | { ru: string; mkd: string }
    | undefined;

  const sectionAnchor = firstSection?.anchor;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      <li>
        <Link href={`/lesson/${numericId}`}>
          <h2 style={{ textIndent: 0 }}>
            {lessonTitle.ru} <span>{lessonTitle.mkd}</span>
          </h2>
        </Link>

        {sectionTitle && sectionAnchor && (
          <Link href={`/lesson/${numericId}#${sectionAnchor}`}>
            <h3
              style={{
                display: "flex",
                flexDirection: "column",
                textIndent: 0,
              }}
            >
              {sectionTitle.ru}
              <span>{sectionTitle.mkd}</span>
            </h3>
          </Link>
        )}
      </li>
    </ul>
  );
};
