import { PayAttentionBlockProps } from "@/types/payAttantionTypes";

const payAttention3: PayAttentionBlockProps = {
  sections: [
    {
      type: "pay-attention",
      title: ["ОБРАТИТЕ ВНИМАНИЕ!"],
      attention: true,
      content: {
        text: `
            У глаголов на  <span>«-ои»</span> в формах 1-го л. ед. ч. и 3-го мн. ч. появляется <span>«j»</span>.        
            `.trim(),
      },
    },
  ],
};

export default payAttention3;
