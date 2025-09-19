import { formatText } from "./textFormat";
import { TablesProps } from "@/types";

export const renderTitle = (title: TablesProps["title"]) => {
  if (!title) return null;

  if (typeof title === "string") {
    return formatText(title);
  }

  if (Array.isArray(title)) {
    return title
      .map((t) => {
        if (typeof t === "string") return formatText(t);

        const obj = t as { ru?: string; mkd?: string };
        return formatText([obj.mkd, obj.ru].filter(Boolean).join(" "));
      })
      .join(", ");
  }

  const obj = title as { ru?: string; mkd?: string };
  return formatText([obj.ru, obj.mkd].filter(Boolean).join(" "));
};
