import React from "react";
import { GrammarTableProps } from "@/types/grammarTypes";
import { formatText } from "@/utils";

export const GrammarTable = ({ data }: { data: GrammarTableProps }) => {
  const { title, subtitle, text, content } = data;

  return (
    <>
      {Array.isArray(title)
        ? title.length > 0 && (
            <h2 style={{ margin: "1rem 0" }}>{formatText(title.join(", "))}</h2>
          )
        : title && <h2 style={{ margin: "1rem 0" }}>{formatText(title)}</h2>}

      {Array.isArray(subtitle) && subtitle.length > 0 && (
        <h3 style={{ margin: "2rem 0" }}>{formatText(subtitle.join(", "))}</h3>
      )}

      {Array.isArray(text) && text.length > 0 && (
        <>
          {text.map((item, idx) => (
            <p
              key={idx}
              style={{ marginBottom: "1rem 0", textAlign: "center" }}
            >
              {formatText(item)}
            </p>
          ))}
        </>
      )}

      {content?.words?.length > 0 && (
        <table
          style={{
            width: "100%",
            tableLayout: "fixed",
            borderCollapse: "collapse",
            border: "1px solid #994747",
            margin: "1rem 0",
          }}
        >
          {Array.isArray(content.subtitle) && (
            <thead>
              <tr
                style={{
                  backgroundColor: "#994747",
                  color: "#fff",
                }}
              >
                {content.subtitle.map((col, idx) => (
                  <th
                    key={idx}
                    style={{
                      padding: "0.5rem",
                      borderLeft: idx > 0 ? "1px solid #fff" : "none",
                      textAlign: "center",
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {content.words.map((row, idx) => (
              <tr key={idx}>
                <td
                  style={{
                    width: "33%",
                    padding: "0.5rem",
                    verticalAlign: "top",
                    border: "1px solid #994747",
                  }}
                >
                  {formatText(row.persone)}
                </td>
                <td
                  style={{
                    width: "33%",
                    padding: "0.5rem",
                    verticalAlign: "top",
                    border: "1px solid #994747",
                  }}
                >
                  {formatText(row.singular)}
                </td>
                <td
                  style={{
                    width: "33%",
                    padding: "0.5rem",
                    verticalAlign: "top",
                    border: "1px solid #994747",
                  }}
                >
                  {formatText(row.plural)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
