import { Sentence, AnswerSet, ExercisesProps } from "@/types";

export type FillInHandlersDeps = {
  sentences?: Sentence[];
  activeSentences?: Sentence[];
  draggableWords: string[] | null;

  answerSet?: AnswerSet;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;

  inputRefs: React.RefObject<(HTMLDivElement | null)[]>;

  initializeFillInState: (target: Sentence[]) => {
    initialInputs: string[][];
    initialFlags: boolean[][];
  };

  getCorrectFillInAnswers: (target: Sentence[]) => {
    correctInputs: (string | undefined)[][];
    correctFlags: boolean[][];
  };

  getInputWidth: (value: string) => number;
  returnWord: (index: number) => void;
  resetUsedWords: () => void;

  setInputs: React.Dispatch<React.SetStateAction<string[][]>>;
  setIsAutoFilled: React.Dispatch<React.SetStateAction<boolean[][]>>;
  setChecked: (v: boolean) => void;
  setShowAnswers: (v: boolean) => void;
};

export type ParagraphExerciseHandlersDeps = {
  sections: ExercisesProps["sections"][number];
  inputCount: number;

  inputs: string[];

  setInputs: React.Dispatch<React.SetStateAction<string[]>>;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAnswers: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAutoFilled: React.Dispatch<React.SetStateAction<boolean[]>>;
  setAnimationClass: React.Dispatch<React.SetStateAction<string>>;

  revealAnimation: string;
  hideAnimation: string;
};
