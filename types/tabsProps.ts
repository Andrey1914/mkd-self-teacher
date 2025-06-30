export interface TabsProps {
  tabs: string[];
  activeIndex: number;
  onChange: (index: number) => void;
}
