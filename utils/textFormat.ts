import parse from "html-react-parser";

export const formatText = (
  text: string | undefined,
  keepEmptyLines = false
) => {
  if (!text) return null;

  // Accent processing - replace letter* with letter + combining accent mark
  const withAccents = text.replace(/([а-яёa-z])\*/gi, "$1\u0301");
  // Bold/Italic
  const processed = withAccents
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

// export const formatText = (
//   text: string | undefined,
//   keepEmptyLines = false
// ) => {
//   if (!text) return null;

//   // Accent processing - replace letter* with letter + combining accent mark
//   const withAccents = text.replace(/([а-яёa-z])\*/gi, "$1\u0301");

//   // Bold/Italic formatting
//   const processed = withAccents
//     .replace(/\[\[([^\]]+)\]\]/g, (_, inner) => `<em>[[${inner}]]</em>`)
//     .replace(/\[([^\]]+)\]/g, (_, inner) => `<em>${inner}</em>`)
//     .replace(/«(.*?)»/g, (_, inner) => `<strong>${inner}</strong>`);

//   if (keepEmptyLines) {
//     return parse(
//       processed
//         .split(/\s*/)
//         .map((p) => `<li><p style=\"margin:0 0 0.5rem 0\">${p.trim()}</p></li>`)
//         .join("")
//     );
//   }

//   return parse(processed);
// };
