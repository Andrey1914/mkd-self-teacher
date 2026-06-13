import { ComponentType } from "react";
import { LessonData } from "@/types";

export interface CustomBlock {
  id: string;
  type: "custom";
  component: ComponentType;
}

export type LessonBlockConfig =
  | { type: "lecture"; configKey: string }
  | { type: "grammar"; configKey: string }
  | CustomBlock;

export interface LessonConfig {
  lessonId: number;
  blocks: LessonBlockConfig[];
}

export interface LectureConfig {
  lessonId: number;
  mainAnchor: string;
  title: LocalizedText;
  items: LectureItem[];
  scroll?: boolean;
  lessonData?: LessonData;
}

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

export interface GrammarItem {
  id: string;
  anchor: string;
  text: string | string[] | LocalizedText;
  formatText?: boolean;
  children?: GrammarItem[];
}

export interface GrammarConfig {
  lessonId: number;
  mainAnchor: string;
  title: LocalizedText;
  items: GrammarItem[];
  scroll?: boolean;
}
