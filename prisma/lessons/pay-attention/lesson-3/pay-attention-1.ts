import { PayAttentionBlockProps } from "@/types/payAttantionTypes";

const payAttention1: PayAttentionBlockProps = {
  sections: [
    {
      type: "pay-attention-1",
      slug: "lesson-3",
      title: ["ОБРАТИТЕ ВНИМАНИЕ!"],
      content: {
        text: `
        В македонском языке превосходная степень прилагательных и наречий образуется при помощи приставки
        <span>«наj-»</span>: <span>на\u0301jубав</span> «самый красивый», <span>на\u0301jмногу</span> «больше всего».
        
        Слова <span>пр\u0301впат</span> «(в) первый раз», <span>вто\u0301рпат</span> «(во) второй раз»,
        <span>тре\u0301тпат</span> «(в) третий раз» пишется слитно, начиная с <span>че\u0301тверти пат</span> - раздельно. Слова
        <span>два\u0301пати</span> «два раза» и т.д. пишутся слитно.

        Школьное образование в Македонии имеет две степени: <span>о\u0301сновно учи\u0301лиште</span> (1-9 классы) и
        <span>сре\u0301дно учи\u0301лиште</span> (10-12/13 классы).
        `.trim(),
      },
    },
  ],
};

export default payAttention1;
