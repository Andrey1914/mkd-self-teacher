import { styles } from "../styles";

interface ExerciseControlsProps {
  onCheck: () => void;
  onReveal: () => void;
  onClear: () => void;
  showAnswers: boolean;
  isChecked?: boolean;
}

export const ControlButtons = ({
  onCheck,
  onReveal,
  onClear,
  showAnswers,
  isChecked,
}: ExerciseControlsProps) => {
  const isCheckDisabled = showAnswers;
  const isRevealDisabled = isChecked;

  const { buttonContainer, exerciseButton } = styles.buttons;

  return (
    <div className={buttonContainer}>
      <button
        className={exerciseButton}
        type="button"
        onClick={onCheck}
        disabled={isCheckDisabled}
      >
        Проверить мою работу
      </button>
      <button
        className={exerciseButton}
        type="button"
        onClick={onReveal}
        disabled={isRevealDisabled}
      >
        Показать правильные ответы
      </button>
      <button className={exerciseButton} type="button" onClick={onClear}>
        Очистить
      </button>
    </div>
  );
};
