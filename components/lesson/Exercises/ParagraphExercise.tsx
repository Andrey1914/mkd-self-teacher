"use client";

import React, { useState } from "react";
import { formatText } from "@/utils";
import styles from "@/app/page.module.css";
import type { ParagraphExerciseProps } from "@/types/exerciseParagraphTypes";

const pronouns = ["Jас", "Ти", "Ние", "Вие", "Тие"];

export function ParagraphExercise({ data }: { data: ParagraphExerciseProps }) {
  const sections = data.sections[0];

  const [inputs, setInputs] = useState<string[]>(
    Array(pronouns.length).fill("")
  );
  const [checked, setChecked] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const [isAutoFilled, setIsAutoFilled] = useState<boolean[]>(
    Array(pronouns.length).fill(false)
  );

  const handleChange = (value: string, idx: number) => {
    const updatedInputs = [...inputs];
    updatedInputs[idx] = value;

    const updatedFlags = [...isAutoFilled];
    updatedFlags[idx] = false;

    setInputs(updatedInputs);
    setIsAutoFilled(updatedFlags);
  };

  const checkAnswers = () => {
    if (showAnswers) return;
    setChecked(true);
    setShowAnswers(false);
  };

  const revealAnswers = () => {
    const cleanedAnswers = sections.content.answers.map((answer) =>
      answer
        .split("\n")
        .map((line) => line.trim())
        .join(" ")
        .replace(/\s+/g, " ")
        .trim()
    );

    setInputs(cleanedAnswers);
    setIsAutoFilled(Array(pronouns.length).fill(true));
    setShowAnswers(true);
    setChecked(false);
  };

  const clearInputs = () => {
    setInputs(Array(pronouns.length).fill(""));
    setIsAutoFilled(Array(pronouns.length).fill(false));
    setShowAnswers(false);
    setChecked(false);
  };

  return (
    <section style={{ marginBottom: "2rem" }}>
      {sections.prompt.map((text, i) => (
        <p key={i} style={{ marginBottom: "1rem" }}>
          <strong>{data.title}. </strong>
          {formatText(text)}
        </p>
      ))}

      <div
        style={{
          marginBottom: "2rem",
          // padding: "1rem",
          // fontSize: "18px",
        }}
      >
        {formatText(sections.content.original)}
      </div>

      {pronouns.map((pronoun, idx) => {
        const correctAnswer = sections.content.answers?.[idx] ?? "";

        const userInput = inputs[idx] || "";

        const isCorrect =
          userInput.trim().toLowerCase() === correctAnswer.trim().toLowerCase();

        const boxShadow = showAnswers
          ? "none"
          : checked
          ? isCorrect
            ? "0 0 8px 3px #00c150"
            : "0 0 8px 3px #ffa347"
          : "none";

        return (
          <div key={idx} style={{ marginBottom: "1.5rem" }}>
            <textarea
              id={`textarea-${idx}`}
              className={styles.exerciseTextarea}
              placeholder={pronoun}
              rows={5}
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "6px",
                border: "1px solid #994747",
                fontSize: "18px",
                resize: "none",
                backgroundColor: "transparent",
                boxShadow,
                outline: isAutoFilled[idx] ? "none" : undefined,
              }}
              value={userInput}
              onChange={(e) => handleChange(e.target.value, idx)}
              readOnly={isAutoFilled[idx]}
              onCopy={(e) => {
                if (isAutoFilled[idx]) {
                  e.preventDefault();
                }
              }}
              onFocus={(e) => {
                if (isAutoFilled[idx]) {
                  e.target.blur();
                }
              }}
            />
          </div>
        );
      })}

      <div style={{ display: "flex", gap: "1rem", justifyContent: "end" }}>
        <button
          className={styles.exerciseButton}
          type="button"
          onClick={checkAnswers}
        >
          Проверить мою работу
        </button>
        <button
          className={styles.exerciseButton}
          type="button"
          onClick={revealAnswers}
        >
          Показать правильные ответы
        </button>
        <button
          className={styles.exerciseButton}
          type="button"
          onClick={clearInputs}
        >
          Очистить
        </button>
      </div>
    </section>
  );
}
