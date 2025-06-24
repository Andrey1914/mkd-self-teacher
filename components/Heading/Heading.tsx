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
  //   const Tag = `h${Math.min(
  //     6,
  //     Math.max(1, level)
  //   )}` as keyof React.JSX.IntrinsicElements;
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

// "use client";

// import React from "react";
// import { formatText } from "@/utils";

// export const Heading = ({
//   level = 1,
//   children,
//   className = "",
//   style = {},
// }: {
//   level?: number;
//   children: string | string[];
//   className?: string;
//   style?: React.CSSProperties;
// }) => {
//   const Tag = `h${Math.min(
//     6,
//     Math.max(1, level)
//   )}` as keyof JSX.IntrinsicElements;

//   const content = Array.isArray(children)
//     ? formatText(children.join(" "))
//     : formatText(children);

//   return (
//     <Tag className={className} style={style}>
//       {content}
//     </Tag>
//   );
// };

// "use client";

// import React from "react";
// import { formatText } from "@/utils";
// import { LessonHeadingSchema } from "@/types/headingTypes";

// // type HeadingProps = {
// //   level?: 1 | 2 | 3 | 4 | 5 | 6;
// //   children: string | string[] | React.ReactNode;
// //   className?: string;
// //   style?: React.CSSProperties;
// // };

// export const Heading = ({
//   level = 1,
//   children,
//   className = "",
//   style = {},
// }: LessonHeadingSchema) => {
//   const Tag: React.ElementType = `h${level}`;

//   const content =
//     typeof children === "string" || Array.isArray(children)
//       ? formatText(Array.isArray(children) ? children.join(", ") : children)
//       : children;

//   return (
//     <Tag className={className} style={style}>
//       {content}
//     </Tag>
//   );
// };
