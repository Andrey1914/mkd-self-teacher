"use client";

import { useState, useEffect, useMemo } from "react";
import type { ExercisesProps, WordState } from "@/types";
import { formatText, exercisesUtils } from "@/utils";
import { ControlButtons } from "./ControlButtons";
import { createHighlightWordsHandlers } from "./handlers";

import { styles, getWordStyleClass, getWordStatusClass } from "./styles";

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

  const { handleWordClick, handleCheck, handleRevealAnswers, handleClear } =
    createHighlightWordsHandlers({
      initialWordsState,
      showAnswer,
      setWordsState,
      setChecked,
      setShowAnswer,
    });

  return (
    <section style={{ margin: "2rem 0" }}>
      {section.prompt?.map((text, i) => (
        <ul key={i} style={{ marginBottom: "1rem" }}>
          <li style={{ listStyle: "none" }}>
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
              className={`${word} ${getWordStyleClass(wordState.userStyle, {
                normal,
                bold,
                italic,
              })} ${
                checked || showAnswer
                  ? getWordStatusClass(wordState.status, {
                      correct,
                      incorrect,
                    })
                  : ""
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
        onReveal={handleRevealAnswers}
        onClear={handleClear}
        showAnswers={showAnswer}
      />
    </section>
  );
};
