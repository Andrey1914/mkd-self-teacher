import React from "react";
import { TablesProps } from "@/types";
import { formatText } from "@/utils";

import { styles } from "./styles";

export const AdjectivesTable = ({ data }: { data: TablesProps }) => {
  const content = data.content;

  const { table, headerRow, headerCell, cell } = styles.adjectives;

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
              <td className={cell}>
                {formatText(`<span>${word.masculine}</span>`)}
              </td>
              <td className={cell}>
                {formatText(`<span>${word.feminine}</span>`)}
              </td>
              <td className={cell}>
                {formatText(`<span>${word.neuter}</span>`)}
              </td>
              <td className={cell}>
                {formatText(`<span>${word.plural}</span>`)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
