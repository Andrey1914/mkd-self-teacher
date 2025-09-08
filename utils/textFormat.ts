import parse from "html-react-parser";

export const formatText = (
  text: string | undefined,
  keepEmptyLines = false
) => {
  if (!text) return null;

  // Жирный/курсив
  const processed = text
    .replace(/\[\[([^\]]+)\]\]/g, (_, inner) => `<em>[[${inner}]]</em>`)
    .replace(/\[([^\]]+)\]/g, (_, inner) => `<em>${inner}</em>`)
    .replace(/«(.*?)»/g, (_, inner) => `<strong>${inner}</strong>`);

  if (keepEmptyLines) {
    return parse(
      processed
        .split(/\n\s*\n/)
        .map((p) => `<div style="margin:0 0 1rem 0">${p.trim()}</div>`)
        .join("")
    );
  }

  return parse(processed);
};
