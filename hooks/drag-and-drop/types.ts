export interface DragState {
  isDragging: boolean;
  draggedWord: string | null;
  draggedIndex: number | null;
  dragPosition: { x: number; y: number } | null;
}

export interface UseDragAndDropProps {
  availableWords?: string[];
  onWordUsed: (word: string, index: number) => void;
  onSwiperLock?: (locked: boolean) => void;
}
