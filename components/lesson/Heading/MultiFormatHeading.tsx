import { formatText } from "@/utils";
import React from "react";
import { TitleObject } from "@/types";

type HeadingData = string | string[] | TitleObject;

interface MultiFormatHeadingProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "data" | "as"> {
  data?: HeadingData;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export const MultiFormatHeading = ({
  data,
  as: Tag = "h2",
  ...restProps
}: MultiFormatHeadingProps) => {
  if (!data) return null;

  if (typeof data === "string") {
    return <Tag {...restProps}>{formatText(data)}</Tag>;
  }

  if (Array.isArray(data)) {
    return <Tag {...restProps}>{formatText(data.join(", "))}</Tag>;
  }

  const isH1 = Tag === "h1";

  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    ...(restProps.style || {}),
  };

  return (
    <Tag {...restProps} style={style}>
      {isH1 ? (
        <>
          {data.ru && <span>{formatText(data.ru)}</span>}
          {data.mkd && <span>{formatText(data.mkd)}</span>}
        </>
      ) : (
        <>
          {data.ru && formatText(data.ru)}
          {data.mkd && <span>{formatText(data.mkd)}</span>}
        </>
      )}
    </Tag>
  );
};
