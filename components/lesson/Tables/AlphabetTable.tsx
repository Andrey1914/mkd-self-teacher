import React from "react";
import { formatText } from "@/utils";
import { alphabetTable } from "@/prisma/lessons/tables";
import { TABLE_HEADER_LABELS } from "@/constants";

import { styles } from "./styles";

export const AlphabetTable = () => {
  const section = alphabetTable.sections[0];
  const table = section.tableEntries?.create?.[0];

  const {
    tableSheet,
    tableColgroup,
    tableRowHeader,
    tableHeaderCell,
    tableCell,
    tableCellText,
  } = styles.alphabet;

  if (!table || !table.rows) return null;

  const rows = table.rows;
  const mid = Math.ceil(rows.length / 2);
  const left = rows.slice(0, mid);
  const right = rows.slice(mid);

  return (
    <div style={{ margin: "1rem 0" }}>
      <table className={tableSheet}>
        <colgroup className={tableColgroup}>
          <col />
          <col />
          <col />
          <col />
        </colgroup>

        <thead>
          <tr className={tableRowHeader}>
            {TABLE_HEADER_LABELS.map((label, idx) => (
              <th lang="ru" key={idx} className={tableHeaderCell}>
                {label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: Math.max(left.length, right.length) }).map(
            (_, rowIdx) => (
              <tr key={rowIdx}>
                {[left[rowIdx], right[rowIdx]].map((item, colIdx) => (
                  <React.Fragment key={colIdx}>
                    <td lang="ru" className={tableCell}>
                      {item?.letter
                        ? formatText(`<span>${item.letter}</span>`)
                        : ""}
                    </td>
                    <td lang="ru" className={`${tableCell} ${tableCellText}`}>
                      {item?.sound ? formatText(item.sound) : ""}
                    </td>
                  </React.Fragment>
                ))}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
