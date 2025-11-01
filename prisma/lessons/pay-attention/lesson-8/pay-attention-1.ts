import { PayAttentionBlockProps } from "@/types";

export const payAttention1: PayAttentionBlockProps = {
  sections: [
    {
      type: "pay-attention-1",
      slug: "lesson-8",
      title: "ОБРАТИТЕ ВНИМАНИЕ!",
      content: {
        text: `Не путайте данные союзы с вопросительными местоимениями в роли союзов в изъяснительных и определённых предложниях:`,
        words: [
          {
            mkd: `Пра*шувам чи*е де*те е то*а.`,
            ru: `Я спрашиваю, чей это ребёнок.`,
          },
          {
            mkd: `То*а е же*ната чи*е/чи*ешто де*те ми по*мага.`,
            ru: `Это женщина, ребёнок которой мне помогает.`,
          },
        ],
      },
    },
  ],
};
