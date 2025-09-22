import React from "react";
import { TablesProps } from "@/types";
import { formatText, renderTitle } from "@/utils";

import { styles } from "./styles";

export const ExamplesTable = ({ data }: { data: TablesProps }) => {
  const { title, subtitle, content } = data;

  const { examples, paragraph, flexContainer, gridContainer } = styles.examples;

  const renderTextParagraphs = (text: string | string[]) => {
    const textContent = Array.isArray(text) ? text.join("\n\n") : text;

    return textContent
      .split(/\n\s*\n/)
      .filter((line) => line.trim().length > 0)
      .map((p, i) => (
        <p lang="ru" key={i} className={paragraph}>
          {formatText(p)}
        </p>
      ));
  };

  if (!Array.isArray(content?.words)) {
    return null;
  }

  return (
    <>
      {title && (
        <h2 style={{ display: "flex", flexDirection: "column" }}>
          {renderTitle(title)}
        </h2>
      )}

      {subtitle && (
        <h3>
          {Array.isArray(subtitle)
            ? formatText(subtitle.join(", "))
            : formatText(subtitle)}
        </h3>
      )}
      <>
        {content.subtitle && (
          <h4>
            {Array.isArray(content.subtitle)
              ? formatText(content.subtitle.join(", "))
              : formatText(content.subtitle)}
          </h4>
        )}
      </>
      <>{content.text && <>{renderTextParagraphs(content.text)}</>}</>

      <div className={flexContainer}>
        {content.words.map((row, idx) => {
          const hasMkd = !!row.mkd;
          const hasRu = !!row.ru;

          const isTwoColumn = hasMkd && hasRu;

          const maxWidth = isTwoColumn ? "500px" : "650px";
          const justifyItems = isTwoColumn ? "start" : "center ";
          const gridTemplateColumns = isTwoColumn ? "1fr 1fr" : "1fr";

          return (
            <div
              key={`row-${idx}`}
              className={gridContainer}
              style={{
                gridTemplateColumns: gridTemplateColumns,
                justifyItems: justifyItems,
              }}
            >
              {/* mkd (если есть) */}
              {hasMkd && (
                <p className={examples} style={{ maxWidth: maxWidth }}>
                  {formatText(`<span>${row.mkd}</span>`)}
                </p>
              )}

              {/* ru (если есть) */}
              {hasRu && (
                <p lang="ru" className={examples} style={{ maxWidth }}>
                  {formatText(row.ru)}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
