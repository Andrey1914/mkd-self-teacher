import type React from "react";
import { useState, useCallback, useEffect, useRef } from "react";

export interface DragState {
  isDragging: boolean;
  draggedWord: string | null;
  draggedIndex: number | null;
  dragPosition: { x: number; y: number } | null;
}

export interface UseDragAndDropProps {
  availableWords: string[];
  onWordUsed: (word: string, index: number) => void;
  onSwiperLock?: (locked: boolean) => void;
}

export function useDragAndDrop({
  onWordUsed,
  onSwiperLock,
}: UseDragAndDropProps) {
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    draggedWord: null,
    draggedIndex: null,
    dragPosition: null,
  });

  const [usedWords, setUsedWords] = useState<Set<number>>(new Set());

  const dragElementRef = useRef<HTMLDivElement | null>(null);

  const handleDragMove = useCallback((event: PointerEvent) => {
    setDragState((prev) => {
      if (!prev.isDragging) return prev;
      return {
        ...prev,
        dragPosition: { x: event.clientX, y: event.clientY },
      };
    });
  }, []);

  const handleDragEnd = useCallback(
    (event: PointerEvent) => {
      setDragState((prev) => {
        if (!prev.isDragging || prev.draggedIndex === null) return prev;

        const clientX = event.clientX;
        const clientY = event.clientY;

        const elementAtPoint = document.elementFromPoint(clientX, clientY);
        let targetInput: HTMLElement | null = null;

        if (elementAtPoint) {
          targetInput = (
            elementAtPoint.getAttribute("contenteditable") === "true"
              ? elementAtPoint
              : elementAtPoint.closest('[contenteditable="true"]')
          ) as HTMLElement | null;
        }

        if (targetInput && prev.draggedWord) {
          let cleanWord = prev.draggedWord.replace(/[.,]$/, "");

          cleanWord = cleanWord.replace(/\*/g, "");

          targetInput.innerText = cleanWord;

          targetInput.dispatchEvent(new Event("input", { bubbles: true }));

          setUsedWords((prevUsed) => new Set(prevUsed).add(prev.draggedIndex!));
          onWordUsed(cleanWord, prev.draggedIndex!);
        }

        if (onSwiperLock) onSwiperLock(false);

        return {
          isDragging: false,
          draggedWord: null,
          draggedIndex: null,
          dragPosition: null,
        };
      });
    },
    [onWordUsed, onSwiperLock]
  );

  useEffect(() => {
    if (dragState.isDragging) {
      window.addEventListener("pointermove", handleDragMove);
      window.addEventListener("pointerup", handleDragEnd);
      window.addEventListener("pointercancel", handleDragEnd);

      return () => {
        window.removeEventListener("pointermove", handleDragMove);
        window.removeEventListener("pointerup", handleDragEnd);
        window.removeEventListener("pointercancel", handleDragEnd);
      };
    }
  }, [dragState.isDragging, handleDragMove, handleDragEnd]);

  const handleDragStart = useCallback(
    (
      word: string,
      index: number,
      event: React.PointerEvent<HTMLSpanElement>
    ) => {
      if (usedWords.has(index)) return;

      if (onSwiperLock) onSwiperLock(true);

      setDragState({
        isDragging: true,
        draggedWord: word,
        draggedIndex: index,
        dragPosition: { x: event.clientX, y: event.clientY },
      });
    },
    [usedWords, onSwiperLock]
  );

  const returnWord = useCallback((index: number) => {
    setUsedWords((prev) => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  }, []);

  const resetUsedWords = useCallback(() => {
    setUsedWords(new Set());
  }, []);

  return {
    dragState,
    usedWords,
    handleDragStart,
    resetUsedWords,
    returnWord,
    dragElementRef,
  };
}
