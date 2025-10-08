// export { normalizeAnswer } from "./normalizeAnswer";
// export { formatText } from "./textFormat";
// export { highlightInput } from "./hightlightInput";
// export { getTextWidth } from "./getTextWidth";
// export { resizeTextarea } from "./resizeTextarea";
// export { renderTitle } from "./renderTitle";
// export { getCleanedAnswers } from "./getCleanedAnswers";
// export * as exercisesUtils from "./exerciseUtils";

//-----------------------------------------------
// Новые универсальные утилиты
export * from "./core";

// Композитные утилиты для сложных операций
// export {
//   parseHighlightExercise,
//   determineExerciseConfig,
//   parseFillInPart,
//   resizeTextarea,
//   type WordState,
//   type Sentence,
// } from "./core/compositeUtils";

// Новые универсальные утилиты

// Композитные утилиты для сложных операций
// export * from "./core/compositeUtils";

// Обратная совместимость - старые утилиты
export { normalizeAnswer } from "./normalizeAnswer";
export { formatText } from "./textFormat";
export { highlightInput } from "./hightlightInput";
export { getTextWidth } from "./getTextWidth";
// export { resizeTextarea } from "./resizeTextarea";
export { renderTitle } from "./renderTitle";
export { getCleanedAnswers } from "./getCleanedAnswers";
export * as exercisesUtils from "./exerciseUtils";
