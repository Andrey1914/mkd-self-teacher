"use client";

import React from "react";
import { GenericTableProps } from "@/types";
import { formatText } from "@/utils";

// import { styles } from "./styles";

export const GenericTable = ({ data, classNames = {} }: GenericTableProps) => {
  const rows = data.content?.words || data.content?.rows;
  const headers = data.content?.subtitle;
  const title = data.title;
  const subtitle = data.subtitle;
  const text = data.text;

  const { table, thead, th, tbody, tr, td } = classNames;

  // const {
  //   // table,
  //   headerRow,
  //   headerCell,
  //   secondRowCell,
  //   headerCellBorderLeft,

  //   cell,
  // } = styles.pronouns;

  if (!Array.isArray(rows) || rows.length === 0) {
    return null;
  }

  return (
    <div style={{ padding: "1rem 0 2rem 0", overflowX: "auto" }}>
      {title &&
        (typeof title === "string" ? (
          <h2>{formatText(title)}</h2>
        ) : Array.isArray(title) ? (
          <h2>{formatText(title.join(", "))}</h2>
        ) : typeof title === "object" && title !== null ? (
          <h2>
            {title.ru && <>{formatText(title.ru)}</>}
            {title.mkd && (
              <>
                {" "}
                <span>{formatText(title.mkd)}</span>
              </>
            )}
          </h2>
        ) : null)}

      {subtitle && (
        <h3>
          {formatText(Array.isArray(subtitle) ? subtitle.join(", ") : subtitle)}
        </h3>
      )}
      {text && <p style={{ textAlign: "center" }}>{formatText(text)}</p>}

      <table className={table} style={{ tableLayout: "fixed" }}>
        {Array.isArray(headers) && headers.length > 0 && (
          <thead className={thead}>
            <tr className={tr}>
              {headers.map((header, index) => {
                const thClassName = typeof th === "function" ? th(index) : th;
                return (
                  <th
                    className={thClassName}
                    key={index}
                    // className={`${headerCell} ${secondRowCell} ${
                    //   index > 0 ? headerCellBorderLeft : ""
                    // }`}
                  >
                    {formatText(header)}
                  </th>
                );
              })}
            </tr>
          </thead>
        )}

        <tbody className={tbody}>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={tr}>
              {Object.values(row).flatMap((cellData, cellIndex) => {
                if (Array.isArray(cellData)) {
                  return cellData.map((item, itemIndex) => (
                    <td
                      key={`${cellIndex}-${itemIndex}`}
                      // className={cell}
                      className={td}
                    >
                      {formatText(item)}
                    </td>
                  ));
                }

                return (
                  <td
                    key={cellIndex}
                    className={td}
                    // className={cell}
                  >
                    {formatText(String(cellData))}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
