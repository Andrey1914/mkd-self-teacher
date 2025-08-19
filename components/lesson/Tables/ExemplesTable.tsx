import React from "react";
import { ExampleSection } from "@/types";
import { formatText } from "@/utils";

export const ExamplesTable = ({ data }: { data: ExampleSection }) => {
  const { subtitle, content } = data;

  const renderTextParagraphs = (text: string | string[]) => {
    const textContent = Array.isArray(text) ? text.join("\n\n") : text;

    return textContent
      .split(/\n\s*\n/)
      .filter((line) => line.trim().length > 0)
      .map((paragraph, i) => (
        <p
          lang="ru"
          key={i}
          style={{
            marginBottom: 0,
            overflowWrap: "break-word",
            whiteSpace: "normal",
            hyphens: "auto",
          }}
        >
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
      <div>{content.subtitle && <h4>{formatText(content.subtitle)}</h4>}</div>
      <div>{content.text && <>{renderTextParagraphs(content.text)}</>}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          margin: "1rem 0",
          gap: "1rem",
        }}
      >
        {/* mkd */}
        <div>
          {content.words.map((row, idx) => (
            <p key={`mkd-example-${idx}`} style={{ marginBottom: "1rem" }}>
              {formatText(row.mkd)}
            </p>
          ))}
        </div>

        {/* ru */}
        <div>
          {content.words.map((row, idx) => (
            <p key={`ru-example-${idx}`} style={{ marginBottom: "1rem" }}>
              {formatText(row.ru)}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
