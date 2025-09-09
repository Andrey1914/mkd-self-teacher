"use client";

import React from "react";
import { PayAttentionBlockProps } from "@/types";
import { formatText } from "@/utils";

import { styles } from "./styles";

export function PayAttentionBlock({ data }: { data: PayAttentionBlockProps }) {
  const { table, leftCell, rightCell, cell } = styles.payAttentionStyles;

  if (!data.sections || !data.sections) return null;

  return (
    <>
      {data.sections.map((section, index) => (
        <table key={index} className={table}>
          <tbody>
            <tr>
              <td className={leftCell}>{section.title}</td>
              <td className={rightCell}>
                <div className={cell}>
                  {formatText(section.content.text, true)}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
}
