export interface PronounTableRow {
  pronoun: string;
  dativeShort: string;
  dativeFull: string;
  accusativeShort: string;
  accusativeFull: string;
}

export interface PronounTableContent {
  dativeHeader: string; // dative case
  accusativeHeader: string; // accusative case
  columns: string[]; // Заголовки подформ
  rows: PronounTableRow[];
}

export interface PronounTableProps {
  type: string;
  slug: string;
  title?: string | string[];
  subtitle?: string[];
  text?: string[];
  content: PronounTableContent;

  data?: Partial<PronounTableProps>;
}
