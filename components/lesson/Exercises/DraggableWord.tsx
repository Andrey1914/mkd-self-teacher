import type React from "react";
import { formatText } from "@/utils";

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

  return (
    <span
      onPointerDownCapture={(e) => {
        e.stopPropagation();
        onDragStart(word, index, e);
      }}
      style={{
        display: "inline-block",
        cursor: "grab",
        userSelect: "none",
        touchAction: "none",
        WebkitUserSelect: "none",
        position: "relative",
        zIndex: 100,
      }}
    >
      {formatText(word)}
    </span>
  );
};
