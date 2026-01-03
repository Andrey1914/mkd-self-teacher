import { getCleanedAnswers } from "@/utils";
import { ParagraphExerciseHandlersDeps } from "./types";

export function createParagraphExerciseHandlers(
  deps: ParagraphExerciseHandlersDeps
) {
  const {
    sections,
    inputCount,
    inputs,
    setInputs,
    setChecked,
    setShowAnswers,
    setIsAutoFilled,
    setAnimationClass,
    revealAnimation,
    hideAnimation,
  } = deps;

  const handleChange = (value: string, idx: number) => {
    const updatedInputs = [...inputs];
    updatedInputs[idx] = value;
    setInputs(updatedInputs);

    setIsAutoFilled((prev) => {
      const next = [...prev];
      next[idx] = false;
      return next;
    });

    setChecked(false);
  };

  const handleRevealAnswers = () => {
    setAnimationClass(revealAnimation);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const cleanedAnswers = getCleanedAnswers(sections.content.answer);

        setInputs(cleanedAnswers ?? Array(inputCount).fill(""));
        setIsAutoFilled(Array(inputCount).fill(true));
        setShowAnswers(true);
        setChecked(false);
        setAnimationClass(revealAnimation);
      });
    });
  };

  const handleClear = () => {
    setAnimationClass(hideAnimation);

    setTimeout(() => {
      setInputs(Array(inputCount).fill(""));
      setIsAutoFilled(Array(inputCount).fill(false));
      setShowAnswers(false);
      setChecked(false);
      setAnimationClass("");
    }, 100);
  };

  const handleCheck = () => {
    setChecked(true);
    setShowAnswers(false);
    setAnimationClass("");
  };

  return {
    handleChange,
    handleRevealAnswers,
    handleClear,
    handleCheck,
  };
}
