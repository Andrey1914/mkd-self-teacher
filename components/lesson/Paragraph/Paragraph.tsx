"use client";

import React from "react";
import { ParagraphProps } from "@/types";
import { formatText } from "@/utils";

import { styles } from "./styles";

export const Paragraph = ({ data, part }: ParagraphProps) => {
  const { title, subtitle, intro, content } = data;

  const { paragraph, markedParagraph, markedItem, markedList } =
    styles.paragraph;

  const renderTextParagraphs = (text: string | string[]) => {
    const fullText = Array.isArray(text) ? text.join("\n\n") : text;

    return fullText
      .split(/\n\s*\n/)
      .filter((line) => line.trim().length > 0)
      .map((p, i) => (
        <p lang="ru" key={i} className={paragraph}>
          {formatText(p)}
        </p>
      ));
  };

  const markedTextParagraphs = (text: string | string[]) => {
    const fullText = Array.isArray(text) ? text.join("\n\n") : text;

    return fullText
      .split(/\n\s*\n/)
      .filter((line) => line.trim().length > 0)
      .map((item, i) => (
        <li key={i} className={markedItem}>
          <p key={i} lang="ru" className={markedParagraph}>
            {formatText(item)}
          </p>
        </li>
      ));
  };

  if (part === "title") {
    return (
      <>
        {title && (
          <>
            {typeof title === "string" ? (
              <h2>{formatText(title)}</h2>
            ) : Array.isArray(title) ? (
              <h2>{formatText(title.join(", "))}</h2>
            ) : (
              <h2 style={{ display: "flex", flexDirection: "column" }}>
                {title.ru && <>{formatText(title.ru)}</>}
                {title.mkd && <span>{formatText(title.mkd)}</span>}
              </h2>
            )}
          </>
        )}

        {subtitle &&
          typeof subtitle === "object" &&
          !Array.isArray(subtitle) && (
            <h3 style={{ display: "flex", flexDirection: "column" }}>
              {subtitle.ru && <>{formatText(subtitle.ru)}</>}
              <span>{subtitle.mkd && <>{formatText(subtitle.mkd)}</>}</span>
            </h3>
          )}
        {content?.intro && (
          <>
            {content.intro.subtitle && (
              <h4 style={{ display: "flex", flexDirection: "column" }}>
                {typeof content.intro.subtitle === "string" ? (
                  formatText(content.intro.subtitle)
                ) : Array.isArray(content.intro.subtitle) ? (
                  formatText(content.intro.subtitle.join(", "))
                ) : (
                  <>
                    {formatText(content.intro.subtitle.ru)}
                    <span>{formatText(content.intro.subtitle.mkd)}</span>
                  </>
                )}
              </h4>
            )}
            {content.intro.intro && (
              <p lang="ru" className={paragraph}>
                {formatText(content.intro.intro)}
              </p>
            )}
            {content.intro.text && (
              <>{renderTextParagraphs(content.intro.text)}</>
            )}
          </>
        )}
      </>
    );
  }

  if (part === "text") {
    return (
      <>
        {content?.text && (
          <>{content?.text && renderTextParagraphs(content.text)}</>
        )}
      </>
    );
  }

  if (!part) {
    return (
      <>
        {title && (
          <>
            {typeof title === "string" ? (
              <h2>{formatText(title)}</h2>
            ) : Array.isArray(title) ? (
              <h2>{formatText(title.join(", "))}</h2>
            ) : (
              <h2 style={{ display: "flex", flexDirection: "column" }}>
                {title.ru && <>{formatText(title.ru)}</>}
                {title.mkd && <span>{formatText(title.mkd)}</span>}
              </h2>
            )}
          </>
        )}

        {subtitle && (
          <>
            {typeof subtitle === "string" ? (
              <h3>{formatText(subtitle)}</h3>
            ) : Array.isArray(subtitle) ? (
              <h3>{formatText(subtitle.join(", "))}</h3>
            ) : (
              <h3 style={{ display: "flex", flexDirection: "column" }}>
                {subtitle.ru && <>{formatText(subtitle.ru)}</>}
                {subtitle.mkd && <span>{formatText(subtitle.mkd)}</span>}
              </h3>
            )}
          </>
        )}

        {content?.subtitle && (
          <h4>
            {formatText(
              Array.isArray(content.subtitle)
                ? content.subtitle.join(", ")
                : content.subtitle
            )}
          </h4>
        )}
        {content?.text && (
          <>{content?.text && renderTextParagraphs(content.text)}</>
        )}
      </>
    );
  }

  if (part === "marked") {
    return (
      <>
        {subtitle &&
          typeof subtitle === "object" &&
          !Array.isArray(subtitle) && (
            <h3 style={{ display: "flex", flexDirection: "column" }}>
              {subtitle.ru && <>{formatText(subtitle.ru)}</>}
              <span>{subtitle.mkd && <>{formatText(subtitle.mkd)}</>}</span>
            </h3>
          )}
        {intro && (
          <p>{formatText(Array.isArray(intro) ? intro.join(", ") : intro)}</p>
        )}
        {content?.text && (
          <ul className={markedList}>
            {content?.text && markedTextParagraphs(content.text)}
          </ul>
        )}
      </>
    );
  }

  return null;
};
