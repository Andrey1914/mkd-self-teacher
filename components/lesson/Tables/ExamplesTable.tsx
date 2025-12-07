import { MultiFormatHeading } from "@/components/lesson/Heading";
import { TablesProps } from "@/types";
import { formatText } from "@/utils";

import { styles } from "./styles";

export const ExamplesTable = ({
  data,
  titleIconSrc,
}: {
  data: TablesProps;
  titleIconSrc?: string;
  titleIconSize?: number;
}) => {
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
        <MultiFormatHeading as="h2" data={title} iconSrc={titleIconSrc} />
      )}

      {subtitle && <MultiFormatHeading as="h3" data={subtitle} />}

      <>{content.subtitle && <MultiFormatHeading as="h4" data={subtitle} />}</>
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
