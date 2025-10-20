import { formatText } from "@/utils";
import React from "react";
import Image from "next/image";
import { TitleObject } from "@/types";

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
  iconSize = 24,
  style: propStyle,
  ...restProps
}: MultiFormatHeadingProps) => {
  if (!data) return null;

  const iconContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
  };

  if (typeof data === "string") {
    const combinedStyle = { ...(iconSrc && iconContainerStyle), ...propStyle };
    return (
      <Tag {...restProps} style={combinedStyle}>
        {iconSrc && (
          <Image
            src={iconSrc}
            alt=""
            width={iconSize}
            height={iconSize}
            style={{ flexShrink: 0 }}
          />
        )}
        {formatText(data)}
      </Tag>
    );
  }

  if (Array.isArray(data)) {
    const combinedStyle = { ...(iconSrc && iconContainerStyle), ...propStyle };
    return (
      <Tag {...restProps} style={combinedStyle}>
        {iconSrc && (
          <Image
            src={iconSrc}
            alt=""
            width={iconSize}
            height={iconSize}
            style={{ flexShrink: 0 }}
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

  const isH1 = Tag === "h1";

  return (
    <Tag {...restProps} style={objectStyle}>
      {iconSrc && (
        <Image
          src={iconSrc}
          alt=""
          width={iconSize}
          height={iconSize}
          style={{ flexShrink: 0 }}
        />
      )}

      {isH1 ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {data.ru && <span>{formatText(data.ru)}</span>}
          {data.mkd && <span>{formatText(data.mkd)}</span>}
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {data.ru && formatText(data.ru)}
          {data.mkd && <span>{formatText(data.mkd)}</span>}
        </div>
      )}
    </Tag>
  );
};

// import { formatText } from "@/utils";
// import React from "react";
// import { TitleObject } from "@/types";

// type HeadingData = string | string[] | TitleObject;

// interface MultiFormatHeadingProps
//   extends Omit<React.HTMLAttributes<HTMLElement>, "data" | "as"> {
//   data?: HeadingData;
//   as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
// }

// export const MultiFormatHeading = ({
//   data,
//   as: Tag = "h2",
//   ...restProps
// }: MultiFormatHeadingProps) => {
//   if (!data) return null;

//   if (typeof data === "string") {
//     return <Tag {...restProps}>{formatText(data)}</Tag>;
//   }

//   if (Array.isArray(data)) {
//     return <Tag {...restProps}>{formatText(data.join(", "))}</Tag>;
//   }

//   const isH1 = Tag === "h1";

//   const style: React.CSSProperties = {
//     display: "flex",
//     flexDirection: "column",
//     ...(restProps.style || {}),
//   };

//   return (
//     <Tag {...restProps} style={style}>
//       {isH1 ? (
//         <>
//           {data.ru && <span>{formatText(data.ru)}</span>}
//           {data.mkd && <span>{formatText(data.mkd)}</span>}
//         </>
//       ) : (
//         <>
//           {data.ru && formatText(data.ru)}
//           {data.mkd && <span>{formatText(data.mkd)}</span>}
//         </>
//       )}
//     </Tag>
//   );
// };
