"use client";

import { useState, useEffect, useMemo } from "react";
import type { ExercisesProps, WordState } from "@/types";
import { formatText, exercisesUtils } from "@/utils";
import { ControlButtons } from "./ControlButtons";

import { styles } from "./styles";

export const HighlightWordsExercise = ({ data }: { data: ExercisesProps }) => {
  const section = data.sections[0];
  const originalText = section.content.original ?? "";
  const answerText = section.content.answer?.[0] ?? "";

  const [wordsState, setWordsState] = useState<WordState[]>([]);
  const [checked, setChecked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const { parseHighlightExercise } = exercisesUtils;

  const { word, normal, bold, italic, correct, incorrect } =
    styles.highlightWords;

  const initialWordsState = useMemo(
    () => parseHighlightExercise(originalText, answerText),
    [originalText, answerText, parseHighlightExercise]
  );

  useEffect(() => {
    setWordsState(initialWordsState);
  }, [initialWordsState]);

  const handleWordClick = (index: number) => {
    if (showAnswer) return;

    setChecked(false);
    setWordsState((prev) => {
      const newState = [...prev];
      const wordState = newState[index];

      if (wordState.userStyle === "normal") wordState.userStyle = "bold";
      else if (wordState.userStyle === "bold") wordState.userStyle = "italic";
      else wordState.userStyle = "normal";

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
        return { ...wordState, status: isCorrect ? "correct" : "incorrect" };
      })
    );
  };

  const handleReveal = () => {
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

  const getStyleClass = (style: "normal" | "bold" | "italic") => {
    switch (style) {
      case "bold":
        return bold;
      case "italic":
        return italic;
      default:
        return normal;
    }
  };

  const getStatusClass = (status: "unchecked" | "correct" | "incorrect") => {
    switch (status) {
      case "correct":
        return correct;
      case "incorrect":
        return incorrect;
      default:
        return "";
    }
  };

  return (
    <section style={{ margin: "2rem 0" }}>
      {section.prompt?.map((text, i) => (
        <ul key={i} style={{ marginBottom: "1rem" }}>
          <li>
            <p>
              <strong>{data.title}. </strong>
            </p>
          </li>
          {formatText(text, true)}
        </ul>
      ))}

      <div
        style={{
          padding: "0 0.5rem 2rem 0.5rem",
          lineHeight: "2",
          userSelect: showAnswer ? "none" : "auto",
        }}
      >
        {wordsState.map((wordState, index) =>
          wordState.isWord ? (
            <span
              key={index}
              className={`${word} ${getStyleClass(wordState.userStyle)} ${
                checked || showAnswer ? getStatusClass(wordState.status) : ""
              }`}
              onClick={() => handleWordClick(index)}
            >
              {formatText(wordState.text)}
            </span>
          ) : (
            <span key={index}>{formatText(wordState.text)}</span>
          )
        )}
      </div>

      <ControlButtons
        onCheck={handleCheck}
        onReveal={handleReveal}
        onClear={handleClear}
        showAnswers={showAnswer}
      />
    </section>
  );
};
