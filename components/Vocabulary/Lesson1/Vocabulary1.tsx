import React from "react";
import { formatText } from "@/utils/textFormat";
import { vocabulary } from "@/prisma/lessons/vocabulary";

export function Vocabulary1({ i }: { i: number }) {
  const section = vocabulary[0]?.sections.find(
    (sec) => sec.type === `vocabulary-${i}`
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
      {i === 1 && vocabulary.length > 0 && (
        <section style={{ marginBottom: "3rem" }}>
          {vocabulary[0].title?.ru && (
            <h2 style={{ marginBottom: "1rem" }}>{vocabulary[0].title.ru}</h2>
          )}
          {vocabulary[0].title?.mkd && (
            <h2 style={{ marginBottom: "1rem" }}>
              {formatText(vocabulary[0].title.mkd)}
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
