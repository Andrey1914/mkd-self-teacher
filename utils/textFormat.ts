// import parse from "html-react-parser";

// export const formatText = (text: string) => {
//   if (typeof text !== "string" || !text.trim()) return null;

//   const withItalic = text.replace(
//     /\[([^\]]+)\]/g,
//     (_, inner) => `<em>${inner}</em>`
//   );

//   const withBold = withItalic.replace(
//     /«(.*?)»/g,
//     (_, inner) => `<strong>${inner}</strong>`
//   );

//   try {
//     return parse(withBold);
//   } catch (error) {
//     console.error("formatText parse error:", error, "TEXT:", withBold);
//     return text; // fallback
//   }
// };

import parse from "html-react-parser";

export const formatText = (text: string | undefined) => {
  if (!text) return null;

  // Курсив — [текст]
  const withItalic = text.replace(
    /\[([^\]]+)\]/g,
    (_, inner) => `<em>${inner}</em>`
  );

  // Жирный — «текст»
  const withBold = withItalic.replace(
    /«(.*?)»/g,
    (_, inner) => `<strong>${inner}</strong>`
  );

  return parse(withBold);
};

// export const formatText = (text: string) => {
//   const withItalic = text.replace(
//     /\[([^\]]+)\]/g,
//     (_, inner) => `<em>[${inner}]</em>`
//   );
//   const withBold = withItalic.replace(
//     /«(.*?)»/g,
//     (_, inner) => `<strong>${inner}</strong>`
//   );
//   return parse(withBold);
// };
