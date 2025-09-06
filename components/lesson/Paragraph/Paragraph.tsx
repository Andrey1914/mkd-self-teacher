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
          <h2>{formatText(Array.isArray(title) ? title.join(", ") : title)}</h2>
        )}
        {subtitle && (
          <h3>
            {formatText(
              Array.isArray(subtitle) ? subtitle.join(", ") : subtitle
            )}
          </h3>
        )}
        {content?.intro && (
          <>
            {content.intro.subtitle && (
              <h4>
                {formatText(
                  Array.isArray(content.intro.subtitle)
                    ? content.intro.subtitle.join(", ")
                    : content.intro.subtitle
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
          <h2>{formatText(Array.isArray(title) ? title.join(", ") : title)}</h2>
        )}
        {subtitle && (
          <h3>
            {formatText(
              Array.isArray(subtitle) ? subtitle.join(", ") : subtitle
            )}
          </h3>
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
