"use client";

import React from "react";
import { Tabs } from "@/components/app/Tabs/Tabs";
import { HeaderProps } from "@/types";

import styles from "./header.module.css";

const { header } = styles;

export const Header = ({
  activeIndex,
  onChange,
  lessonTitles,
}: HeaderProps) => {
  return (
    <header className={header}>
      <Tabs tabs={lessonTitles} activeIndex={activeIndex} onChange={onChange} />
    </header>
  );
};
