"use client";

import React from "react";
import { Tabs } from "@/components/app/Tabs/Tabs";
import { HeaderProps } from "@/types";

import styles from "./Header.module.css";

const { headerContainer, header } = styles;

export const Header = ({
  activeIndex,
  onChange,
  lessonTitles,
}: HeaderProps) => {
  return (
    <header className={header}>
      <div className={headerContainer}>
        <Tabs
          tabs={lessonTitles}
          activeIndex={activeIndex}
          onChange={onChange}
        />
      </div>
    </header>
  );
};
