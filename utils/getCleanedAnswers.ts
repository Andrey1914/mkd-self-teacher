// import { normalizeAnswer } from "@/utils";

// export const getCleanedAnswers = (
//   answers: string[] | undefined
// ): string[] | undefined => {
//   return answers?.map((answer) =>
//     normalizeAnswer(answer.replace(/\s+/g, " "), {
//       trim: true,
//       convertLatinToCyrillic: false,
//       lowercase: false,
//     })
//   );
// };

//---------------------------------------------------------------
// Новые универсальные утилиты

import { cleanAnswers } from "./core";

export const getCleanedAnswers = (
  answers: string[] | undefined
): string[] | undefined => {
  return cleanAnswers(answers, {
    trim: true,
    convertLatinToCyrillic: false,
    lowercase: false,
    collapseSpaces: true,
  });
};
