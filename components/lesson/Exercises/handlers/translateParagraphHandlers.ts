import { generateHighlightedText } from "@/utils";
import { TranslateParagraphHandlersDeps } from "./types";

export function createTranslateParagraphHandlers(
  deps: TranslateParagraphHandlersDeps,
) {
  const {
    correctAnswer,
    input,
    checked,
    editorRef,
    setInput,
    setChecked,
    setShowAnswer,
    setAnimationClass,
    revealAnimation,
    hideAnimation,
  } = deps;

  const handleCheck = () => {
    setChecked(true);
    setShowAnswer(false);

    if (editorRef.current) {
      editorRef.current.innerHTML = generateHighlightedText(
        input,
        correctAnswer,
      );
    }
  };

  const handleRevealAnswers = () => {
    setAnimationClass(revealAnimation);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const cleanAnswer = correctAnswer
          .replace(/\*\*(.*?)\*\*/g, "$1")
          // Remove optional (markers **), leaving the content
          .replace(/\((.*?)\)/g, "$1")
          // We remove any extra spaces that may remain.
          .replace(/\s+/g, " ")
          .trim();

        setInput(cleanAnswer);
        setChecked(false);
        setShowAnswer(true);

        if (editorRef.current) {
          editorRef.current.innerText = cleanAnswer;
        }

        setAnimationClass(revealAnimation);
      });
    });
  };

  const handleClear = () => {
    setAnimationClass(hideAnimation);

    setTimeout(() => {
      setInput("");
      setChecked(false);
      setShowAnswer(false);

      if (editorRef.current) {
        editorRef.current.innerText = "";
      }
    }, 100);
  };

  const handleInput = () => {
    if (!editorRef.current) return;

    const text = editorRef.current.innerText;
    setInput(text);

    if (checked) {
      setChecked(false);
    }
  };

  return {
    handleCheck,
    handleRevealAnswers,
    handleClear,
    handleInput,
  };
}
