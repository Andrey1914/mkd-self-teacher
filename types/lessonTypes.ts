import {
  VocabularyData,
  PayAttentionBlockProps,
  SectionWithTables,
  DialogueBlockProps,
  ParagraphSectionsProps,
  GrammarTableProps,
  // CountriesNationalitiesProps,
  StaticExerciseData,
  FillInExerciseData,
  ParagraphExerciseProps,
  // AdjectivesTableBlock,
  NumeralsTableBlock,
  // ConjugationTableSection,
  GlossaryTableBlock,
  PronounTableProps,
  TablesProps,
} from "@/types";

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
  // | CountriesNationalitiesProps
  // | ConjugationTableSection
  // | AdjectivesTableBlock
  | NumeralsTableBlock
  | GlossaryTableBlock
  | PronounTableProps
  | TablesProps;

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
