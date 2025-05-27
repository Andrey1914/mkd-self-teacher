import React from "react";
import parse from "html-react-parser";
import lesson1 from "../prisma/lessons/lesson-1";
import { exercises } from "@/prisma/lessons/exercises/lesson-1";

export function Lesson1() {
  return (
    <>
      <h1>{parse(lesson1.title?.join(", ") ?? "Без названия")}</h1>

      {lesson1.sections?.map((section, i) => (
        <section key={i} style={{ marginBottom: "2rem" }}>
          <h2>{parse(section.title?.join(", ") ?? "Без названия")}</h2>
          {section.content?.intro && (
            <>
              {(section.content.intro.subtitle ?? []).map((sub, idx) => (
                <p key={idx}>{sub}</p>
              ))}
              <p>{section.content.intro.intro}</p>
              <p>{section.content.intro.text}</p>
            </>
          )}

          {Array.isArray(section.tableEntries?.create) &&
            section.tableEntries!.create.map((table, idx) => {
              const rows = table.rows ?? [];
              const mid = Math.ceil(rows.length / 2);
              const left = rows.slice(0, mid);
              const right = rows.slice(mid);

              return (
                <div key={idx} style={{ margin: "1rem 0" }}>
                  <table border={1} cellPadding={5} cellSpacing={1}>
                    <thead>
                      <tr>
                        <th>Буква</th>
                        <th>Звук</th>
                        <th>Буква</th>
                        <th>Звук</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({
                        length: Math.max(left.length, right.length),
                      }).map((_, rowIdx) => {
                        const withItalic = (text: string | undefined) =>
                          (text ?? "").replace(
                            /\[([^\]]+)\]/g,
                            "<em>[$1]</em>"
                          );
                        return (
                          <tr key={rowIdx}>
                            <td>
                              {parse(
                                `<span style="color: rgb(196, 86, 86);">${
                                  left[rowIdx]?.letter ?? ""
                                }</span>`
                              )}
                            </td>
                            <td>
                              {parse(withItalic(left[rowIdx]?.sound ?? ""))}
                            </td>
                            <td>
                              {parse(
                                `<span style="color: rgb(196, 86, 86);">${
                                  right[rowIdx]?.letter ?? ""
                                }</span>`
                              )}
                            </td>
                            <td>
                              {parse(withItalic(right[rowIdx]?.sound ?? ""))}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            })}

          {section.content?.text &&
            section.content.text
              .split(/\n\s*\n/)
              .filter((line) => line.trim().length > 0)
              .map((paragraph, i) => {
                const withItalic = paragraph.replace(
                  /\[([^\]]+)\]/g,
                  (_, inner) => `<em>[${inner}]</em>`
                );

                const withBold = withItalic.replace(
                  /«(.*?)»/g,
                  (_, inner) => `<strong>${inner}</strong>`
                );

                return (
                  <p key={i} style={{ marginBottom: 0 }}>
                    {parse(withBold)}
                  </p>
                );
              })}
        </section>
      ))}

      {exercises.map((exercise, i) => (
        <section key={`exercise-${i}`} style={{ marginBottom: "2rem" }}>
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
