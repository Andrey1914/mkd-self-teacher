"use client";

import React from "react";
import { formatText } from "@/utils";
import alphabetTable from "@/prisma/lessons/tables/lesson-1/alphabetTable";

export const AlphabetTable = () => {
  const section = alphabetTable.sections[0];
  const table = section.tableEntries?.create?.[0];

  if (!table || !table.rows) return null;

  const rows = table.rows;
  const mid = Math.ceil(rows.length / 2);
  const left = rows.slice(0, mid);
  const right = rows.slice(mid);

  return (
    <div style={{ margin: "1rem 0" }}>
      {table.title && <h3 style={{ marginBottom: "1rem" }}>{table.title}</h3>}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "1rem",
          border: "1px solid #994747",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#994747", color: "#fff" }}>
            {["Буква", "Звук", "Буква", "Звук"].map((label, idx) => (
              <th
                key={idx}
                style={{
                  padding: "0.5rem",
                  textAlign: "center",
                  borderLeft: idx === 0 ? "none" : "1px solid #fff",
                }}
              >
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
                    <td
                      style={{
                        padding: "0.5rem",
                        verticalAlign: "top",
                        border: "1px solid #994747",
                      }}
                    >
                      {item?.letter
                        ? formatText(`<span>${item.letter}</span>`)
                        : ""}
                    </td>
                    <td
                      style={{
                        padding: "0.5rem",
                        verticalAlign: "top",
                        border: "1px solid #994747",
                        width: colIdx % 2 === 1 ? "45%" : "auto",
                      }}
                    >
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
