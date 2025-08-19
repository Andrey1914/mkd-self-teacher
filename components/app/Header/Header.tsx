"use client";

import React from "react";
import { Tabs } from "@/components/app/Tabs/Tabs";
import { HeaderProps } from "@/types";

import styles from "./Header.module.css";

export const Header = ({
  activeIndex,
  onChange,
  lessonTitles,
}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Tabs tabs={lessonTitles} activeIndex={activeIndex} onChange={onChange} />
    </header>
  );
};
