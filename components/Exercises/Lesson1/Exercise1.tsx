import React from "react";
import parse from "html-react-parser";
import { exercises } from "@/prisma/lessons/exercises/lesson-1";

export function Exercise1({ render = true }: { render?: boolean }) {
  if (!render) return null;

  return (
    <>
      {exercises.map((exercise, i) => (
        <section key={`exercise-${i}`} style={{ marginTop: "2rem" }}>
          {exercise.sections?.map((section, sIdx) => (
            <div key={sIdx}>
              {section.prompt?.map((paragraph, i) => (
                <p
                  key={i}
                  style={{
                    textIndent: 0,
                  }}
                >
                  <strong>Упражнение 1. </strong>
                  {paragraph}
                </p>
              ))}

              {section.content?.exercise && (
                <p
                  style={{
                    marginTop: "1rem",
                    textIndent: 0,
                    padding: "0 20px",
                  }}
                >
                  {parse(section.content.exercise)}
                </p>
              )}
            </div>
          ))}
        </section>
      ))}
    </>
  );
}
