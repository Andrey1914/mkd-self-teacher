import React from "react";
import { formatText } from "@/utils";
import type { VocabularyProps } from "@/types";

import { styles } from "./styles";

export const Vocabulary = ({ lesson }: VocabularyProps) => {
  const section = lesson.sections[0];

  const { table, headerRow, headerCell, cell } = styles.vocabulary;

  if (
    !section ||
    !Array.isArray(section.content?.subtitle) ||
    !Array.isArray(section.content.words) ||
    section.content.words.length === 0
  ) {
    return null;
  }

  const { subtitle, words } = section.content;

  return (
    <div style={{ marginBottom: "2rem" }}>
      {(lesson.title?.ru || lesson.title?.mkd) && (
        <section style={{ marginBottom: "1.5rem" }}>
          {lesson.title?.ru && (
            <h2 style={{ paddingBottom: 0 }}>{lesson.title.ru}</h2>
          )}
          {lesson.title?.mkd && <h2>{formatText(lesson.title.mkd)}</h2>}
        </section>
      )}

      <table className={table}>
        <thead>
          <tr className={headerRow}>
            {subtitle.map((col, idx) => (
              <th
                key={idx}
                style={{ borderLeft: idx > 0 ? "0.5px solid #fff" : "none" }}
                className={headerCell}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {words.map((word, idx) => (
            <tr key={idx}>
              <td className={cell}>{formatText(`<span>${word.mkd}</span>`)}</td>
              <td className={cell}>{formatText(`<em>${word.pron}</em>`)}</td>
              <td className={cell}>{formatText(word.ru)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
