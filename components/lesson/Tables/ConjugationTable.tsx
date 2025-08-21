"use client";

import React from "react";
// import { ConjugationTableSection } from "@/types/conjugationTypes";
import { TablesProps } from "@/types";
import { formatText } from "@/utils";

export const ConjugationTable = ({
  data,
}: {
  // data: ConjugationTableSection;
  data: TablesProps;
}) => {
  const { subtitle, text, content } = data;

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

      <table
        style={{
          width: "100%",
          tableLayout: "fixed",
          borderCollapse: "collapse",
          border: "1px solid #994747",
          margin: "1rem 0 2rem",
        }}
      >
        <tbody>
          {content.words.map((row, rowIdx) => {
            if ("person" in row && "forms" in row) {
              return (
                <tr key={rowIdx}>
                  <td
                    style={{
                      padding: "0.5rem",
                      border: "1px solid #994747",
                      verticalAlign: "top",
                    }}
                  >
                    {formatText(row.person)}
                  </td>
                  {row.forms?.map((form, formIdx) => (
                    <td
                      key={formIdx}
                      style={{
                        padding: "0.5rem",
                        border: "1px solid #994747",
                        verticalAlign: "top",
                      }}
                    >
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
                  <td
                    style={{
                      padding: "0.5rem",
                      border: "1px solid #994747",
                      verticalAlign: "top",
                    }}
                  >
                    {formatText(row.singularPerson)}
                  </td>
                  <td
                    style={{
                      padding: "0.5rem",
                      border: "1px solid #994747",
                      verticalAlign: "top",
                    }}
                  >
                    {Array.isArray(row.singularForm)
                      ? row.singularForm.map((form, i) => (
                          <div key={i}>{formatText(form)}</div>
                        ))
                      : formatText(row.singularForm)}
                  </td>
                  <td
                    style={{
                      padding: "0.5rem",
                      border: "1px solid #994747",
                      verticalAlign: "top",
                    }}
                  >
                    {formatText(row.pluralPerson)}
                  </td>
                  <td
                    style={{
                      padding: "0.5rem",
                      border: "1px solid #994747",
                      verticalAlign: "top",
                    }}
                  >
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
