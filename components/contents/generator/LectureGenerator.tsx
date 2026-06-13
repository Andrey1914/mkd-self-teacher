import Link from "next/link";
import { formatText } from "@/utils";
import type { LectureConfig, LocalizedText } from "@/components/contents/types";

interface LectureGeneratorProps {
  config: LectureConfig;
}

export const LectureGenerator = ({ config }: LectureGeneratorProps) => {
  if (!config) {
    console.error(
      "LectureGenerator: Свойство 'config' не передано или равно undefined!",
    );
    return (
      <div
        style={{
          color: "orange",
        }}
      >
        Секция лексики не найдена.
      </div>
    );
  }

  const { lessonId, mainAnchor, title, items, scroll } = config;

  const formatMacedonian = (textValue: string, shouldFormat?: boolean) => {
    return shouldFormat ? formatText(textValue) : textValue;
  };

  return (
    <>
      <Link
        href={`/lesson/${lessonId}#${mainAnchor}`}
        style={{ display: "flex", gap: "8px", alignItems: "baseline" }}
        scroll={scroll}
      >
        <h3 style={{ display: "flex", gap: "8px", textIndent: 0 }}>
          {title?.ru}
          <span>{title?.mkd}</span>
        </h3>
      </Link>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => {
          if (!item || !item.text) return null;

          const isString = typeof item.text === "string";

          const currentLayout = item.layout || "row";
          const isColumn = currentLayout === "column";

          const linkStyle: React.CSSProperties = {
            display: "flex",
            gap: isColumn ? "2px" : "8px",
            flexDirection: currentLayout,
            alignItems: isColumn ? "flex-start" : "baseline",
          };

          const paddingLeftValue = isColumn ? 20 : 0;

          return (
            <li key={item.id}>
              <Link
                href={`/lesson/${lessonId}#${item.anchor}`}
                style={linkStyle}
                scroll={scroll}
              >
                {isString ? (
                  <p style={{ margin: 0 }}>{item.text as string}</p>
                ) : (
                  <>
                    <p style={{ margin: 0 }}>
                      {(item.text as LocalizedText)?.ru}
                    </p>
                    <span style={{ paddingLeft: paddingLeftValue }}>
                      {formatMacedonian(
                        (item.text as LocalizedText)?.mkd,
                        item.formatMkd,
                      )}
                    </span>
                  </>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
