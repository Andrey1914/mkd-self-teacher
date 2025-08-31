import React from "react";
import { TablesProps } from "@/types";
import { formatText } from "@/utils";

export const DefinitenessCategoryTable = ({ data }: { data: TablesProps }) => {
  const rows = data?.content?.rows;
  if (!rows || !Array.isArray(rows) || rows.length === 0) {
    return null;
  }

  const groupedRows: {
    suffix: string;
    noteGroups: {
      note: string;
      items: { examples: string[] }[];
    }[];
  }[] = [];

  rows.forEach((row) => {
    const currentSuffix = row.suffix ?? "";
    const currentNote = row.note ?? "";
    const currentExamples = Array.isArray(row.examples)
      ? row.examples
      : typeof row.examples === "string"
      ? [row.examples]
      : [];

    const lastSuffixGroup = groupedRows[groupedRows.length - 1];

    if (lastSuffixGroup && lastSuffixGroup.suffix === currentSuffix) {
      const lastNoteGroup =
        lastSuffixGroup.noteGroups[lastSuffixGroup.noteGroups.length - 1];

      if (lastNoteGroup && lastNoteGroup.note === currentNote) {
        lastNoteGroup.items.push({ examples: currentExamples });
      } else {
        lastSuffixGroup.noteGroups.push({
          note: currentNote,
          items: [{ examples: currentExamples }],
        });
      }
    } else {
      groupedRows.push({
        suffix: currentSuffix,
        noteGroups: [
          {
            note: currentNote,
            items: [{ examples: currentExamples }],
          },
        ],
      });
    }
  });

  return (
    <div style={{ padding: "1rem 0 2rem 0" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #994747",
        }}
      >
        <tbody>
          {groupedRows.map((suffixGroup, suffixIdx) => {
            const suffixRowSpan = suffixGroup.noteGroups.reduce(
              (acc, noteGroup) => acc + noteGroup.items.length,
              0
            );

            let isFirstRowOfSuffix = true;

            return (
              <React.Fragment key={suffixIdx}>
                {suffixGroup.noteGroups.map((noteGroup, noteIdx) => {
                  let isFirstRowOfNote = true;

                  return noteGroup.items.map((item, itemIdx) => {
                    const suffixCell = isFirstRowOfSuffix && (
                      <td
                        rowSpan={suffixRowSpan}
                        style={{
                          padding: "0.5rem",
                          verticalAlign: "center",
                          textAlign: "center",
                          border: "1px solid #994747",
                        }}
                      >
                        {formatText(`<span>«${suffixGroup.suffix}»</span>`)}
                      </td>
                    );

                    const noteCell = isFirstRowOfNote && (
                      <td
                        rowSpan={noteGroup.items.length}
                        style={{
                          padding: "0.5rem",
                          verticalAlign: "center",
                          border: "1px solid #994747",
                        }}
                      >
                        {formatText(noteGroup.note)}
                      </td>
                    );

                    isFirstRowOfSuffix = false;
                    isFirstRowOfNote = false;

                    return (
                      <tr key={`${noteIdx}-${itemIdx}`}>
                        {suffixCell}
                        {noteCell}
                        <td
                          style={{
                            padding: "0.5rem",
                            border: "1px solid #994747",
                          }}
                        >
                          {formatText(
                            `<span>${item.examples.join(", ")}</span>`
                          )}
                        </td>
                      </tr>
                    );
                  });
                })}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
