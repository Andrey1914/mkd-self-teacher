import React from "react";
import { TablesProps } from "@/types";
import { formatText } from "@/utils";

export const ExamplesTable = ({ data }: { data: TablesProps }) => {
  const { subtitle, content } = data;

  const renderTextParagraphs = (text: string | string[]) => {
    const textContent = Array.isArray(text) ? text.join("\n\n") : text;

    return textContent
      .split(/\n\s*\n/)
      .filter((line) => line.trim().length > 0)
      .map((paragraph, i) => (
        <p lang="ru" key={i} style={{ marginBottom: 0 }}>
          {formatText(paragraph)}
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
      <div>
        {content.subtitle && (
          <h4>
            {Array.isArray(content.subtitle)
              ? formatText(content.subtitle.join(", "))
              : formatText(content.subtitle)}
          </h4>
        )}
      </div>
      <div>{content.text && <>{renderTextParagraphs(content.text)}</>}</div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "1rem 0",
          justifyItems: "center",
        }}
      >
        {content.words.map((row, idx) => (
          <div
            key={`row-${idx}`}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              justifyItems: "center",
            }}
          >
            {/* mkd */}
            <p
              style={{
                margin: 0,
                padding: "0 0 0.5rem 0 ",
                textIndent: 0,
                textAlign: "left",
                width: "100%",
                maxWidth: "250px",
              }}
            >
              {formatText(`<span>${row.mkd}</span>`)}
            </p>
            {/* ru */}
            <p
              lang="ru"
              style={{
                margin: 0,
                padding: "0 0 0.5rem 0 ",
                textIndent: 0,
                textAlign: "left",
                width: "100%",
                maxWidth: "300px",
              }}
            >
              {formatText(row.ru)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
