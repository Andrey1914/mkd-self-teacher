"use client";

import React, { useState, useRef } from "react";
import { formatText, exercisesUtils, highlightInput } from "@/utils";
import { ExercisesProps } from "@/types";

import { styles } from "./styles";

export const TranslateParagraphExercise = ({
  data,
}: {
  data: ExercisesProps;
}) => {
  const section = data.sections[0];

  const { generateHighlightedWord, parseAnswerWords } = exercisesUtils;

  const correctAnswer = section.content.answer?.[0] ?? "";

  const { buttonContainer, exerciseButton } = styles.buttons;
  const { translatorInput } = styles.inputs;

  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const editorRef = useRef<HTMLDivElement>(null);

  const correctWordOptions = parseAnswerWords(correctAnswer);

  const handleCheck = () => {
    setChecked(true);
    setShowAnswer(false);
    if (editorRef.current) {
      editorRef.current.innerHTML = generateHighlightedWord(
        input,
        correctWordOptions
      );
    }
  };

  const handleReveal = () => {
    const cleanAnswer = correctAnswer
      .replace(/[/«»]|<em>|<\/em>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    setInput(cleanAnswer);
    setChecked(false);
    setShowAnswer(true);
    if (editorRef.current) {
      editorRef.current.innerText = cleanAnswer;
    }
  };

  const handleClear = () => {
    setInput("");
    setChecked(false);
    setShowAnswer(false);

    if (editorRef.current) {
      editorRef.current.innerText = "";
    }
  };

  const handleInput = () => {
    if (editorRef.current) {
      const text = editorRef.current.innerText;
      setInput(text);

      if (checked) {
        setChecked(false);
      }
    }
  };

  const outline = isFocused && !showAnswer ? "2px solid white" : "none";
  const userSelect = showAnswer ? "none" : "text";

  return (
    <section style={{ marginBottom: "2rem" }}>
      {section.prompt?.map((text, i) => (
        <p key={i} style={{ marginBottom: "1rem" }}>
          <strong>{data.title}. </strong>
          {formatText(text)}
        </p>
      ))}

      <div style={{ marginBottom: "2rem" }}>
        {formatText(section.content.original)}
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <div
          className={translatorInput}
          ref={editorRef}
          contentEditable={!showAnswer}
          onInput={handleInput}
          style={{
            outline,
            userSelect,
            ...highlightInput(input, correctAnswer, checked && !showAnswer),
          }}
          onFocus={(e) => {
            if (showAnswer) {
              e.target.blur();
            } else {
              setIsFocused(true);
            }
          }}
          onBlur={() => setIsFocused(false)}
          onCopy={(e) => {
            if (showAnswer) {
              e.preventDefault();
            }
          }}
        ></div>
      </div>

      <div className={buttonContainer}>
        <button
          className={exerciseButton}
          type="button"
          onClick={handleCheck}
          disabled={showAnswer}
        >
          Проверить мою работу
        </button>
        <button className={exerciseButton} type="button" onClick={handleReveal}>
          Показать правильный перевод
        </button>
        <button className={exerciseButton} type="button" onClick={handleClear}>
          Очистить
        </button>
      </div>
    </section>
  );
};
