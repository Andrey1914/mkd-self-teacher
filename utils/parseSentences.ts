import { Sentence, ParsedSentencePart } from "@/types";

export const parseSentences = (sentences: Sentence[]) => {
  return (sentences ?? []).map((s) => {
    const mkdText = s.mkd ?? "";
    let optionCounter = 0;

    const rawParts = mkdText.split(/(\[\[.*?\]\])/g);

    return rawParts.map((part): ParsedSentencePart => {
      if (part.startsWith("[[") && part.endsWith("]]")) {
        const rawOptions = part.slice(2, -2).split("/");
        const currentCorrect = s.answer?.[optionCounter] || "";
        const currentIndex = optionCounter;
        optionCounter++;

        return {
          isOption: true,
          optionIndex: currentIndex,
          correctAnswer: currentCorrect,
          options: rawOptions.map((opt) => ({
            raw: opt.trim(),
            formatted: opt.trim(),
          })),
        };
      }

      return {
        isOption: false,
        text: part,
      };
    });
  });
};
