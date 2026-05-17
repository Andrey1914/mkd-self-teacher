export interface TabsProps {
  tabs: string[];
  // tabs: Tab[];
  activeIndex: number;
  onChange: (index: number) => void;

  isLoading?: boolean;
  showHomeTab?: boolean;
  onHomeClick?: () => void;
  homeIcon?: React.ReactNode;
}

export type Tab =
  | { type: "home" }
  | { type: "lesson"; id: number; title: string };
