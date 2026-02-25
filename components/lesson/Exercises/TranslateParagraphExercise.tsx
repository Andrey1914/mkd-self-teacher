"use client";

import { useState, useRef } from "react";
import { formatText, highlightInput } from "@/utils";
import { ExercisesProps } from "@/types";

import { ControlButtons } from "./ControlButtons";
import { createTranslateParagraphHandlers } from "./handlers";

import { styles } from "./styles";

export const TranslateParagraphExercise = ({
  data,
}: {
  data: ExercisesProps;
}) => {
  const section = data.sections[0];

  const correctAnswer = section.content.answer?.[0] ?? "";

  const { translatorInput, revealAnimation, hideAnimation } = styles.inputs;

  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const [animationClass, setAnimationClass] = useState("");

  const editorRef = useRef<HTMLDivElement>(null);

  const { handleCheck, handleRevealAnswers, handleClear, handleInput } =
    createTranslateParagraphHandlers({
      section,
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
    });

  const border =
    isFocused && !showAnswer ? "1px solid #67dd47" : "1px solid #994747";
  const boxShadow = isFocused && !showAnswer ? "0 0 6px 2px #89de7e" : "none";

  const userSelect = showAnswer ? "none" : "text";

  return (
    <section style={{ marginBottom: "2rem" }}>
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

      <div style={{ marginBottom: "2rem" }}>
        {formatText(section.content.original, true)}
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <div
          className={`${translatorInput} ${animationClass}`}
          ref={editorRef}
          contentEditable={!showAnswer}
          suppressContentEditableWarning
          onInput={handleInput}
          style={{
            border,
            boxShadow,
            userSelect,
            ...highlightInput(input, correctAnswer, checked && !showAnswer),
            color: "#ccc",
          }}
          onFocus={(e) => {
            if (showAnswer) {
              e.currentTarget.blur();
              return;
            }
            setIsFocused(true);
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
        onReveal={handleRevealAnswers}
        onClear={handleClear}
        showAnswers={showAnswer}
      />
    </section>
  );
};
