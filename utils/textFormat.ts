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
        .map((p) => `<li><p style="margin:0 0 0.5rem 0">${p.trim()}</p></li>`)
        .join("")
    );
  }

  return parse(processed);
};
