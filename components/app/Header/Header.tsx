import { Tabs } from "@/components/app/Tabs/Tabs";
import { HeaderProps } from "@/types";
import { useUserActivity } from "@/hooks";

import styles from "./Header.module.css";

const { headerContainer, header, headerHidden } = styles;

export const Header = ({
  activeIndex,
  onChange,
  lessonTitles,
  isLoading,
}: HeaderProps & { isLoading?: boolean }) => {
  const isVisible = useUserActivity(4000);

  return (
    <header className={`${header} ${!isVisible ? headerHidden : ""}`}>
      <div className={headerContainer}>
        <Tabs
          tabs={lessonTitles}
          activeIndex={activeIndex}
          onChange={onChange}
          isLoading={isLoading}
        />
      </div>
    </header>
  );
};
