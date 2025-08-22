import React from "react";
import { TablesProps } from "@/types";
import { formatText } from "@/utils";
import { styles } from "./styles";

export const PronounTable = ({ data }: { data: TablesProps }) => {
  const { content } = data;

  const { dativeHeader, accusativeHeader } = content;

  const {
    table,
    headerRow,
    headerCell,
    headerFirstCell,
    headerCellBorderLeft,
    headerCellBorderBottom,
    headerCellNoRight,
    secondRowCell,
    cell,
  } = styles.pronounsTable;

  return (
    <div style={{ overflowX: "auto", padding: "2rem 0" }}>
      <table className={table}>
        <thead>
          <tr className={headerRow}>
            <th rowSpan={2} className={`${headerCell} ${headerFirstCell}`}></th>

            <th
              colSpan={2}
              className={`${headerCell} ${headerCellBorderBottom}`}
            >
              {formatText(dativeHeader)}
            </th>
            <th
              colSpan={2}
              className={`${headerCell} ${headerCellBorderBottom} ${headerCellNoRight}`}
            >
              {formatText(accusativeHeader)}
            </th>
          </tr>

          <tr className={headerRow}>
            {content.columns?.map((col, idx) => (
              <th
                key={idx}
                className={`${headerCell} ${secondRowCell} ${
                  idx > 0 ? headerCellBorderLeft : ""
                }`}
              >
                {formatText(col)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.rows?.map((row, idx) => (
            <tr key={idx}>
              <td className={cell}>
                {formatText(`<span>${row.pronoun}</span>`)}
              </td>
              <td className={cell}>
                {formatText(`<span>${row.dativeShort}</span>`)}
              </td>
              <td className={cell}>
                {formatText(`<span>${row.dativeFull}</span>`)}
              </td>
              <td className={cell}>
                {formatText(`<span>${row.accusativeShort}</span>`)}
              </td>
              <td className={cell}>
                {formatText(`<span>${row.accusativeFull}</span>`)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
