import React from "react";
import lesson1 from "../prisma/lessons/lesson-1";

export function Lesson1() {
  return (
    <>
      <h1>{lesson1.title?.join(", ") ?? "Без названия"}</h1>

      {lesson1.sections?.map((section, i) => (
        <section key={i} style={{ marginBottom: "2rem" }}>
          <h2>{section.title?.join(", ") ?? "Без названия"}</h2>
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
                <div key={idx} style={{ marginTop: "1rem" }}>
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
                      }).map((_, rowIdx) => (
                        <tr key={rowIdx}>
                          <td>{left[rowIdx]?.letter ?? ""}</td>
                          <td>{left[rowIdx]?.sound ?? ""}</td>
                          <td>{right[rowIdx]?.letter ?? ""}</td>
                          <td>{right[rowIdx]?.sound ?? ""}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}

          {section.content?.textAfterTable && (
            <p style={{ marginTop: "1rem" }}>
              {section.content.textAfterTable}
            </p>
          )}

          {section.content?.text &&
            section.content.text
              .split(/\n\s*\n/)
              .filter((line) => line.trim().length > 0)
              .map((paragraph, i) => (
                <p key={i} style={{ marginBottom: 0 }}>
                  {paragraph}
                </p>
              ))}
        </section>
      ))}
    </>
  );
}
