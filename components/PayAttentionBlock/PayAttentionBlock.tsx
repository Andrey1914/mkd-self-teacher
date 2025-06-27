import React from "react";
import { PayAttentionBlockProps } from "@/types/payAttantionTypes";
import { formatText } from "@/utils";

export function PayAttentionBlock({ data }: { data: PayAttentionBlockProps }) {
  if (!data.sections || !data.sections.length) return null;

  return (
    <>
      {data.sections.map((section, index) => (
        <table
          key={index}
          style={{
            width: "100%",
            border: "2px solid var(--thead-bg)",
            backgroundColor: "#ebb2b2",
            margin: "0 0 4rem 0",
          }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  width: "25%",
                  backgroundColor: "#ebb2b2",
                  padding: "0.5rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  borderRight: "2px solid var(--thead-bg)",
                  verticalAlign: "middle",
                  textAlign: "center",
                  color: "#994747",
                }}
              >
                {section.title?.[0]}
              </td>
              <td style={{ padding: "1rem", verticalAlign: "top" }}>
                <p style={{ color: "#333", textIndent: 0 }}>
                  {formatText(section.content.text)}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
}
