export interface LocalizedText {
  ru: string;
  mkd: string;
}

export interface LectureItem {
  id: string;
  anchor: string;
  text: LocalizedText | string;
  formatMkd?: boolean;
  layout?: "row" | "column";
}

export interface LectureConfig {
  lessonId: number;
  mainAnchor: string;
  title: LocalizedText;
  items: LectureItem[];
  scroll?: boolean;
}
