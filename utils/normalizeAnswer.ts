export const normalizeAnswer = (
  input: string,
  options?: {
    trim?: boolean;
    lowercase?: boolean;
    convertLatinToCyrillic?: boolean;
    convertCyrillicToLatin?: boolean;
  }
): string => {
  const {
    trim = true,
    lowercase = true,
    convertLatinToCyrillic = true,
    convertCyrillicToLatin = false,
  } = options || {};

  let result = input;

  const cyrToLatMap: Record<string, string> = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    ѓ: "gj",
    е: "e",
    ж: "zh",
    з: "z",
    ѕ: "dz",
    и: "i",
    ј: "j",
    к: "k",
    л: "l",
    љ: "lj",
    м: "m",
    н: "n",
    њ: "nj",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    ќ: "kj",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    џ: "dj",
    ш: "sh",
  };

  const latToCyrDigraphs: Record<string, string> = {
    zh: "ж",
    ch: "ч",
    sh: "ш",
    gj: "ѓ",
    kj: "ќ",
    dz: "ѕ",
    lj: "љ",
    nj: "њ",
    dj: "џ",
  };

  const latToCyrMap: Record<string, string> = {
    j: "ј",
    a: "а",
    e: "е",
    o: "о",
    s: "с",
    p: "п",
    y: "у",
    k: "к",
    x: "х",
    v: "в",
    m: "м",
    h: "н",
    d: "д",
    t: "т",
    z: "з",
    l: "л",
    r: "р",
    c: "ц",
    g: "г",
    n: "н",
    u: "у",
    i: "и",
    f: "ф",
  };

  if (lowercase) result = result.toLowerCase();
  if (trim) result = result.trim();

  if (convertLatinToCyrillic) {
    Object.entries(latToCyrDigraphs).forEach(([latin, cyr]) => {
      result = result.replaceAll(latin, cyr);
    });

    result = result
      .split("")
      .map((char) => latToCyrMap[char] ?? char)
      .join("");
  }

  if (convertCyrillicToLatin) {
    result = result
      .split("")
      .map((char) => cyrToLatMap[char] ?? char)
      .join("");
  }

  return result;
};
