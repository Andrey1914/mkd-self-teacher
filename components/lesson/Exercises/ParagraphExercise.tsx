import { useState, useId, useRef, useEffect } from "react";
import { MACEDONIAN_PRONOUNS } from "@/constants";
import {
  formatText,
  resizeTextarea,
  highlightInput,
  exercisesUtils,
} from "@/utils";
import { ExercisesProps } from "@/types";
import { ControlButtons } from "./ControlButtons";
import { createParagraphExerciseHandlers } from "./handlers";

import { styles } from "./styles";

export const ParagraphExercise = ({ data }: { data: ExercisesProps }) => {
  const sections = data.sections[0];

  const { determineExerciseConfig } = exercisesUtils;

  const { usePlaceholders, inputCount } = determineExerciseConfig(
    sections,
    MACEDONIAN_PRONOUNS
  );

  const [inputs, setInputs] = useState<string[]>(Array(inputCount).fill(""));
  const [checked, setChecked] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [isAutoFilled, setIsAutoFilled] = useState<boolean[]>(
    Array(inputCount).fill(false)
  );

  const [animationClass, setAnimationClass] = useState("");

  const uniqueIdBase = useId();
  const textareasRef = useRef<(HTMLTextAreaElement | null)[]>([]);

  const { paragraphInput, revealAnimation, hideAnimation } = styles.inputs;

  useEffect(() => {
    textareasRef.current.forEach((textarea) => {
      resizeTextarea(textarea, { minRows: 3, maxRows: 15 });
    });
  }, [inputs]);

  const { handleChange, handleRevealAnswers, handleClear, handleCheck } =
    createParagraphExerciseHandlers({
      sections,
      inputCount,
      inputs,
      setInputs,
      setChecked,
      setShowAnswers,
      setIsAutoFilled,
      setAnimationClass,
      revealAnimation,
      hideAnimation,
    });

  return (
    <section style={{ margin: "2rem 0" }}>
      {sections.prompt?.map((text, i) => (
        <p key={i} style={{ marginBottom: "1rem" }}>
          <strong>{data.title}. </strong>
          {formatText(text)}
        </p>
      ))}

      <div style={{ marginBottom: "2rem" }}>
        {formatText(sections.content.original, true)}
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {Array.from({ length: inputCount }).map((_, idx) => {
          const correctAnswer = sections.content.answer?.[idx] ?? "";
          const userInput = inputs[idx] || "";
          const placeholder = usePlaceholders ? MACEDONIAN_PRONOUNS[idx] : "";
          const outline = isAutoFilled[idx] ? "none" : undefined;

          return (
            <div key={idx} style={{ marginBottom: "1.5rem" }}>
              <textarea
                className={`${paragraphInput} ${animationClass}`}
                id={`${uniqueIdBase}-textarea-${idx}`}
                name={`${uniqueIdBase}-textarea-${idx}`}
                autoComplete="off"
                placeholder={placeholder}
                ref={(el) => {
                  textareasRef.current[idx] = el;
                }}
                style={{
                  outline,
                  ...highlightInput(
                    userInput,
                    correctAnswer,
                    checked && !showAnswers
                  ),
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

      <ControlButtons
        onCheck={handleCheck}
        onReveal={handleRevealAnswers}
        onClear={handleClear}
        showAnswers={showAnswers}
      />
    </section>
  );
};
