import { MultiFormatHeading } from "@/components/lesson/Heading";
import { GenericTableProps } from "@/types";
import { formatText } from "@/utils";
import { EMPTY_CELL, MERGE_V, MERGE_H, ETC } from "@/constants";
import { styles } from "./styles";

export const GenericTable = ({
  data,
  lesson,
  classNames = {},
  titleIconSrc,
}: GenericTableProps) => {
  const rows =
    data?.content.rows ||
    data?.content.words ||
    lesson?.sections?.[0].content.words;
  const headers =
    data?.content?.subtitle || lesson?.sections?.[0].content.subtitle;
  const title = data?.title || lesson?.title;
  const subtitle = data?.subtitle;
  const text = data?.text;

  const { table, thead, th, tbody, tr, td, text: textClassName } = classNames;

  const { cellFragment } = styles.generic;

  if (!Array.isArray(rows) || rows.length === 0) return null;

  const getFlatCells = (row: any) =>
    Object.values(row).flatMap((val) => (Array.isArray(val) ? val : [val]));

  const flatRows = rows.map(getFlatCells);
  const renderedMap: boolean[][] = flatRows.map(() => []);

  const firstRow = rows[0] as Record<string, unknown>;
  const cellToHeaderMap = Object.values(firstRow).flatMap((val, idx) =>
    Array.isArray(val) ? val.map(() => idx) : [idx],
  );

  return (
    <div style={{ padding: "1rem 0 2rem 0", overflowX: "auto" }}>
      {title && (
        <MultiFormatHeading as="h2" data={title} iconSrc={titleIconSrc} />
      )}
      {subtitle && <MultiFormatHeading as="h3" data={subtitle} />}
      {text && <div className={textClassName}>{formatText(text, true)}</div>}

      <table className={table}>
        {Array.isArray(headers) && headers.length > 0 && (
          <thead className={thead}>
            <tr className={tr}>
              {headers.map((header, index) => {
                const thClassName = typeof th === "function" ? th(index) : th;
                const sampleRow = rows[0] as Record<string, unknown>;
                const key = Object.keys(sampleRow)[index];
                const sampleValue = sampleRow[key];
                const colSpan = Array.isArray(sampleValue)
                  ? sampleValue.length
                  : 1;

                return (
                  <th key={index} className={thClassName} colSpan={colSpan}>
                    {formatText(header)}
                  </th>
                );
              })}
            </tr>
          </thead>
        )}

        <tbody className={tbody}>
          {flatRows.map((cells, rowIndex) => (
            <tr key={rowIndex} className={tr}>
              {cells.map((cellValue, cellIndex) => {
                if (
                  renderedMap[rowIndex][cellIndex] ||
                  cellValue === MERGE_V ||
                  cellValue === MERGE_H
                )
                  return null;

                let rowSpan = 1;
                let colSpan = 1;

                const currentHeaderIdx = cellToHeaderMap[cellIndex];

                for (let j = cellIndex + 1; j < cells.length; j++) {
                  if (
                    cells[j] === MERGE_H &&
                    cellToHeaderMap[j] === currentHeaderIdx
                  ) {
                    colSpan++;
                    renderedMap[rowIndex][j] = true;
                  } else {
                    break;
                  }
                }

                for (let i = rowIndex + 1; i < flatRows.length; i++) {
                  let canMergeDown = true;

                  for (let j = cellIndex; j < cellIndex + colSpan; j++) {
                    if (
                      flatRows[i][j] !== MERGE_V ||
                      cellToHeaderMap[j] !== currentHeaderIdx
                    ) {
                      canMergeDown = false;
                      break;
                    }
                  }

                  if (canMergeDown) {
                    rowSpan++;
                    for (let j = cellIndex; j < cellIndex + colSpan; j++) {
                      renderedMap[i][j] = true;
                    }
                  } else {
                    break;
                  }
                }

                const tdClassName = (
                  typeof td === "function" ? td(cellIndex, rowIndex) : td
                ) as string | undefined;

                return (
                  <td
                    key={cellIndex}
                    className={tdClassName}
                    rowSpan={rowSpan}
                    colSpan={colSpan}
                  >
                    {cellValue !== EMPTY_CELL
                      ? (() => {
                          const val = String(cellValue);

                          if (val.includes(ETC)) {
                            const [mainText] = val.split(ETC);
                            return (
                              <>
                                {formatText(mainText.trim())}
                                <small className={cellFragment}>и т.д.</small>
                              </>
                            );
                          }

                          return formatText(val);
                        })()
                      : null}
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
