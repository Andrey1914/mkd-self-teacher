"use client";

import parse from "html-react-parser";
import { ExercisesProps } from "@/types";
import { formatText } from "@/utils";

import { styles } from "./styles";

export const StaticExercise = ({ data }: { data: ExercisesProps }) => {
  const { staticExercise } = styles.inputs;

  if (!data?.sections || data.sections.length === 0) return null;

  return (
    <div style={{ marginTop: "2rem" }}>
      {data.sections.map((section, sIdx) => (
        <div key={sIdx} style={{ marginBottom: "1.5rem" }}>
          {section.prompt?.map((paragraph, pIdx) => (
            <p key={pIdx} style={{ textIndent: 0 }}>
              <strong>{data.title}. </strong>
              {typeof paragraph === "string" ? parse(paragraph) : null}
            </p>
          ))}

          {section.type === "static-exercise" &&
            typeof section.content?.exercise === "string" && (
              <p className={staticExercise}>
                <span>{formatText(section.content.exercise)}</span>
              </p>
            )}
        </div>
      ))}
    </div>
  );
};
