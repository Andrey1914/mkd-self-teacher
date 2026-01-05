import type { HighlightWordsHandlersDeps } from "./types";

export function createHighlightWordsHandlers(deps: HighlightWordsHandlersDeps) {
  const {
    initialWordsState,
    showAnswer,
    setWordsState,
    setChecked,
    setShowAnswer,
  } = deps;

  const handleWordClick = (index: number) => {
    if (showAnswer) return;

    setChecked(false);

    setWordsState((prev) => {
      const newState = [...prev];
      const wordState = newState[index];

      if (wordState.userStyle === "normal") {
        wordState.userStyle = "bold";
      } else if (wordState.userStyle === "bold") {
        wordState.userStyle = "italic";
      } else {
        wordState.userStyle = "normal";
      }

      wordState.status = "unchecked";
      wordState.touched = true;

      return newState;
    });
  };

  const handleCheck = () => {
    setChecked(true);
    setShowAnswer(false);

    setWordsState((prev) =>
      prev.map((wordState) => {
        if (!wordState.isWord || !wordState.touched) {
          return { ...wordState, status: "unchecked" };
        }

        const isCorrect = wordState.userStyle === wordState.correctStyle;

        return {
          ...wordState,
          status: isCorrect ? "correct" : "incorrect",
        };
      })
    );
  };

  const handleRevealAnswers = () => {
    setChecked(false);
    setShowAnswer(true);

    setWordsState((prev) =>
      prev.map((wordState) =>
        !wordState.isWord
          ? wordState
          : {
              ...wordState,
              userStyle: wordState.correctStyle,
              status:
                wordState.correctStyle !== "normal" ? "correct" : "unchecked",
            }
      )
    );
  };

  const handleClear = () => {
    setChecked(false);
    setShowAnswer(false);

    setWordsState(
      initialWordsState.map((w) => ({
        ...w,
        userStyle: "normal",
        status: "unchecked",
        touched: false,
      }))
    );
  };

  return {
    handleWordClick,
    handleCheck,
    handleRevealAnswers,
    handleClear,
  };
}
