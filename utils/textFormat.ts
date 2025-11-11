import parse from "html-react-parser";

export const formatText = (
  text: string | undefined,
  keepEmptyLines = false
) => {
  if (!text) return null;

  const gapHtml = `<span style="border-bottom: 1px solid currentColor; padding: 0 4px; line-height: 0.9; display: inline-block; min-width: 30px; text-decoration: none;">&nbsp;&nbsp;&nbsp;&nbsp;</span>`; // Accent processing - replace letter* with letter + combining accent mark

  let processed = text.replace(/([а-яёa-z])\*/gi, "$1\u0301");
  processed = processed.replace(/___/g, gapHtml);

  // Bold/Italic
  processed = processed
    .replace(/\[\[([^\]]+)\]\]/g, (_, inner) => `<em>[[${inner}]]</em>`)
    .replace(/\[([^\]]+)\]/g, (_, inner) => `<em>${inner}</em>`)
    .replace(/«(.*?)»/g, (_, inner) => `<strong>${inner}</strong>`);

  if (keepEmptyLines) {
    return parse(
      processed
        .split(/\n\s*\n/)
        .map((p) => `<p>${p.trim()}</p>`)
        .join("")
    );
  }

  return parse(processed);
};

// import parse from "html-react-parser";

// export const formatText = (
//   text: string | undefined,
//   keepEmptyLines = false
// ) => {
//   if (!text) return null;

//   // Accent processing - replace letter* with letter + combining accent mark
//   const withAccents = text.replace(/([а-яёa-z])\*/gi, "$1\u0301");
//   // Bold/Italic
//   const processed = withAccents
//     .replace(/\[\[([^\]]+)\]\]/g, (_, inner) => `<em>[[${inner}]]</em>`)
//     .replace(/\[([^\]]+)\]/g, (_, inner) => `<em>${inner}</em>`)
//     .replace(/«(.*?)»/g, (_, inner) => `<strong>${inner}</strong>`);

//   if (keepEmptyLines) {
//     return parse(
//       processed
//         .split(/\n\s*\n/)
//         .map((p) => `<p>${p.trim()}</p>`)
//         .join("")
//     );
//   }

//   return parse(processed);
// };
