/**
 * Выполняет "глубокое" рекурсивное сравнение двух значений (объектов, массивов, примитивов).
 * Эта функция типобезопасна и использует `unknown` вместо `any`.
 * @param a Первое значение для сравнения.
 * @param b Второе значение для сравнения.
 * @returns `true`, если значения идентичны по содержанию, иначе `false`.
 */
export const isDeepEqual = (a: unknown, b: unknown): boolean => {
  // 1. Строгое равенство (для примитивов и одинаковых ссылок)
  if (a === b) return true;

  // 2. Проверка, являются ли оба значения объектами (не null)
  if (
    typeof a !== "object" ||
    a === null ||
    typeof b !== "object" ||
    b === null
  ) {
    return false;
  }

  // 3. Сравнение массивов
  const isArrayA = Array.isArray(a);
  const isArrayB = Array.isArray(b);
  if (isArrayA && isArrayB) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!isDeepEqual(a[i], b[i])) return false;
    }
    return true;
  }
  if (isArrayA !== isArrayB) return false;

  // 4. Сравнение объектов
  const objA = a as Record<string, unknown>;
  const objB = b as Record<string, unknown>;
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (
      !Object.prototype.hasOwnProperty.call(objB, key) ||
      !isDeepEqual(objA[key], objB[key])
    ) {
      return false;
    }
  }

  return true;
};
