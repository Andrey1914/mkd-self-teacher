import {
  PayAttentionBlockProps,
  SectionWithTables,
  DialogueBlockProps,
  ParagraphSectionsProps,
  GrammarTableProps,
  CountriesNationalitiesProps,
  // StaticExerciseSection,
  StaticExerciseData,
  FillInExerciseData,
  ParagraphExerciseProps,
} from "@/types";
import { VocabularyData } from "@/types/vocabularyTypes";

import { ConjugationTableSection } from "@/types/conjugationTypes";

export interface GlossaryEntryData {
  word: string;
  meaning: string;
  example?: string;
}

export type ExerciseType =
  | StaticExerciseData
  | FillInExerciseData
  | ParagraphExerciseProps;

export type TableBlockData =
  | GrammarTableProps
  | CountriesNationalitiesProps
  | ConjugationTableSection;

export interface LessonData {
  slug: string;
  title?: string[];
  sections?: SectionWithTables[];
  glossary?: GlossaryEntryData[];
  dialogues?: DialogueBlockProps[];
  paragraph?: ParagraphSectionsProps[];
  payAttention?: PayAttentionBlockProps[];
  tables?: TableBlockData[];
  vocabulary?: VocabularyData[];
  exercises?: ExerciseType[];
}
