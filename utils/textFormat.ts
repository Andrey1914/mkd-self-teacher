import parse from "html-react-parser";

const formatText = (text: string | undefined, keepEmptyLines = false) => {
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

// const formatText = (text: string | undefined) => {
//   if (!text) return null;

//   // Italic — [текст]
//   const withItalic = text
//     .replace(/\[\[([^\]]+)\]\]/g, (_, inner) => `<em>[[${inner}]]</em>`)
//     .replace(/\[([^\]]+)\]/g, (_, inner) => `<em>${inner}</em>`);

//   // Жирный — «текст»
//   const withBold = withItalic.replace(
//     /«(.*?)»/g,
//     (_, inner) => `<strong>${inner}</strong>`
//   );

//   return parse(withBold);
// };

export default formatText;
