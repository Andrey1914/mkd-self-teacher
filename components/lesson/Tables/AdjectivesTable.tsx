import React from "react";
import type { TablesProps } from "@/types";
import { formatText } from "@/utils";

interface Props {
  data: TablesProps;
}

export const AdjectivesTable = ({ data }: Props) => {
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
};
