import React from "react";
import type { AdjectivesData } from "@/types";
import { formatText } from "@/utils";

interface Props {
  data: AdjectivesData;
}

export default function AdjectivesTable({ data }: Props) {
  const section = data.sections[0];

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
    <div style={{ padding: "1rem 0 2rem 0" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          tableLayout: "fixed",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#994747", color: "#fff" }}>
            {subtitle.map((col, idx) => (
              <th
                key={idx}
                style={{
                  padding: "0.5rem",
                  borderLeft: idx > 0 ? "0.5px solid #fff" : "none",
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
                {formatText(`<span>${word.masculine}</span>`)}
              </td>
              <td style={{ padding: "0.5rem" }}>
                {formatText(`<span>${word.feminine}</span>`)}
              </td>
              <td style={{ padding: "0.5rem" }}>
                {formatText(`<span>${word.neuter}</span>`)}
              </td>
              <td style={{ padding: "0.5rem" }}>
                {formatText(`<span>${word.plural}</span>`)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
