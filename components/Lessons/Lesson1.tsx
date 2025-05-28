import React from "react";
import parse from "html-react-parser";
import lesson1 from "../../prisma/lessons/lesson-1";
import { Exercise1 } from "@/components/Exercises/Lesson1/Exercise1";

export function Lesson1() {
  let exercise1 = false;

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

          <div style={{ paddingTop: "2rem" }}>
            {!exercise1 &&
              section.type === "spelling" &&
              (() => {
                exercise1 = true;
                return <Exercise1 />;
              })()}
          </div>

          <div>
            {section.subtitle && (
              <h3 style={{ padding: "0 0 1rem 1rem" }}>
                {parse(section.subtitle.join(", ") ?? "Без названия")}
              </h3>
            )}

            {section.content?.description && section.content?.subtitle && (
              <div
                style={{
                  padding: "5px",
                  display: "flex",
                  gap: "2rem",
                  background:
                    "linear-gradient(to right, #994747, var(--background))",
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontStyle: "italic" }}>
                    {section.content.subtitle.mkd}
                  </h3>
                  <p>{parse(section.content.description.mkd)}</p>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontStyle: "italic" }}>
                    {section.content.subtitle.ru}
                  </h3>
                  <p>{parse(section.content.description.ru)}</p>
                </div>
              </div>
            )}

            {section.content?.dialogue && (
              <div
                style={{
                  padding: "5px",

                  display: "flex",
                  gap: "2rem",
                  marginBottom: "2rem",
                  background:
                    "linear-gradient(to right, #994747, var(--background))",
                }}
              >
                {/* Македонская колонка */}
                <div style={{ flex: 1 }}>
                  {section.content.dialogueOrder
                    .filter(({ language }) => language === "mkd")
                    .map(({ speakerId, replyIndex }, i) => {
                      const speakerData = section.content.dialogue?.find(
                        (line) => line.speaker.id === speakerId
                      );

                      if (
                        !speakerData ||
                        !speakerData.mkd ||
                        !speakerData.mkd[replyIndex]
                      )
                        return null;

                      return (
                        <p
                          key={`dialogue-mkd-${i}`}
                          style={{ marginBottom: "1rem" }}
                        >
                          <strong>{speakerData.speaker.mkd}</strong>{" "}
                          {parse(speakerData.mkd[replyIndex])}
                        </p>
                      );
                    })}
                </div>

                {/* Русская колонка */}
                <div style={{ flex: 1 }}>
                  {section.content.dialogueOrder
                    .filter(({ language }) => language === "ru")
                    .map(({ speakerId, replyIndex }, i) => {
                      const speakerData = section.content.dialogue?.find(
                        (line) => line.speaker.id === speakerId
                      );

                      if (
                        !speakerData ||
                        !speakerData.ru ||
                        !speakerData.ru[replyIndex]
                      )
                        return null;

                      return (
                        <p
                          key={`dialogue-ru-${i}`}
                          style={{ marginBottom: "1rem" }}
                        >
                          <strong>{speakerData.speaker.ru}</strong>{" "}
                          {parse(speakerData.ru[replyIndex])}
                        </p>
                      );
                    })}
                </div>
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
