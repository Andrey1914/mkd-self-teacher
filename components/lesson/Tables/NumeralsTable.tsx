import React from "react";
import type { NumeralsTableBlock } from "@/types";
import { formatText } from "@/utils";

interface Props {
  data: NumeralsTableBlock;
}

export default function NumeralsTable({ data }: Props) {
  const content = data.content;

  if (
    !content ||
    !Array.isArray(content.subtitle) ||
    !Array.isArray(content.words) ||
    content.words.length === 0
  ) {
    return null;
  }

  const { subtitle, words } = content;

  return (
    <div style={{ padding: "1rem 0 2rem 0" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
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
                {formatText(`${word.numbers}`)}
              </td>
              <td style={{ padding: "0.5rem" }}>
                {formatText(`<span>${word.cardinal}</span>`)}
              </td>
              <td style={{ padding: "0.5rem" }}>
                {formatText(`<span>${word.ordinal}</span>`)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
