import { ComponentType } from "react";
import { LessonData } from "@/types";

export interface LocalizedText {
  ru: string;
  mkd: string;
}

export interface CustomBlock {
  id: string;
  type: "custom";
  component: ComponentType;
}

interface BaseItem {
  id: string;
  anchor: string;
  text: LocalizedText | string | string[];
}

export interface LectureItem extends BaseItem {
  formatMkd?: boolean;
  layout?: "row" | "column";
}

export interface PhoneticsItem extends BaseItem {
  children?: PhoneticsItem[];
}

export interface GrammarItem extends BaseItem {
  formatText?: boolean;
  children?: GrammarItem[];
}

interface BaseConfig {
  lessonId: number;
  mainAnchor: string;
  title: LocalizedText;
  scroll?: boolean;
}

export interface LectureConfig extends BaseConfig {
  items: LectureItem[];
  lessonData?: LessonData;
}

export interface PhoneticsConfig extends BaseConfig {
  items: PhoneticsItem[];
}

export interface GrammarConfig extends BaseConfig {
  items: GrammarItem[];
}

export type LessonBlockConfig =
  | { type: "lecture"; configKey: string }
  | { type: "grammar"; configKey: string }
  | { type: "phonetics"; configKey: string }
  | CustomBlock;

export interface LessonConfig {
  lessonId: number;
  blocks: LessonBlockConfig[];
}
