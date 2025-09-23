// Вспомогательная функция для нормализации текста
export const normalizeText = (text: string): string =>
  (text ?? "")
    .replace(/<[^>]*>/g, "") // Убрать HTML теги
    .replace(/\u0301/g, "") // Убрать знаки ударения
    .replace(/\s+/g, " ") // Схлопнуть пробелы
    .trim()
    .toLowerCase();
