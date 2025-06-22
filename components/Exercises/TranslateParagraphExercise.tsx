"use client";

import React, { useState, useRef } from "react";
import { formatText } from "@/utils";
import styles from "@/app/page.module.css";
import type { ParagraphExerciseProps } from "@/types/exerciseParagraphTypes";

export function TranslateParagraphExercise({
  data,
}: {
  data: ParagraphExerciseProps;
}) {
  const section = data.sections[0];
  const correctAnswer = section.content.answers[0];

  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const editorRef = useRef<HTMLDivElement>(null);

  const parseAnswerWords = (text: string): string[][] => {
    return text
      .trim()
      .split(/\s+/)
      .map((word) => word.split("/").map((w) => w.toLowerCase()));
  };

  const correctWordOptions = parseAnswerWords(correctAnswer);

  const isPerfectMatch = (): boolean => {
    const userWords = input.trim().split(/\s+/);
    return (
      userWords.length === correctWordOptions.length &&
      userWords.every((word, idx) =>
        correctWordOptions[idx]?.includes(word.toLowerCase())
      )
    );
  };

  const highlightWords = () => {
    const userWords = input.trim().split(/\s+/);
    return userWords
      .map((word, idx) => {
        const isCorrect = correctWordOptions[idx]?.includes(word.toLowerCase());
        if (!isCorrect) {
          return `<span style="color: #ffa347">${word}</span>`;
        }
        return word;
      })
      .join(" ");
  };

  const handleCheck = () => {
    setChecked(true);
    setShowAnswer(false);

    if (editorRef.current) {
      editorRef.current.innerHTML = highlightWords();
    }
  };

  const handleReveal = () => {
    const cleanAnswer = correctAnswer
      .replace(/\s*\n\s*/g, " ")
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
    }
  };

  return (
    <section style={{ marginBottom: "2rem" }}>
      {section.prompt.map((text, i) => (
        <p key={i} style={{ marginBottom: "1rem" }}>
          <strong>{data.title}. </strong>
          {formatText(text)}
        </p>
      ))}

      <div
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          fontSize: "18px",
        }}
      >
        {formatText(section.content.original)}
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <div
          ref={editorRef}
          contentEditable={!showAnswer}
          onInput={handleInput}
          style={{
            minHeight: "180px",
            padding: "0.75rem",
            borderRadius: "8px",
            border: "1px solid #994747",
            fontSize: "18px",
            backgroundColor: "transparent",
            boxShadow:
              checked && isPerfectMatch()
                ? "0 0 8px 3px #00c150"
                : checked
                ? "0 0 8px 3px #ffa347"
                : "none",
            whiteSpace: "pre-wrap",
            outline: isFocused && !showAnswer ? "2px solid white" : "none",
            userSelect: showAnswer ? "none" : "text",
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

      <div style={{ display: "flex", gap: "1rem", justifyContent: "end" }}>
        <button
          className={styles.exerciseButton}
          type="button"
          onClick={handleCheck}
        >
          Проверить мою работу
        </button>
        <button
          className={styles.exerciseButton}
          type="button"
          onClick={handleReveal}
        >
          Показать правильный перевод
        </button>
        <button
          className={styles.exerciseButton}
          type="button"
          onClick={handleClear}
        >
          Очистить
        </button>
      </div>
    </section>
  );
}
