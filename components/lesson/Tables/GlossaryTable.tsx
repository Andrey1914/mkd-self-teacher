import React from "react";
import { TablesProps } from "@/types";
import { formatText } from "@/utils";

interface Props {
  data: TablesProps;
}

export const GlossaryTable = ({ data }: Props) => {
  const { title, content } = data;

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
                {formatText(`<span>${word.mkd}</span>`)}
              </td>
              <td style={{ padding: "0.5rem" }}>{formatText(word.ru)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
