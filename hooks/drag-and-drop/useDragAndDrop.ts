import type React from "react";
import { useState, useCallback, useEffect, useRef } from "react";
import { useAutoScroll } from "./useAutoScroll";
import type { DragState, UseDragAndDropProps } from "./types";

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

  const { startAutoScroll, stopAutoScroll, updatePointerPosition } =
    useAutoScroll();

  const handleDragMove = useCallback(
    (event: PointerEvent) => {
      updatePointerPosition(event.clientY);

      setDragState((prev) => {
        if (!prev.isDragging) return prev;
        return {
          ...prev,
          dragPosition: { x: event.clientX, y: event.clientY },
        };
      });

      const scrollThreshold = 80;
      if (
        event.clientY < scrollThreshold ||
        event.clientY > window.innerHeight - scrollThreshold
      ) {
        startAutoScroll();
      } else {
        stopAutoScroll();
      }
    },
    [startAutoScroll, stopAutoScroll, updatePointerPosition],
  );

  const handleDragEnd = useCallback(
    (event: PointerEvent) => {
      stopAutoScroll();

      setDragState((prev) => {
        if (!prev.isDragging || prev.draggedIndex === null) return prev;

        const elementAtPoint = document.elementFromPoint(
          event.clientX,
          event.clientY,
        );
        let targetInput: HTMLElement | null = null;

        if (elementAtPoint) {
          targetInput = (
            elementAtPoint.getAttribute("contenteditable") === "true"
              ? elementAtPoint
              : elementAtPoint.closest('[contenteditable="true"]')
          ) as HTMLElement | null;
        }

        if (targetInput && prev.draggedWord) {
          const cleanWord = prev.draggedWord
            .replace(/[.,]$/, "")
            .replace(/\*/g, "");
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
    [onWordUsed, onSwiperLock, stopAutoScroll],
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
        stopAutoScroll();
      };
    }
  }, [dragState.isDragging, handleDragMove, handleDragEnd, stopAutoScroll]);

  const handleDragStart = useCallback(
    (
      word: string,
      index: number,
      event: React.PointerEvent<HTMLSpanElement>,
    ) => {
      if (usedWords.has(index)) return;
      if (onSwiperLock) onSwiperLock(true);

      updatePointerPosition(event.clientY);

      setDragState({
        isDragging: true,
        draggedWord: word,
        draggedIndex: index,
        dragPosition: { x: event.clientX, y: event.clientY },
      });
    },
    [usedWords, onSwiperLock, updatePointerPosition],
  );

  const returnWord = useCallback((index: number) => {
    setUsedWords((prev) => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  }, []);

  const resetUsedWords = useCallback(() => setUsedWords(new Set()), []);

  return {
    dragState,
    usedWords,
    handleDragStart,
    resetUsedWords,
    returnWord,
    dragElementRef,
  };
}
