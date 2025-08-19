"use client";

import type React from "react";
import { formatText } from "@/utils";

export const Heading = ({
  level = 1,
  children,
  className = "",
  style = {},
}: {
  level?: number;
  children: string | string[];
  className?: string;
  style?: React.CSSProperties;
}) => {
  const Tag = `h${level ?? 1}` as keyof React.JSX.IntrinsicElements;

  const content = Array.isArray(children)
    ? formatText(children.join(", "))
    : formatText(children);

  return (
    <Tag className={className} style={style}>
      {content}
    </Tag>
  );
};
