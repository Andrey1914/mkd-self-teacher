import { MultiFormatHeading } from "@/components/lesson/Heading";
import { TablesProps } from "@/types";
import { formatText } from "@/utils";

import { styles } from "./styles";

export const ExamplesTable = ({
  data,
  titleIconSrc,
  id,
}: {
  data: TablesProps;
  titleIconSrc?: string;
  titleIconSize?: number;
  id?: string;
}) => {
  const { title, subtitle, content } = data;

  const {
    examples,
    paragraph,
    noIndent,
    markedParagraph,
    markedItem,
    markedList,
    flexContainer,
    gridContainer,
  } = styles.examples;

  const renderTextParagraphs = (text: string | string[]) => {
    const textContent = Array.isArray(text) ? text.join("\n\n") : text;

    const blocks = textContent
      .split(/\n\s*\n/)
      .filter((line) => line.trim().length > 0);

    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];

    const flushList = (key: number) => {
      if (!listItems.length) return;

      elements.push(
        <ul key={`list-${key}`} className={markedList}>
          {listItems.map((item, i) => (
            <li key={i} className={markedItem}>
              <p
                lang="ru"
                className={`${paragraph} ${noIndent} ${markedParagraph}`}
              >
                {formatText(item)}
              </p>
            </li>
          ))}
        </ul>,
      );

      listItems = [];
    };

    blocks.forEach((block, i) => {
      const trimmed = block.trim();

      if (trimmed.startsWith("- ")) {
        listItems.push(trimmed.replace(/^- /, "").trim());
        return;
      }

      flushList(i);

      elements.push(
        <p key={`p-${i}`} lang="ru" className={paragraph}>
          {formatText(block)}
        </p>,
      );
    });

    flushList(blocks.length);

    return elements;
  };

  if (!Array.isArray(content?.words)) {
    return null;
  }

  return (
    <div id={id}>
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
    </div>
  );
};
