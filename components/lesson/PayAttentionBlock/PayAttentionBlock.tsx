import { PayAttentionBlockProps } from "@/types";
import { formatText } from "@/utils";

import { styles } from "./styles";

export function PayAttentionBlock({ data }: { data: PayAttentionBlockProps }) {
  const { table, leftCell, rightCell, cell, flexList, gridContainer } =
    styles.payAttentionStyles;

  if (!data?.sections?.length) return null;

  return (
    <>
      {data.sections.map((section, index) => (
        <table key={index} className={table}>
          <tbody>
            <tr>
              <td className={leftCell}>{section.title}</td>
              <td className={rightCell}>
                <ul style={{ listStyle: "none" }}>
                  <li className={cell}>
                    {formatText(section.content.text, true)}
                  </li>
                </ul>
                <div>
                  {section.content.words &&
                    section.content.words.length > 0 && (
                      <ul className={flexList}>
                        {section.content.words.map((word, i) => {
                          const hasMkd = !!word.mkd;
                          const hasRu = !!word.ru;

                          const isTwoColumn = hasMkd && hasRu;

                          const maxWidth = isTwoColumn ? "500px" : "650px";
                          const justifyItems = isTwoColumn
                            ? "start"
                            : "center ";
                          const gridTemplateColumns = isTwoColumn
                            ? "1fr 1fr"
                            : "1fr";
                          return (
                            <li
                              key={i}
                              className={gridContainer}
                              style={{
                                gridTemplateColumns: gridTemplateColumns,
                                justifyItems: justifyItems,
                              }}
                            >
                              {hasMkd && (
                                <p
                                  style={{ maxWidth: maxWidth, textIndent: 0 }}
                                >
                                  {formatText(`<span>${word.mkd}</span>`)}
                                </p>
                              )}

                              {hasRu && (
                                <p
                                  lang="ru"
                                  style={{ color: "#333", textIndent: 0 }}
                                >
                                  {formatText(word.ru)}
                                </p>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
}
