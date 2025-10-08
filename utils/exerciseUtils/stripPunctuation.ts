// export const stripPunctuation = (s: string) =>
//   (s ?? "").replace(
//     /^[^0-9A-Za-z\u0400-\u04FF]+|[^0-9A-Za-z\u0400-\u04FF]+$/g,
//     ""
//   );

import { stripPunctuation as coreStripPunctuation } from "@/utils/core";

export const stripPunctuation = (s: string) => coreStripPunctuation(s);
