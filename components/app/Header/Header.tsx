"use client";

import React from "react";
import { Tabs } from "@/components/app/Tabs/Tabs";
import { HeaderProps } from "@/types";

export const Header = ({
  activeIndex,
  onChange,
  lessonTitles,
}: HeaderProps) => {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        padding: "2rem 2rem 0",
        textAlign: "center",
        borderRadius: "0 0 4px 4px",
      }}
    >
      <Tabs tabs={lessonTitles} activeIndex={activeIndex} onChange={onChange} />
    </header>
  );
};
