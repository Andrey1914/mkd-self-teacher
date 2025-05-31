import React from "react";
import parse from "html-react-parser";

type Word = {
  mkd: string;
  pron: string;
  ru: string;
};

export type VocabularySection = {
  type: "vocabulary";
  content: {
    subtitle: string[];
    words: Word[];
  };
};

export function VocabularyTable({ section }: { section: VocabularySection }) {
  if (!section?.content?.words || !section?.content?.subtitle) return null;

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr style={{ backgroundColor: "#994747", color: "#fff" }}>
          {section.content.subtitle.map((col, idx) => (
            <th
              key={idx}
              style={{
                padding: "0.5rem",
                border: "1px solid #994747",
                textAlign: "left",
              }}
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {section.content.words.map((word, idx) => (
          <tr key={idx}>
            <td style={{ padding: "0.5rem" }}>
              {parse(
                `<span style="color: rgb(196, 86, 86);">${word.mkd}</span>`
              )}
            </td>
            <td style={{ padding: "0.5rem" }}>
              {parse(`<em>${word.pron}</em>`)}
            </td>
            <td style={{ padding: "0.5rem" }}>{parse(word.ru)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
