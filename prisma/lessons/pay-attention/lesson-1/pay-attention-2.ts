import { PayAttentionBlockProps } from "@/types/payAttantionTypes";

const payAttention2: PayAttentionBlockProps = {
  type: "pay-attention",
  title: ["ОБРАТИТЕ ВНИМАНИЕ!"],
  content: {
    text: `
        Слова <span>по\u0301вели</span> и <span>пове\u0301лете</span> используются, когда человек даёт что-то другому человеку,
        приглашает к какому-то действию (выражает готовность слушуть, пропустить и т.д.).        
        `.trim(),
  },
};

export default payAttention2;
