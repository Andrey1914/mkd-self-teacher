import React from "react";
import parse from "html-react-parser";
import exercise1 from "@/prisma/lessons/exercises/lesson-1/exercise-1";

export function Exercise1({ render = true }: { render?: boolean }) {
  if (!render) return null;

  return (
    <section style={{ marginTop: "2rem" }}>
      {exercise1.sections?.map((section, sIdx) => (
        <div key={sIdx}>
          {section.prompt?.map((paragraph, pIdx) => (
            <p key={pIdx} style={{ textIndent: 0 }}>
              <strong>{exercise1.title}. </strong>
              {paragraph}
            </p>
          ))}

          {section.type === "exercise" && section.content?.exercise && (
            <p style={{ marginTop: "1rem", textIndent: 0, padding: "0 20px" }}>
              {parse(section.content.exercise)}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
