"use client";

import React, { useState, useId, useRef, useEffect } from "react";
import { formatText, normalizeAnswer, resizeTextarea } from "@/utils";
import styles from "@/app/page.module.css";
import { ExercisesProps } from "@/types";

const pronouns = ["Jас", "Ти", "Ние", "Вие", "Тие"];

export const ParagraphExercise = ({ data }: { data: ExercisesProps }) => {
  const sections = data.sections[0];

  const answers = sections.content.answer ?? [];

  const isSingleInput = sections.singleInput === true;

  const usePlaceholders =
    !isSingleInput &&
    answers.length > 0 &&
    answers.every((answer) =>
      pronouns.some((pronoun) => answer.trim().startsWith(pronoun))
    );

  const uniqueIdBase = useId();

  const inputCount = isSingleInput ? 1 : pronouns.length;

  const [inputs, setInputs] = useState<string[]>(Array(inputCount).fill(""));

  const [checked, setChecked] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const [isAutoFilled, setIsAutoFilled] = useState<boolean[]>(
    Array(inputCount).fill(false)
  );

  const textareasRef = useRef<(HTMLTextAreaElement | null)[]>([]);

  useEffect(() => {
    textareasRef.current.forEach((textarea) => {
      resizeTextarea(textarea, { minRows: 3, maxRows: 15 });
    });
  }, [inputs]);

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
    const cleanedAnswers = sections.content.answer?.map((answer) =>
      normalizeAnswer(answer.replace(/\s+/g, " "), {
        trim: true,
        convertLatinToCyrillic: false,
        lowercase: false,
      })
    );

    setInputs(cleanedAnswers ?? Array(inputCount).fill(""));
    setIsAutoFilled(Array(inputCount).fill(true));
    setShowAnswers(true);
    setChecked(false);
  };

  const clearInputs = () => {
    setInputs(Array(inputCount).fill(""));
    setIsAutoFilled(Array(inputCount).fill(false));
    setShowAnswers(false);
    setChecked(false);
  };

  return (
    <section style={{ margin: "2rem 0" }}>
      {sections.prompt?.map((text, i) => (
        <p key={i} style={{ marginBottom: "1rem" }}>
          <strong>{data.title}. </strong>
          {formatText(text)}
        </p>
      ))}

      <div style={{ marginBottom: "2rem" }}>
        {formatText(sections.content.original)}
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {Array.from({ length: inputCount }).map((_, idx) => {
          const correctAnswer = sections.content.answer?.[idx] ?? "";

          const userInput = inputs[idx] || "";

          const normalizedUserInput = normalizeAnswer(userInput, {
            trim: true,
            lowercase: true,
            convertLatinToCyrillic: true,
          });

          const normalizedCorrect = normalizeAnswer(correctAnswer, {
            trim: true,
            lowercase: true,
          });

          const isCorrect = normalizedUserInput === normalizedCorrect;

          const boxShadow = showAnswers
            ? "none"
            : checked
            ? isCorrect
              ? "0 0 8px 3px #00c150"
              : "0 0 8px 3px #ffa347"
            : "none";

          const placeholder =
            !isSingleInput && usePlaceholders ? pronouns[idx] : "";

          return (
            <div key={idx} style={{ marginBottom: "1.5rem" }}>
              <textarea
                id={`${uniqueIdBase}-textarea-${idx}`}
                name={`${uniqueIdBase}-textarea-${idx}`}
                autoComplete="off"
                className={styles.exerciseTextarea}
                placeholder={placeholder}
                ref={(el) => {
                  textareasRef.current[idx] = el;
                }}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "6px",
                  border: "1px solid #994747",
                  fontSize: "18px",
                  lineHeight: "1.5",
                  resize: "none",
                  backgroundColor: "transparent",
                  boxShadow,
                  outline: isAutoFilled[idx] ? "none" : undefined,
                  overflow: "hidden",
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
      </form>

      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          gap: "1rem",
          justifyContent: "end",
        }}
      >
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
};
