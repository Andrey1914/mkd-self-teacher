import Link from "next/link";
import type {
  PhoneticsConfig,
  PhoneticsItem,
  LocalizedText,
} from "@/components/contents/types";

interface PhoneticsGeneratorProps {
  config: PhoneticsConfig;
}

export const PhoneticsGenerator = ({ config }: PhoneticsGeneratorProps) => {
  if (!config) {
    console.error("PhoneticsGenerator: 'config' не передан!");
    return <div style={{ color: "orange" }}>Секция фонетики не найдена.</div>;
  }

  const { lessonId, mainAnchor, title, items, scroll } = config;

  const renderItem = (item: PhoneticsItem, level: number = 0) => {
    if (!item || !item.text) return null;

    const isLocalized = typeof item.text === "object" && "ru" in item.text;

    const linkStyle: React.CSSProperties = {
      display: "flex",
      gap: "8px",
      alignItems: "baseline",
      paddingLeft: level > 0 ? `${level * 20}px` : 0,
    };

    return (
      <li key={item.id}>
        <Link
          href={`/lesson/${lessonId}#${item.anchor}`}
          style={linkStyle}
          scroll={scroll}
        >
          {isLocalized ? (
            <>
              <p style={{ margin: 0 }}>{(item.text as LocalizedText).ru}</p>
              <p style={{ margin: 0, textIndent: 0 }}>
                {(item.text as LocalizedText).mkd}
              </p>
            </>
          ) : (
            <p style={{ margin: 0 }}>{item.text as string}</p>
          )}
        </Link>

        {item.children && item.children.length > 0 && (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {item.children.map((child) => renderItem(child, level + 1))}
          </ul>
        )}
      </li>
    );
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
        {items.map((item) => renderItem(item, 0))}
      </ul>
    </>
  );
};
