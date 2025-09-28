import React from "react";
import { TablesProps } from "@/types";
import { formatText } from "@/utils";

import { styles } from "./styles";

export const GrammarTable = ({ data }: { data: TablesProps }) => {
  const { title, subtitle, text, content } = data;

  const { heading, paragraph, table, headerRow, headerCell, cell } =
    styles.grammar;

  return (
    <>
      {title && typeof title === "object" && !Array.isArray(title) && (
        <h2 style={{ display: "flex", flexDirection: "column" }}>
          {title.ru && <>{formatText(title.ru)}</>}
          <span>{title.mkd && <>{formatText(title.mkd)}</>}</span>
        </h2>
      )}
      {Array.isArray(title)
        ? title.length > 0 && (
            <h2 className={heading}>{formatText(title.join(", "))}</h2>
          )
        : title && (
            <h2 className={heading}>
              {formatText(typeof title === "string" ? title : "")}
            </h2>
          )}

      {Array.isArray(subtitle) && subtitle.length > 0 && (
        <h3 className={heading}>{formatText(subtitle.join(", "))}</h3>
      )}

      {Array.isArray(text) && text.length > 0 && (
        <>
          {text.map((item, idx) => (
            <p key={idx} className={paragraph}>
              {formatText(item)}
            </p>
          ))}
        </>
      )}

      {content.words?.length && (
        <table className={table}>
          {Array.isArray(content.subtitle) && (
            <thead>
              <tr className={headerRow}>
                {content.subtitle.map((col, idx) => (
                  <th
                    key={idx}
                    style={{ borderLeft: idx > 0 ? "1px solid #fff" : "none" }}
                    className={headerCell}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {content.words?.map((row, idx) => (
              <tr key={idx}>
                <td className={cell}>{formatText(row.person)}</td>
                <td className={cell}>{formatText(row.singular)}</td>
                <td className={cell}>{formatText(row.plural)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
