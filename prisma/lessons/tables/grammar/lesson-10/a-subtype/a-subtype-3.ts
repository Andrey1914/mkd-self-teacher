import { TablesProps } from "@/types";

export const aSubtype3: TablesProps = {
  type: `a-subtype-3`,
  slug: "lesson-10",
  text: `В некоторых глаголах, оканчивающихся на <span>-же</span>, <span>-че</span>, <span>-ере</span>, помимо чередования <span>е</span> 
  на <span>а</span> дополнительно происходит чередование <span>ж</span> на <span>г</span>, <span>ч</span> на <span>к</span>,
  <span>ере</span> на <span>р</span>.`,
  content: {
    subtitle: [" ", "и*струже", "за*плаче", "и*збере"],
    rows: [
      {
        person: "јас",
        forms: ["и*струга-в", "за*плака-в", "и*збра-в"],
      },
      {
        person: "ти",
        forms: ["и*струга", "за*плака", "и*збра"],
      },
      {
        person: "тој, та*а, то*а",
        forms: ["и*струга", "за*плака", "и*збра"],
      },
      {
        person: "ни*е",
        forms: ["истру*га-вме", "запла*ка-вме", "и*збра-вме"],
      },
      {
        person: "ви*е",
        forms: ["истру*га-вте", "запла*ка-вте", "и*збра-вте"],
      },
      {
        person: "ти*е",
        forms: ["истру*га-а", "запла*ка-а", "и*збра-а"],
      },
    ],
  },
};
