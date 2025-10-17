import { PayAttentionBlockProps } from "@/types";

export const payAttention1: PayAttentionBlockProps = {
  sections: [
    {
      type: "pay-attention-1",
      slug: "lesson-7",
      title: "ОБРАТИТЕ ВНИМАНИЕ!",
      content: {
        text: `Косвенный объект удваивается всегда. Если его опустить, смысл предложения может полностью измениться:
        `,
        words: [
          {
            mkd: `Му го чи*там пи*смото на е*ден при*jател.`,
            ru: `Я читаю письмо одному другу.`,
          },
          {
            mkd: `Го чи*там пи*смото на е*ден при*jател.`,
            ru: `Я читаю письмо одного друга.`,
          },
        ],
      },
    },
  ],
};
