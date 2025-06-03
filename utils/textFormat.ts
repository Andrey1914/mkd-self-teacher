import parse from "html-react-parser";

export const formatText = (text: string) => {
  const withItalic = text.replace(
    /\[([^\]]+)\]/g,
    (_, inner) => `<em>[${inner}]</em>`
  );
  const withBold = withItalic.replace(
    /«(.*?)»/g,
    (_, inner) => `<strong>${inner}</strong>`
  );
  return parse(withBold);
};
