/**
 * Automatically resizes the height of a textarea based on its content.
 * @param el The textarea HTML element.
 * @param options An object with minRows and maxRows options.
 */
export const resizeTextarea = (
  el: HTMLTextAreaElement | null,
  options: { minRows: number; maxRows: number }
) => {
  if (!el) return;

  const { minRows, maxRows } = options;

  // // Reset the height to 'auto' to ensure scrollHeight is calculated correctly.
  el.style.height = "auto";

  const cs = window.getComputedStyle(el);
  const paddingTop = parseFloat(cs.paddingTop);
  const paddingBottom = parseFloat(cs.paddingBottom);

  // scrollHeight includes content and padding; subtract padding for the pure content height.
  const contentHeight = el.scrollHeight - paddingTop - paddingBottom;

  // Calculate the height of a single line. '1.5' is a fallback value.
  const lineHeight = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.5;

  const minHeight = minRows * lineHeight;
  const maxHeight = maxRows * lineHeight;

  // Calculate the new height, clamping it between min and max.
  const newHeight = Math.min(Math.max(contentHeight, minHeight), maxHeight);

  // Apply the new height, adding the padding back.
  el.style.height = `${newHeight + paddingTop + paddingBottom}px`;

  // Show the scrollbar only if the content exceeds the maximum height.
  el.style.overflowY = contentHeight > maxHeight ? "auto" : "hidden";
};
