import React from "react";
import { TablesProps } from "@/types";
import { formatText } from "@/utils";

import { styles } from "./styles";

export const ExamplesTable = ({ data }: { data: TablesProps }) => {
  const { subtitle, content } = data;

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

  if (
    !Array.isArray(content?.words) ||
    !content.words.every((row) => "mkd" in row && "ru" in row)
  ) {
    return null;
  }

  return (
    <>
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
        {content.words.map((row, idx) => (
          <div key={`row-${idx}`} className={gridContainer}>
            {/* mkd */}
            <p className={examples}>{formatText(`<span>${row.mkd}</span>`)}</p>
            {/* ru */}
            <p lang="ru" className={examples}>
              {formatText(row.ru)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
