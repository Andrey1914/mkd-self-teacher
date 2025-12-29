import type React from "react";
import type { DragState } from "@/hooks/useDragAndDrop";
import { createPortal } from "react-dom";
import { formatText } from "@/utils";

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

  const cleanWordForGhost = dragState.draggedWord.replace(/[.,]$/, "");

  const ghostElement = (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        transform: `translate3d(${dragState.dragPosition.x}px, ${dragState.dragPosition.y}px, 0) translate(-50%, -100%)`,
        pointerEvents: "none",
        zIndex: 999999,
        color: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        whiteSpace: "nowrap",
      }}
    >
      {formatText(cleanWordForGhost)}
    </div>
  );

  return createPortal(ghostElement, document.body);
};
