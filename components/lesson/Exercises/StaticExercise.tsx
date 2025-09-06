"use client";

import React from "react";
import parse from "html-react-parser";
import { ExercisesProps } from "@/types";

export const StaticExercise = ({ data }: { data: ExercisesProps }) => {
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
              <p
                style={{
                  marginTop: "1rem",
                  textIndent: 0,
                  lineHeight: "1.8",
                }}
              >
                {parse(section.content.exercise)}
              </p>
            )}
        </div>
      ))}
    </div>
  );
};
