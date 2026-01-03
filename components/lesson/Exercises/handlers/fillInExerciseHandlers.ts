import { FillInHandlersDeps } from "./types";

export function createFillInExerciseHandlers(deps: FillInHandlersDeps) {
  const {
    sentences,
    activeSentences,
    draggableWords,
    answerSet,
    activeIndex,
    setActiveIndex,
    inputRefs,
    initializeFillInState,
    getCorrectFillInAnswers,
    getInputWidth,
    returnWord,
    resetUsedWords,
    setInputs,
    setIsAutoFilled,
    setChecked,
    setShowAnswers,
  } = deps;

  const getTarget = () => (activeSentences ?? sentences) || [];

  const handleNext = () => {
    if (
      answerSet &&
      Array.isArray(answerSet.labels) &&
      activeIndex < answerSet.labels.length - 1
    ) {
      setActiveIndex((i) => i + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((i) => i - 1);
    }
  };

  const handleRevealAnswers = () => {
    const { correctInputs, correctFlags } = getCorrectFillInAnswers(
      getTarget()
    );

    const cleanInputs = correctInputs.map((sentence) =>
      sentence.map((answer) =>
        typeof answer === "string"
          ? answer
              .replace(/\*\*(.*?)\*\*/g, "$1")
              .replace(/\((.*?)\)/g, "$1")
              .replace(/\s+/g, " ")
              .trim()
          : ""
      )
    );

    cleanInputs.forEach((sentence, sIdx) => {
      sentence.forEach((answer, wIdx) => {
        const ref = inputRefs.current[sIdx * 10 + wIdx];
        if (ref) {
          ref.style.setProperty("--input-width", `${getInputWidth(answer)}px`);
        }
      });
    });

    setInputs(cleanInputs);
    setIsAutoFilled(correctFlags);
    setChecked(false);
    setShowAnswers(true);
  };

  const handleChange = (
    value: string,
    sentenceIdx: number,
    wordIdx: number
  ) => {
    setChecked(false);
    setShowAnswers(false);

    setInputs((prev) => {
      const next = [...prev];
      const oldValue = next[sentenceIdx]?.[wordIdx];

      if (oldValue && draggableWords && oldValue !== value) {
        const poolIndex = draggableWords.indexOf(oldValue);
        if (poolIndex !== -1) returnWord(poolIndex);
      }

      next[sentenceIdx][wordIdx] = value;
      return next;
    });

    setIsAutoFilled((prev) => {
      const next = [...prev];
      next[sentenceIdx][wordIdx] = false;
      return next;
    });

    const ref = inputRefs.current[sentenceIdx * 10 + wordIdx];
    if (ref) {
      ref.style.setProperty("--input-width", `${getInputWidth(value)}px`);
    }
  };

  const handleCheck = () => {
    setChecked(true);
    setShowAnswers(false);
  };

  const handleClear = () => {
    inputRefs.current.forEach((ref) => {
      if (!ref) return;
      const { style } = ref;
      style.setProperty("--input-width", "60px");

      if (ref.innerText !== undefined) {
        ref.innerText = "";
      }

      style.color = "inherit";
      style.boxShadow = "inherit";
      style.fontWeight = "normal";
    });

    const { initialInputs, initialFlags } = initializeFillInState(getTarget());

    setInputs(initialInputs);
    setIsAutoFilled(initialFlags);
    setChecked(false);
    setShowAnswers(false);
    resetUsedWords();
  };

  return {
    handleNext,
    handlePrev,
    handleRevealAnswers,
    handleChange,
    handleCheck,
    handleClear,
  };
}
