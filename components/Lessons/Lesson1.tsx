import React from "react";

import lesson1 from "../../prisma/lessons/lesson-1";
import { Exercise1 } from "@/components/Exercises/Lesson1/Exercise1";
import { Vocabulary1 } from "@/components/Vocabulary/Lesson1/Vocabulary1";
import { formatText } from "@/utils";
import { FillInExercise } from "@/components/Exercises/FillInExercise";
import {
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
} from "@/prisma/lessons/exercises/lesson-1";

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
                  <h2 style={{ margin: "1rem 0" }}>
                    {formatText(section.title.join(", "))}
                  </h2>
                )
              : section.title && <h2>{formatText(section.title)}</h2>)}

          {Array.isArray(section.subtitle) && section.subtitle.length > 0 && (
            <h3 style={{ margin: "2rem 0" }}>
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
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      marginBottom: "1rem",
                      border: "1px solid #994747",
                    }}
                  >
                    <thead>
                      <tr style={{ backgroundColor: "#994747", color: "#fff" }}>
                        {["Буква", "Звук", "Буква", "Звук"].map(
                          (label, idx) => (
                            <th
                              key={idx}
                              style={{
                                padding: "0.5rem",
                                textAlign: "center",
                                borderLeft:
                                  idx === 0 ? "none" : "1px solid #fff",
                              }}
                            >
                              {label}
                            </th>
                          )
                        )}
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

          <>
            {!exercise1 &&
              section.type === "spelling" &&
              (() => {
                exercise1 = true;
                return <Exercise1 />;
              })()}
          </>

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
                        {" "}
                        <Vocabulary1 i={1} />{" "}
                      </>
                    )}
                    {currentIndex === 1 && (
                      <>
                        {" "}
                        <Vocabulary1 i={2} />{" "}
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
            {section.type === "grammar" && section.content?.words && (
              <>
                {Array.isArray(section.text) && section.text.length > 0 && (
                  <div style={{ marginBottom: "1rem" }}>
                    {section.text.map((t, idx) => (
                      <p key={idx} style={{ textAlign: "center" }}>
                        {formatText(t)}
                      </p>
                    ))}
                  </div>
                )}

                {section.content.words.some((row) => "persone" in row) && (
                  <table
                    style={{
                      width: "100%",
                      tableLayout: "fixed",
                      borderCollapse: "collapse",
                      border: "1px solid #994747",
                      margin: "1rem 0",
                    }}
                  >
                    {Array.isArray(section.content?.subtitle) && (
                      <thead>
                        <tr
                          style={{
                            backgroundColor: "#994747",
                            color: "#fff",
                          }}
                        >
                          {section.content.subtitle.map(
                            (col: string, idx: number) => (
                              <th
                                key={idx}
                                style={{
                                  padding: "0.5rem",
                                  borderLeft:
                                    idx > 0 ? "1px solid #fff" : "none",
                                  textAlign: "center",
                                }}
                              >
                                {col}
                              </th>
                            )
                          )}
                        </tr>
                      </thead>
                    )}
                    <tbody>
                      {section.content.words
                        .filter((row) => "persone" in row)
                        .map(
                          (
                            row: {
                              persone: string;
                              singular: string;
                              plural: string;
                            },
                            idx: number
                          ) => (
                            <tr key={idx}>
                              <td
                                style={{
                                  width: "33%",
                                  padding: "0.5rem",
                                  verticalAlign: "top",
                                  border: "1px solid #994747",
                                }}
                              >
                                {formatText(row.persone)}
                              </td>
                              <td
                                style={{
                                  width: "33%",
                                  padding: "0.5rem",
                                  verticalAlign: "top",
                                  border: "1px solid #994747",
                                }}
                              >
                                {formatText(row.singular)}
                              </td>
                              <td
                                style={{
                                  width: "33%",
                                  padding: "0.5rem",
                                  verticalAlign: "top",
                                  border: "1px solid #994747",
                                }}
                              >
                                {formatText(row.plural)}
                              </td>
                            </tr>
                          )
                        )}
                    </tbody>
                  </table>
                )}
              </>
            )}
          </>

          <>
            {section.type === "example" &&
              Array.isArray(section.content?.words) &&
              section.content.words.every((w) => "mkd" in w && "ru" in w) && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    margin: "1rem 0",
                  }}
                >
                  {/* mkd */}
                  <div>
                    {section.content.words.map((row, idx) => (
                      <p
                        key={`mkd-example-${idx}`}
                        style={{
                          marginBottom: "1rem",
                        }}
                      >
                        {formatText(row.mkd)}
                      </p>
                    ))}
                  </div>

                  {/* ru */}
                  <div>
                    {section.content.words.map((row, idx) => (
                      <p
                        key={`ru-example-${idx}`}
                        style={{
                          marginBottom: "1rem",
                        }}
                      >
                        {formatText(row.ru)}
                      </p>
                    ))}
                  </div>
                </div>
              )}
          </>

          {section.type === "example" && section.exercise && (
            <>
              <FillInExercise data={exercise2} />
              <FillInExercise data={exercise3} />
            </>
          )}

          <>
            {section.type === "grammar" && section.content?.words && (
              <table
                style={{
                  width: "100%",
                  tableLayout: "fixed",
                  borderCollapse: "collapse",
                  border: "1px solid #994747",
                  margin: "1rem 0 2rem",
                }}
              >
                <tbody>
                  {section.content.words.map((row, rowIdx) => {
                    if ("person" in row && "forms" in row) {
                      return (
                        <tr key={rowIdx}>
                          <td
                            style={{
                              padding: "0.5rem",
                              border: "1px solid #994747",
                              verticalAlign: "top",
                            }}
                          >
                            {formatText(row.person)}
                          </td>
                          {row.forms.map((form, formIdx) => (
                            <td
                              key={formIdx}
                              style={{
                                padding: "0.5rem",
                                border: "1px solid #994747",
                                verticalAlign: "top",
                              }}
                            >
                              {formatText(form)}
                            </td>
                          ))}
                        </tr>
                      );
                    }

                    if (
                      "singularPerson" in row &&
                      "singularForm" in row &&
                      "pluralPerson" in row &&
                      "pluralForm" in row
                    ) {
                      return (
                        <tr key={rowIdx}>
                          <td
                            style={{
                              padding: "0.5rem",
                              border: "1px solid #994747",
                              verticalAlign: "top",
                            }}
                          >
                            {formatText(row.singularPerson)}
                          </td>
                          <td
                            style={{
                              padding: "0.5rem",
                              border: "1px solid #994747",
                              verticalAlign: "top",
                            }}
                          >
                            {Array.isArray(row.singularForm)
                              ? row.singularForm.map((form, i) => (
                                  <div key={i}>{formatText(form)}</div>
                                ))
                              : formatText(row.singularForm)}
                          </td>
                          <td
                            style={{
                              padding: "0.5rem",
                              border: "1px solid #994747",
                              verticalAlign: "top",
                            }}
                          >
                            {formatText(row.pluralPerson)}
                          </td>
                          <td
                            style={{
                              padding: "0.5rem",
                              border: "1px solid #994747",
                              verticalAlign: "top",
                            }}
                          >
                            {Array.isArray(row.pluralForm)
                              ? row.pluralForm.map((form, i) => (
                                  <div key={i}>{formatText(form)}</div>
                                ))
                              : formatText(row.pluralForm)}
                          </td>
                        </tr>
                      );
                    }

                    return null;
                  })}
                </tbody>
              </table>
            )}
          </>

          {section.type === "grammar" && section.table && (
            <>
              <FillInExercise data={exercise4} />
            </>
          )}

          {section.type === "pay-attention" && section.attention && (
            <>
              <FillInExercise data={exercise5} />
            </>
          )}

          {section.type === "grammar" && section.paragraph && (
            <div style={{ marginTop: "2rem" }}>
              <FillInExercise data={exercise6} />
            </div>
          )}
        </section>
      ))}
    </>
  );
}
