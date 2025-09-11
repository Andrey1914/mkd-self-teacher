import React from "react";
import { TablesProps } from "@/types";
import { formatText } from "@/utils";

import { styles } from "./styles";

interface Props {
  data: TablesProps;
}

export const GlossaryTable = ({ data }: Props) => {
  const { title, content } = data;

  const { table, headerRow, headerCell, cell } = styles.glossary;

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
      <h2>
        {typeof title === "object" && !Array.isArray(title) && "ru" in title
          ? formatText(title.ru)
          : formatText(typeof title === "string" ? title : "")}
      </h2>

      <h2>
        {typeof title === "object" && !Array.isArray(title) && "mkd" in title
          ? formatText(`<span>${title.mkd}</span>`)
          : formatText("")}
      </h2>

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
              <td className={cell}>{formatText(word.ru)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
