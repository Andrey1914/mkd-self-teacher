import { ParagraphSectionsProps } from "@/types";

const personalPronouns: ParagraphSectionsProps = {
  type: "personal-pronouns",
  title: ["ГРАММАТИКА", "<span>ГРАМАТИКА</span>"],
  subtitle: ["ЛИЧНЫЕ МЕСТОИМЕНИЯ"],
  content: {
    text: `
    В македонском языке у личных местоимений <span>јас</span>, <span>ти</span>, <span>тој</span>, <span>то\u0301а</span>,
    <span>та\u0301а</span>, <span>ни\u0301е</span>, <span>ви\u0301е</span>, <span>ти\u0301е</span>, возвратного местоимения
    <span>себе</span> есть полные и краткие формы дательного падежа (отвечает на вопросы [кому? чему?]) и винительного (отвечает на
    вопросы [кого? что?]). У относительно-вопросительного местоимения <span>кој</span> и образованных от него есть только полные формы.`,
  },
};

export default personalPronouns;
