import React from "react";
import { TablesProps } from "@/types";
import { formatText } from "@/utils";

export const CountriesNationalitiesTable = ({
  data,
}: {
  data: TablesProps;
}) => {
  if (
    !Array.isArray(data.content?.subtitle) ||
    !Array.isArray(data.content?.words)
  ) {
    return null;
  }

  return (
    <>
      {Array.isArray(data.title) && data.title[0] && (
        <h2 style={{ margin: "2rem 0 1rem" }}>{data.title[0]}</h2>
      )}

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "1rem",
          border: "0.5px solid #994747",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#994747", color: "#fff" }}>
            {data.content.subtitle.map((title, idx) => (
              <th
                key={idx}
                style={{
                  padding: "0.5rem",
                  borderLeft: idx > 0 ? "0.5px solid #fff" : "none",
                  textAlign: "center",
                }}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.content.words.map((row, idx) => (
            <tr key={idx}>
              <td
                style={{
                  padding: "0.5rem",
                  verticalAlign: "top",
                  border: "1px solid #994747",
                }}
              >
                {formatText(`<span>${row.land}</span>`)}
              </td>
              <td
                style={{
                  padding: "0.5rem",
                  verticalAlign: "top",
                  border: "1px solid #994747",
                }}
              >
                {formatText(`<span>${row.nationality}</span>`)}
              </td>
              <td
                style={{
                  padding: "0.5rem",
                  verticalAlign: "top",
                  border: "1px solid #994747",
                }}
              >
                {formatText(`<span>${row.adjective}</span>`)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
