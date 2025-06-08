const getTextWidth = (text: string, font = "16px Arial") => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return 60;
  ctx.font = font;
  return ctx.measureText(text).width + 12;
};

export default getTextWidth;
