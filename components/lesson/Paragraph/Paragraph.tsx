"use client";

import React from "react";
import { ParagraphSectionsProps } from "@/types";
import { formatText } from "@/utils";

interface ParagraphProps {
  data: ParagraphSectionsProps;
  part?: "title" | "text";
}

export const Paragraph = ({ data, part }: ParagraphProps) => {
  const { title, subtitle, content } = data;

  const renderTextParagraphs = (text: string | string[]) => {
    const fullText = Array.isArray(text) ? text.join("\n\n") : text;

    return fullText
      .split(/\n\s*\n/)
      .filter((line) => line.trim().length > 0)
      .map((paragraph, i) => (
        <p key={i} style={{ marginBottom: 0 }}>
          {formatText(paragraph)}
        </p>
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
            {content.intro.intro && <p>{formatText(content.intro.intro)}</p>}
            {content.intro.text && <p>{formatText(content.intro.text)}</p>}
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

  return null;
};
