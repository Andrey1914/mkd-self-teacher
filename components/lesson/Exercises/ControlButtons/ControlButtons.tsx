import React from "react";

import { styles } from "./styles";

interface ExerciseControlsProps {
  onCheck: () => void;
  onReveal: () => void;
  onClear: () => void;
  showAnswers: boolean;
}

export const ControlButtons = ({
  onCheck,
  onReveal,
  onClear,
  showAnswers,
}: ExerciseControlsProps) => {
  const { buttonContainer, exerciseButton } = styles.buttons;

  return (
    <div className={buttonContainer}>
      <button
        className={exerciseButton}
        type="button"
        onClick={onCheck}
        disabled={showAnswers}
      >
        Проверить мою работу
      </button>
      <button className={exerciseButton} type="button" onClick={onReveal}>
        Показать правильные ответы
      </button>
      <button className={exerciseButton} type="button" onClick={onClear}>
        Очистить
      </button>
    </div>
  );
};
