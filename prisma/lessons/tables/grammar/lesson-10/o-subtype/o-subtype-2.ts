import { TablesProps } from "@/types";

export const oSubtype2: TablesProps = {
  type: `o-subtype-2`,
  slug: "lesson-10",
  text: `В некоторых глаголах, оканчивающихся на <span>-же</span>, <span>-че</span>, <span>-зе</span>, помимо чередования <span>е</span> 
  на <span>о</span> дополнительно происходит чередование <span>ж</span> на <span>г</span>, <span>ч</span> на <span>к</span>,
  <span>з</span> на <span>г</span>.`,
  content: {
    subtitle: [" ", "по*стриже", "ре*че", "и*злезе"],
    rows: [
      {
        person: "јас",
        forms: ["по*стриго-в", "ре*ко-в", "и*злего-в"],
      },
      {
        person: "ти",
        forms: ["по*стриже", "ре*че", "и*злезе"],
      },
      {
        person: "тој, та*а, то*а",
        forms: ["по*стриже", "ре*че", "и*злезе"],
      },
      {
        person: "ни*е",
        forms: ["постри*го-вме", "ре*ко-вме", "изле*го-вме"],
      },
      {
        person: "ви*е",
        forms: ["постри*го-вте", "ре*ко-вте", "изле*го-вте"],
      },
      {
        person: "ти*е",
        forms: ["по*стриго-а", "ре*ко-а", "и*злего-а"],
      },
    ],
  },
};
