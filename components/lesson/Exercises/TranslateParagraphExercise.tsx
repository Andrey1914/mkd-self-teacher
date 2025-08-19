"use client";

import React, { useState, useRef } from "react";
import { formatText, normalizeAnswer } from "@/utils";
import styles from "@/app/page.module.css";
import type { ParagraphExerciseProps } from "@/types/exerciseParagraphTypes";

export const TranslateParagraphExercise = ({
  data,
}: {
  data: ParagraphExerciseProps;
}) => {
  const section = data.sections[0];
  const correctAnswer = section.content.answer[0];

  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const editorRef = useRef<HTMLDivElement>(null);

  const parseAnswerWords = (text: string): string[][] => {
    return normalizeAnswer(text, {
      trim: true,
      lowercase: true,
      convertLatinToCyrillic: true,
    })
      .split(/\s+/)
      .map((word) => word.split("/"));
  };

  const correctWordOptions = parseAnswerWords(correctAnswer);

  const isPerfectMatch = (): boolean => {
    const userWords = normalizeAnswer(input, {
      trim: true,
      lowercase: true,
      convertLatinToCyrillic: true,
    }).split(/\s+/);

    return (
      userWords.length === correctWordOptions.length &&
      userWords.every((word, idx) => correctWordOptions[idx]?.includes(word))
    );
  };

  const highlightWords = () => {
    const rawWords = input.trim().split(/\s+/);
    const normalizedWords = rawWords.map((word) =>
      normalizeAnswer(word, {
        trim: true,
        lowercase: true,
        convertLatinToCyrillic: true,
      })
    );

    return rawWords
      .map((originalWord, idx) => {
        const normalized = normalizedWords[idx];
        const isCorrect = correctWordOptions[idx]?.includes(normalized);
        if (!isCorrect) {
          return `<span style="color: #ffa347">${originalWord}</span>`;
        }
        return originalWord;
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

      <div style={{ marginBottom: "2rem" }}>
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
};
