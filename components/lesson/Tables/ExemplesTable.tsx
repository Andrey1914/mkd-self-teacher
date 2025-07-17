import React from "react";
import { ExampleSection } from "@/types/exampleTypes";
import { formatText } from "@/utils";

const ExamplesTable = ({ data }: { data: ExampleSection }) => {
  const { content } = data;

  if (
    !Array.isArray(content?.words) ||
    !content.words.every((row) => "mkd" in row && "ru" in row)
  ) {
    return null;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        margin: "1rem 0",
        gap: "1rem",
      }}
    >
      {/* mkd */}
      <div>
        {content.words.map((row, idx) => (
          <p key={`mkd-example-${idx}`} style={{ marginBottom: "1rem" }}>
            {formatText(row.mkd)}
          </p>
        ))}
      </div>

      {/* ru */}
      <div>
        {content.words.map((row, idx) => (
          <p key={`ru-example-${idx}`} style={{ marginBottom: "1rem" }}>
            {formatText(row.ru)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ExamplesTable;
