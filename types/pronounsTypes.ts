export interface PronounTableRow {
  pronoun: string;
  dativeShort: string;
  dativeFull: string;
  accusativeShort: string;
  accusativeFull: string;
}

export interface PronounTableContent {
  dativeHeader: string; // Дательный падеж
  accusativeHeader: string; // Винительный падеж
  columns: string[]; // Заголовки подформ
  rows: PronounTableRow[];
  // subtitle: string[];
  // rows: PronounTableRow[];
}

export interface PronounTableProps {
  type: string;
  slug: "lesson-3";
  title?: string | string[];
  subtitle?: string[];
  text?: string[];
  content: PronounTableContent;

  data?: Partial<PronounTableProps>;
}
