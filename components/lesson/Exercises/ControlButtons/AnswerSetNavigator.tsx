import React from "react";
import { formatText } from "@/utils";
import type { AnswerSet } from "@/types";

import { styles } from "./styles";

interface AnswerSetNavigatorProps {
  answerSet: AnswerSet;
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

export const AnswerSetNavigator = ({
  answerSet,
  activeIndex,
  onPrev,
  onNext,
}: AnswerSetNavigatorProps) => {
  const labels = answerSet.labels ?? [];
  const isPrevDisabled = activeIndex === 0;
  const isNextDisabled = activeIndex >= labels.length - 1;

  const {
    buttonContainer,
    outlinedButtonContainer,
    exerciseButton,
    outlinedButton,
  } = styles.buttons;

  return (
    <div className={`${buttonContainer} ${outlinedButtonContainer}`}>
      <button
        onClick={onPrev}
        disabled={isPrevDisabled}
        className={`${exerciseButton} ${outlinedButton}`}
      >
        <strong>
          <span>
            {isPrevDisabled
              ? formatText(labels[activeIndex])
              : formatText(labels[activeIndex - 1])}
          </span>
        </strong>
      </button>

      <h4
        style={{
          minWidth: "80px",
          textAlign: "center",
          padding: "0.5rem",
          textIndent: 0,
        }}
      >
        <span>{formatText(labels[activeIndex])}</span>
      </h4>

      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className={`${exerciseButton} ${outlinedButton}`}
      >
        <strong>
          <span>
            {isNextDisabled
              ? formatText(labels[activeIndex])
              : formatText(labels[activeIndex + 1])}
          </span>
        </strong>
      </button>
    </div>
  );
};
