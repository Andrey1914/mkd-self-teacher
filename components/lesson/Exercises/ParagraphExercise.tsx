"use client";

import React, { useState, useId, useRef, useEffect } from "react";
import { formatText, normalizeAnswer, resizeTextarea } from "@/utils";
import { ExercisesProps } from "@/types";

import { styles } from "./styles";

const pronouns = ["Jас", "Ти", "Ние", "Вие", "Тие"];

export const ParagraphExercise = ({ data }: { data: ExercisesProps }) => {
  const sections = data.sections[0];

  const { buttonContainer, exerciseButton } = styles.buttons;
  const { paragraphInput } = styles.inputs;

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

          const outline = isAutoFilled[idx] ? "none" : undefined;

          return (
            <div key={idx} style={{ marginBottom: "1.5rem" }}>
              <textarea
                className={paragraphInput}
                id={`${uniqueIdBase}-textarea-${idx}`}
                name={`${uniqueIdBase}-textarea-${idx}`}
                autoComplete="off"
                placeholder={placeholder}
                ref={(el) => {
                  textareasRef.current[idx] = el;
                }}
                style={{
                  boxShadow,
                  outline,
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

      <div className={buttonContainer}>
        <button className={exerciseButton} type="button" onClick={checkAnswers}>
          Проверить мою работу
        </button>
        <button
          className={exerciseButton}
          type="button"
          onClick={revealAnswers}
        >
          Показать правильные ответы
        </button>
        <button className={exerciseButton} type="button" onClick={clearInputs}>
          Очистить
        </button>
      </div>
    </section>
  );
};
