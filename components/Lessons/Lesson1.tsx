import React from "react";

import lesson1 from "../../prisma/lessons/lesson-1";
import { Heading } from "@/components/Heading/Heading";
import { DialogueBlock } from "@/components/DialogueBlock/DialogueBlock";
import { PayAttentionBlock } from "@/components/PayAttentionBlock/PayAttentionBlock";
import { Vocabulary } from "@/components/Vocabulary/Vocabulary";
import {
  AlphabetTable,
  CountriesNationalitiesTable,
  GrammarTable,
  ExamplesTable,
} from "@/components/Tables";
import {
  FillInExercise,
  ParagraphExercise,
  StaticExercise,
  TranslateParagraphExercise,
} from "@/components/Exercises";
import {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  exercise7,
  exercise8,
  exercise9,
} from "@/prisma/lessons/exercises/lesson-1";
import {
  payAttention1,
  payAttention2,
  payAttention3,
} from "@/prisma/lessons/pay-attention/lesson-1";
import { lectureLesson1 } from "@/prisma/lessons/heading/lesson-1/headings";
import { vocabulary1, vocabulary2 } from "@/prisma/lessons/vocabulary/lesson-1";
import {
  countriesNationalitiesTable,
  grammarPronouns1,
  grammarPronouns2,
  verbsIClass,
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example8,
} from "@/prisma/lessons/tables/lesson-1";
import { formatText } from "@/utils";

export function Lesson1() {
  // const section = lectureLesson1.sections.find((s) => s.type === "lecture");

  // let vocabIndex = 0;
  const handledTypes = ["pay-attention"];

  return (
    <>
      {/* <h1>{formatText(lesson1.title?.join(", ") ?? "Без названия")}</h1> */}

      <Heading level={lectureLesson1.level}>{lectureLesson1.title}</Heading>

      {/* {section && (
        <>
          <Heading level={section.level}>{section.title}</Heading>
          {section.content?.subtitle && (
            <Heading level={section.content.level}>
              {section.content.subtitle}
            </Heading>
          )}
        </>
      )} */}

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

          <>{section.type === "phonetics" && <AlphabetTable />}</>

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
            {section.type === "spelling" && (
              <>
                <StaticExercise data={exercise1} />
                <DialogueBlock />
                <PayAttentionBlock data={payAttention1} />
                <Vocabulary lesson={vocabulary1} />{" "}
                <PayAttentionBlock data={payAttention2} />
                <Vocabulary lesson={vocabulary2} />{" "}
              </>
            )}
          </>

          <>
            {section.type === "paragraph" && (
              <>
                <CountriesNationalitiesTable
                  data={countriesNationalitiesTable}
                />
                <GrammarTable data={grammarPronouns1} />
              </>
            )}
          </>

          <>
            {section.type === "grammar" && section.verbToBe && (
              <>
                <GrammarTable data={grammarPronouns2} />
              </>
            )}
          </>

          {section.type === "grammar" && section.verbForms && (
            <>
              <ExamplesTable data={example1} />
              <FillInExercise data={exercise2} />
              <FillInExercise data={exercise3} />
            </>
          )}

          {section.type === "grammar" && section.reflexiveVerbs && (
            <>
              <ExamplesTable data={example2} />
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
              <GrammarTable data={verbsIClass} />
            </>
          )}

          {section.type === "pay-attention" && (
            <>
              <PayAttentionBlock data={payAttention3} />
              <FillInExercise data={exercise5} />
            </>
          )}

          {section.type === "grammar" && section.paragraph && (
            <div style={{ marginTop: "2rem" }}>
              <FillInExercise data={exercise6} />
            </div>
          )}

          {section.type === "grammar" && section.example3 && (
            <>
              <ExamplesTable data={example3} />
            </>
          )}
          {section.type === "grammar" && section.example4 && (
            <>
              <ExamplesTable data={example4} />
            </>
          )}
          {section.type === "grammar" && section.example5 && (
            <>
              <ExamplesTable data={example5} />
            </>
          )}
          {section.type === "grammar" && section.example6 && (
            <>
              <ExamplesTable data={example6} />
            </>
          )}
          {section.type === "grammar" && section.example7 && (
            <>
              <ExamplesTable data={example7} />
            </>
          )}
          {section.type === "grammar" && section.example8 && (
            <>
              <ExamplesTable data={example8} />
              <ParagraphExercise data={exercise7} />
              <TranslateParagraphExercise data={exercise8} />
              <TranslateParagraphExercise data={exercise9} />
            </>
          )}
        </section>
      ))}
    </>
  );
}
