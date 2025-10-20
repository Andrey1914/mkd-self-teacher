"use client";

import React from "react";

import { MultiFormatHeading } from "@/components/lesson/Heading";
import { ParagraphProps } from "@/types";
import { formatText } from "@/utils";

import { styles } from "./styles";

export const Paragraph = ({
  data,
  part,
  titleIconSrc,
  titleIconSize,
}: ParagraphProps) => {
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
              <MultiFormatHeading
                as="h2"
                data={title}
                iconSrc={titleIconSrc}
                iconSize={titleIconSize}
              />
            ) : Array.isArray(title) ? (
              <MultiFormatHeading
                as="h2"
                data={title}
                iconSrc={titleIconSrc}
                iconSize={titleIconSize}
              />
            ) : (
              <MultiFormatHeading
                as="h2"
                data={title}
                iconSrc={titleIconSrc}
                iconSize={titleIconSize}
              />
            )}
          </>
        )}

        {subtitle &&
          typeof subtitle === "object" &&
          !Array.isArray(subtitle) && (
            <MultiFormatHeading as="h3" data={subtitle} />
          )}
        {content?.intro && (
          <>
            {content.intro.subtitle && (
              <MultiFormatHeading as="h4" data={content.intro.subtitle} />
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
              <MultiFormatHeading
                as="h2"
                data={title}
                iconSrc={titleIconSrc}
                iconSize={titleIconSize}
              />
            ) : Array.isArray(title) ? (
              <MultiFormatHeading
                as="h2"
                data={title}
                iconSrc={titleIconSrc}
                iconSize={titleIconSize}
              />
            ) : (
              <MultiFormatHeading
                as="h2"
                data={title}
                iconSrc={titleIconSrc}
                iconSize={titleIconSize}
              />
            )}
          </>
        )}

        {subtitle && (
          <>
            {typeof subtitle === "string" ? (
              <MultiFormatHeading as="h3" data={subtitle} />
            ) : Array.isArray(subtitle) ? (
              <MultiFormatHeading as="h3" data={subtitle} />
            ) : (
              <MultiFormatHeading as="h3" data={subtitle} />
            )}
          </>
        )}

        {content?.subtitle && (
          <MultiFormatHeading as="h4" data={content.subtitle} />
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
            <MultiFormatHeading as="h3" data={subtitle} />
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
