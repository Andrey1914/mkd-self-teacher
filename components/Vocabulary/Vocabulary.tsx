import React from "react";
import { formatText } from "@/utils";
import type { VocabularyProps } from "@/types/vocabularyTypes";

export function Vocabulary({ lesson, index }: VocabularyProps) {
  const section = lesson.sections.find(
    (section) => section.type === `vocabulary-${index}`
  );

  if (
    !section ||
    !section.content?.subtitle ||
    !section.content.words?.length
  ) {
    return null;
  }

  const { subtitle, words } = section.content;

  return (
    <div style={{ marginBottom: "2rem" }}>
      {index === 1 && (
        <section style={{ marginBottom: "3rem" }}>
          {lesson.title?.ru && (
            <h2 style={{ marginBottom: "1rem" }}>{lesson.title.ru}</h2>
          )}
          {lesson.title?.mkd && (
            <h2 style={{ marginBottom: "1rem" }}>
              {formatText(lesson.title.mkd)}
            </h2>
          )}
        </section>
      )}

      <table style={{ width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#994747", color: "#fff" }}>
            {subtitle.map((col, idx) => (
              <th
                key={idx}
                style={{
                  padding: "0.5rem",
                  borderLeft: idx > 0 ? "2px solid #fff" : "none",
                  textAlign: "center",
                }}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {words.map((word, idx) => (
            <tr key={idx}>
              <td style={{ padding: "0.5rem" }}>
                {formatText(
                  `<span style="color: rgb(196, 86, 86);">${word.mkd}</span>`
                )}
              </td>
              <td style={{ padding: "0.5rem" }}>
                {formatText(`<em>${word.pron}</em>`)}
              </td>
              <td style={{ padding: "0.5rem" }}>
                {formatText(`<strong>${word.ru}</strong>`)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
