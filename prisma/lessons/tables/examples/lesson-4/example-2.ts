import { TablesProps } from "@/types";

export const example2: TablesProps = {
  slug: "lesson-4",
  type: "example-2",
  content: {
    text: `Частицу <span>ќе</span> нельзя опускать:
    `,
    words: [
      {
        mkd: `Ќе пли\u0301вам, ќе се со\u0301нчам и ќе спи\u0301jам.`,
        ru: `Я буду плавать, загорать и спать.`,
      },
    ],
  },
};
