export interface HeaderProps {
  activeIndex: number;
  onChange: (index: number) => void;
  lessonTitles: string[];
  isLoading?: boolean;
  onHomeClick?: () => void;
}
