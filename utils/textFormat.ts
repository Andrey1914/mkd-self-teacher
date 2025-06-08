import parse from "html-react-parser";

const formatText = (text: string | undefined) => {
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

export default formatText;
