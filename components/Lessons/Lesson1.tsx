import React from "react";

import lesson1 from "../../prisma/lessons/lesson-1";
import { Exercise1 } from "@/components/Exercises/Lesson1/Exercise1";
import { Vocabulary1 } from "@/components/Vocabulary/Lesson1/Vocabulary1";
import { formatText } from "@/utils/textFormat";

export function Lesson1() {
  let vocabIndex = 0;
  let exercise1 = false;
  const handledTypes = ["pay-attention"];

  return (
    <>
      <h1>{formatText(lesson1.title?.join(", ") ?? "Без названия")}</h1>
      {lesson1.sections?.map((section, i) => (
        <section key={i} style={{ marginBottom: "2rem" }}>
          {!handledTypes.includes(section.type) &&
            (Array.isArray(section.title)
              ? section.title.length > 0 && (
                  <h2>{formatText(section.title.join(", "))}</h2>
                )
              : section.title && <h2>{formatText(section.title)}</h2>)}

          {Array.isArray(section.subtitle) && section.subtitle.length > 0 && (
            <h3 style={{ marginTop: "-0.5rem", marginBottom: "1rem" }}>
              {formatText(section.subtitle.join(", "))}
            </h3>
          )}

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
                  <table
                    // border={1}
                    // cellPadding={5}
                    // cellSpacing={1}
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      marginBottom: "1rem",
                      border: "1px solid #994747",
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          style={{
                            borderLeft: idx > 0 ? "1px solid #fff" : "none",
                          }}
                        >
                          Буква
                        </th>
                        <th
                          style={{
                            borderLeft: idx > 0 ? "1px solid #fff" : "none",
                          }}
                        >
                          Звук
                        </th>
                        <th
                          style={{
                            borderLeft: idx > 0 ? "1px solid #fff" : "none",
                          }}
                        >
                          Буква
                        </th>
                        <th
                          style={{
                            borderLeft: idx > 0 ? "1px solid #fff" : "none",
                          }}
                        >
                          Звук
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({
                        length: Math.max(left.length, right.length),
                      }).map((_, rowIdx) => {
                        return (
                          <tr key={rowIdx}>
                            <td
                              style={{
                                padding: "0.5rem",
                                verticalAlign: "top",
                                border: "1px solid #994747",
                              }}
                            >
                              {formatText(
                                `<span>${left[rowIdx]?.letter ?? ""}</span>`
                              )}
                            </td>
                            <td
                              style={{
                                padding: "0.5rem",
                                verticalAlign: "top",
                                border: "1px solid #994747",
                              }}
                            >
                              {formatText(left[rowIdx]?.sound ?? "")}
                            </td>
                            <td
                              style={{
                                padding: "0.5rem",
                                verticalAlign: "top",
                                border: "1px solid #994747",
                              }}
                            >
                              {formatText(
                                `<span>${right[rowIdx]?.letter ?? ""}</span>`
                              )}
                            </td>
                            <td
                              style={{
                                padding: "0.5rem",
                                verticalAlign: "top",
                                border: "1px solid #994747",
                              }}
                            >
                              {formatText(right[rowIdx]?.sound ?? "")}
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
            !handledTypes.includes(section.type) &&
            section.content.text
              .split(/\n\s*\n/)
              .filter((line) => line.trim().length > 0)
              .map((paragraph, i) => (
                <p key={i} style={{ marginBottom: 0 }}>
                  {formatText(paragraph)}
                </p>
              ))}

          <div style={{ paddingTop: "2rem" }}>
            {!exercise1 &&
              section.type === "spelling" &&
              (() => {
                exercise1 = true;
                return <Exercise1 />;
              })()}
          </div>

          <>
            {section.content?.description && section.content?.subtitle && (
              <div
                style={{
                  padding: "5px",
                  display: "flex",
                  gap: "2rem",
                  background:
                    "linear-gradient(to right, var(--thead-bg), var(--background))",
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3>{formatText(section.content.subtitle.mkd)}</h3>
                  <p>{formatText(section.content.description.mkd)}</p>
                </div>
                <div style={{ flex: 1 }}>
                  <h3>{formatText(section.content.subtitle.ru)}</h3>
                  <p>{formatText(section.content.description.ru)}</p>
                </div>
              </div>
            )}

            {section.content?.dialogue && (
              <div
                style={{
                  padding: "5px",
                  display: "flex",
                  gap: "2rem",
                  marginBottom: "1rem",
                  background:
                    "linear-gradient(to right, var(--thead-bg), var(--background))",
                }}
              >
                {/* mkd */}
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
                          {formatText(speakerData.mkd[replyIndex])}
                        </p>
                      );
                    })}
                </div>

                {/* ru */}
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
                          {formatText(speakerData.ru[replyIndex])}
                        </p>
                      );
                    })}
                </div>
              </div>
            )}
          </>

          <>
            {section.type === "pay-attention" &&
              section.content?.text &&
              (() => {
                const currentIndex = vocabIndex++;

                return (
                  <>
                    <table
                      style={{
                        width: "100%",
                        border: "2px solid var(--thead-bg)",
                        backgroundColor: "#ebb2b2",
                        margin: "0 0 4rem 0",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              backgroundColor: "#ebb2b2",
                              padding: "0.5rem",
                              fontWeight: "bold",
                              textTransform: "uppercase",
                              borderRight: "2px solid var(--thead-bg)",
                              verticalAlign: "middle",
                              textAlign: "center",
                              color: "#994747",
                            }}
                          >
                            {section.title?.[0]}
                          </td>
                          <td style={{ padding: "1rem", verticalAlign: "top" }}>
                            <p style={{ color: "#333", textIndent: 0 }}>
                              {formatText(section.content.text)}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {currentIndex === 0 && (
                      <>
                        <Vocabulary1 i={1} />
                      </>
                    )}
                    {currentIndex === 1 && (
                      <>
                        <Vocabulary1 i={2} />
                      </>
                    )}
                  </>
                );
              })()}
          </>

          <>
            {section.type === "countries-nationalities" &&
              Array.isArray(section.content?.subtitle) &&
              Array.isArray(section.content?.words) && (
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginBottom: "1rem",
                    border: "1px solid #994747",
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: "#994747", color: "#fff" }}>
                      {section.content.subtitle.map(
                        (title: string, idx: number) => (
                          <th
                            key={idx}
                            style={{
                              padding: "0.5rem",
                              borderLeft: idx > 0 ? "1px solid #fff" : "none",
                              textAlign: "center",
                            }}
                          >
                            {title}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {section.content.words.map((row, idx) => {
                      const r = row as {
                        land: string;
                        nationality: string;
                        adjective: string;
                      };
                      return (
                        <tr key={idx}>
                          <td
                            style={{
                              padding: "0.5rem",
                              verticalAlign: "top",
                              border: "1px solid #994747",
                            }}
                          >
                            {formatText(`<span>${r.land}</span>`)}
                          </td>
                          <td
                            style={{
                              padding: "0.5rem",
                              verticalAlign: "top",
                              border: "1px solid #994747",
                            }}
                          >
                            {formatText(`<span>${r.nationality}</span>`)}
                          </td>
                          <td
                            style={{
                              padding: "0.5rem",
                              verticalAlign: "top",
                              border: "1px solid #994747",
                            }}
                          >
                            {formatText(`<span>${r.adjective}</span>`)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
          </>

          <>
            {section.type === "grammar" &&
              Array.isArray(section.content?.subtitle) &&
              Array.isArray(section.content?.words) && (
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    border: "1px solid #994747",
                    margin: "1rem 0",
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: "#994747", color: "#fff" }}>
                      {section.content.subtitle.map(
                        (col: string, colIdx: number) => (
                          <th
                            key={colIdx}
                            style={{
                              padding: "0.5rem",
                              borderLeft:
                                colIdx > 0 ? "1px solid #fff" : "none",
                              textAlign: "center",
                            }}
                          >
                            {col}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {section.content.words.map((row, idx) => {
                      const r = row as {
                        persone: string;
                        singular: string;
                        plural: string;
                      };

                      return (
                        <tr key={idx}>
                          <td
                            style={{
                              padding: "0.5rem",
                              verticalAlign: "top",
                              border: "1px solid #994747",
                            }}
                          >
                            {formatText(r.persone)}
                          </td>
                          <td
                            style={{
                              padding: "0.5rem",
                              verticalAlign: "top",
                              border: "1px solid #994747",
                            }}
                          >
                            {formatText(r.singular)}
                          </td>
                          <td
                            style={{
                              padding: "0.5rem",
                              verticalAlign: "top",
                              border: "1px solid #994747",
                            }}
                          >
                            {formatText(r.plural)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
          </>
        </section>
      ))}
    </>
  );
}
