import Link from "next/link";
import { formatText as utilsFormatText } from "@/utils";
import type {
  GrammarConfig,
  GrammarItem,
  LocalizedText,
} from "@/components/contents/types";

interface GrammarGeneratorProps {
  config: GrammarConfig;
}

export const GrammarGenerator = ({ config }: GrammarGeneratorProps) => {
  if (!config) {
    console.error(
      "GrammarGenerator: Свойство 'config' не передано или равно undefined!",
    );
    return (
      <div
        style={{
          color: "orange",
        }}
      >
        Секция грамматики не найдена.
      </div>
    );
  }

  const { lessonId, mainAnchor, title, items, scroll } = config;

  const renderContent = (
    text: string | string[] | LocalizedText,
    shouldFormat?: boolean,
  ) => {
    if (!text) return null;

    if (typeof text === "object" && "ru" in text) {
      return text.ru;
    }

    const stringValue = Array.isArray(text) ? text.join(", ") : text;
    return shouldFormat ? utilsFormatText(stringValue) : stringValue;
  };

  const RenderGrammarTree = ({
    nodes,
    level = 0,
  }: {
    nodes: GrammarItem[];
    level?: number;
  }) => {
    return (
      <ul style={{ listStyle: "none", paddingLeft: level > 0 ? "20px" : 0 }}>
        {nodes.map((node) => {
          if (!node || !node.text) return null;

          return (
            <li key={node.id}>
              <Link href={`/lesson/${lessonId}#${node.anchor}`} scroll={scroll}>
                <p style={{ margin: 0 }}>
                  {renderContent(node.text, node.formatText)}
                </p>
              </Link>

              {node.children && node.children.length > 0 && (
                <RenderGrammarTree nodes={node.children} level={level + 1} />
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <Link
        href={`/lesson/${lessonId}#${mainAnchor}`}
        style={{ display: "flex", gap: "8px", alignItems: "baseline" }}
        scroll={scroll}
      >
        <h3
          style={{
            display: "flex",
            flexDirection: "column",
            textIndent: 0,
            gap: "4px",
          }}
        >
          {title?.ru}
          <span>{title?.mkd}</span>
        </h3>
      </Link>

      <RenderGrammarTree nodes={items} />
    </>
  );
};
