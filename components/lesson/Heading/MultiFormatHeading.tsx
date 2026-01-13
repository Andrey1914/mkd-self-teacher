import { formatText } from "@/utils";
import React from "react";
import Image from "next/image";
import { TitleObject } from "@/types";

import { styles } from "./styles";

type HeadingData = string | string[] | TitleObject;

interface MultiFormatHeadingProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "data" | "as"> {
  data?: HeadingData;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  iconSrc?: string;
  iconSize?: number;
}

export const MultiFormatHeading = ({
  data,
  as: Tag = "h2",
  iconSrc,
  iconSize = 48,
  style: propStyle,
  className: propClassName,
  ...restProps
}: MultiFormatHeadingProps) => {
  const { responsiveIcon } = styles.adaptiveIcons;
  const { containerMultilanguageTitle } = styles.heading;

  if (!data) return null;

  const iconContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  };

  if (typeof data === "string") {
    const combinedStyle = { ...(iconSrc && iconContainerStyle), ...propStyle };
    const combinedClassName = `${propClassName || ""}`.trim();

    return (
      <Tag {...restProps} style={combinedStyle} className={combinedClassName}>
        {iconSrc && (
          <Image
            src={iconSrc}
            alt=""
            width={iconSize}
            height={iconSize}
            className={responsiveIcon}
            style={
              { "--icon-size-prop": `${iconSize}px` } as React.CSSProperties
            }
          />
        )}
        {formatText(data)}
      </Tag>
    );
  }

  if (Array.isArray(data)) {
    const combinedStyle = { ...(iconSrc && iconContainerStyle), ...propStyle };
    const combinedClassName = `${propClassName || ""}`.trim();

    return (
      <Tag {...restProps} style={combinedStyle} className={combinedClassName}>
        {iconSrc && (
          <Image
            src={iconSrc}
            alt=""
            width={iconSize}
            height={iconSize}
            className={responsiveIcon}
            style={
              { "--icon-size-prop": `${iconSize}px` } as React.CSSProperties
            }
          />
        )}
        {formatText(data.join(", "))}
      </Tag>
    );
  }

  const objectStyle: React.CSSProperties = {
    ...(iconSrc && iconContainerStyle),
    ...(!iconSrc && {
      display: "flex",
      flexDirection: "column",
    }),
    ...propStyle,
  };

  const combinedClassName = `${propClassName || ""}`.trim();

  const isH1 = Tag === "h1";

  return (
    <Tag {...restProps} style={objectStyle} className={combinedClassName}>
      {iconSrc && (
        <Image
          src={iconSrc}
          alt=""
          width={iconSize}
          height={iconSize}
          className={responsiveIcon}
          style={{ "--icon-size-prop": `${iconSize}px` } as React.CSSProperties}
        />
      )}

      {isH1 ? (
        <div className={containerMultilanguageTitle}>
          {data.ru && <span>{formatText(data.ru)}</span>}
          {data.mkd && <span>{formatText(data.mkd)}</span>}
        </div>
      ) : (
        <div className={containerMultilanguageTitle}>
          {data.ru && formatText(data.ru)}
          {data.mkd && <span>{formatText(data.mkd)}</span>}
        </div>
      )}
    </Tag>
  );
};
