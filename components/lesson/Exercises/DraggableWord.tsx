import { formatText } from "@/utils";

import { styles } from "./styles";

export interface DraggableWordProps {
  word: string;
  index: number;
  isUsed: boolean;
  onDragStart: (
    word: string,
    index: number,
    event: React.PointerEvent<HTMLSpanElement>
  ) => void;
}

export const DraggableWord: React.FC<DraggableWordProps> = ({
  word,
  index,
  isUsed,
  onDragStart,
}) => {
  if (isUsed) return null;

  const { draggableWord } = styles.draggableWord;

  const handlePointerDownCapture = (e: React.PointerEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    onDragStart(word, index, e);
  };

  return (
    <span
      onPointerDownCapture={handlePointerDownCapture}
      className={draggableWord}
    >
      {formatText(word)}
    </span>
  );
};
