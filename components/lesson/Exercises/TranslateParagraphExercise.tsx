"use client";

import React, { useState, useRef } from "react";
import { formatText, exercisesUtils, highlightInput } from "@/utils";
import { ExercisesProps } from "@/types";

import { ControlButtons } from "./ControlButtons";

import { styles } from "./styles";

export const TranslateParagraphExercise = ({
  data,
}: {
  data: ExercisesProps;
}) => {
  const section = data.sections[0];

  const { generateHighlightedWord, parseAnswerWords } = exercisesUtils;

  const correctAnswer = section.content.answer?.[0] ?? "";

  const { translatorInput, revealAnimation, hideAnimation } = styles.inputs;

  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const [animationClass, setAnimationClass] = useState("");

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
    setAnimationClass(revealAnimation);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
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
        {formatText(section.content.original, true)}
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <div
          className={`${translatorInput} ${animationClass}`}
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

      <ControlButtons
        onCheck={handleCheck}
        onReveal={handleReveal}
        onClear={handleClear}
        showAnswers={showAnswer}
      />
    </section>
  );
};
