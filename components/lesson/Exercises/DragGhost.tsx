import type React from "react";
import type { DragState } from "@/hooks/useDragAndDrop";
import { createPortal } from "react-dom";
import { formatText } from "@/utils";

import { styles } from "./styles";

export interface DragGhostProps {
  dragState: DragState;
}

export const DragGhost: React.FC<DragGhostProps> = ({ dragState }) => {
  if (
    !dragState.isDragging ||
    !dragState.draggedWord ||
    !dragState.dragPosition ||
    typeof document === "undefined"
  ) {
    return null;
  }

  const { containerGhostElement } = styles.containers;

  const cleanWordForGhost = dragState.draggedWord.replace(/[.,]$/, "");

  const dragTransform = `translate3d(${dragState.dragPosition.x}px, ${dragState.dragPosition.y}px, 0) translate(-50%, -100%)`;

  const ghostElement = (
    <div className={containerGhostElement} style={{ transform: dragTransform }}>
      {formatText(cleanWordForGhost)}
    </div>
  );

  return createPortal(ghostElement, document.body);
};
