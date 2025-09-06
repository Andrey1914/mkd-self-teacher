"use client";

import React from "react";
import { TablesProps } from "@/types";
import { formatText } from "@/utils";

import { styles } from "./styles";

export const ConjugationTable = ({ data }: { data: TablesProps }) => {
  const { subtitle, text, content } = data;

  const { table, cell } = styles.conjugation;

  if (!content?.words || !Array.isArray(content.words)) return null;

  return (
    <>
      {Array.isArray(subtitle) && subtitle.length > 0 && (
        <>
          {subtitle.map((item, idx) => (
            <h3 key={idx} style={{ margin: "1rem 0" }}>
              {formatText(item)}
            </h3>
          ))}
        </>
      )}

      {Array.isArray(text) && text.length > 0 && (
        <>
          {text.map((item, idx) => (
            <p
              key={idx}
              style={{ marginBottom: "1rem 0", textAlign: "center" }}
            >
              {formatText(item)}
            </p>
          ))}
        </>
      )}

      <table className={table}>
        <tbody>
          {content.words.map((row, rowIdx) => {
            if ("person" in row && "forms" in row) {
              return (
                <tr key={rowIdx}>
                  <td className={cell}>{formatText(row.person)}</td>
                  {row.forms?.map((form, formIdx) => (
                    <td key={formIdx} className={cell}>
                      {formatText(form)}
                    </td>
                  ))}
                </tr>
              );
            }

            if (
              "singularPerson" in row &&
              "singularForm" in row &&
              "pluralPerson" in row &&
              "pluralForm" in row
            ) {
              return (
                <tr key={rowIdx}>
                  <td className={cell}>{formatText(row.singularPerson)}</td>
                  <td className={cell}>
                    {Array.isArray(row.singularForm)
                      ? row.singularForm.map((form, i) => (
                          <div key={i}>{formatText(form)}</div>
                        ))
                      : formatText(row.singularForm)}
                  </td>
                  <td className={cell}>{formatText(row.pluralPerson)}</td>
                  <td className={cell}>
                    {Array.isArray(row.pluralForm)
                      ? row.pluralForm.map((form, i) => (
                          <div key={i}>{formatText(form)}</div>
                        ))
                      : formatText(row.pluralForm)}
                  </td>
                </tr>
              );
            }

            return null;
          })}
        </tbody>
      </table>
    </>
  );
};
