import {
  VocabularyData,
  PayAttentionBlockProps,
  SectionWithTables,
  DialogueBlockProps,
  ParagraphSectionsProps,
  TablesProps,
  ExercisesProps,
} from "@/types";

export interface GlossaryEntryData {
  word: string;
  meaning: string;
  example?: string;
}

export type TableBlockData = TablesProps;

export interface LessonData {
  slug: string;
  numericId: number;
  title?: { ru: string; mkd: string } | string | string[];
  sections?: SectionWithTables[];
  glossary?: GlossaryEntryData[];
  dialogues?: DialogueBlockProps[];
  paragraph?: ParagraphSectionsProps[];
  payAttention?: PayAttentionBlockProps[];
  tables?: TableBlockData[];
  vocabulary?: VocabularyData[];
  exercises?: ExercisesProps[];

  // data?: Partial<LessonData>;
}
