"use client";

import React, { useEffect, useState } from "react";
import type { FillInExerciseData } from "@/types/exerciseTypes";
import { formatText } from "@/utils/textFormat";
import styles from "@/app/page.module.css";

// function SafeHTML({ html }: { html: string | undefined }) {
//   if (!html) return null;
//   return <span dangerouslySetInnerHTML={{ __html: html }} />;
// }

export function FillInExercise({ data }: { data: FillInExerciseData }) {
  //   {
  //     data,
  //   }: {
  //     data: {
  //       title: string;
  //       sections: {
  //         prompt?: string[];
  //         content: {
  //           sentences: {
  //             mkd: string;
  //             answer: string[];
  //           }[];
  //         };
  //       }[];
  //     };
  //   }
  const [hasMounted, setHasMounted] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [inputs, setInputs] = useState<string[][]>([]);

  useEffect(() => {
    setHasMounted(true);
    const initialInputs = data.sections[0].content.sentences.map((s) =>
      new Array(s.answer.length).fill("")
    );
    setInputs(initialInputs);
  }, [data]);

  //   if (!hasMounted) return null;
  if (!hasMounted || !data || !data.sections || data.sections.length === 0) {
    return null;
  }

  const handleChange = (
    value: string,
    sentenceIdx: number,
    wordIdx: number
  ) => {
    setInputs((prev) => {
      const updated = [...prev];
      updated[sentenceIdx][wordIdx] = value;
      return updated;
    });
  };

  const highlightInput = (input: string, correct: string, show: boolean) => {
    if (!show || input === "") return {};
    const isCorrect = input.trim().toLowerCase() === correct.toLowerCase();
    return {
      boxShadow: isCorrect ? "0 0 8px 3px #00c150" : "0 0 8px 3px #ffa347",
    };
  };

  //   const renderHTML = (htmlString: string | undefined) => {
  //     if (!htmlString) return { __html: "" };
  //     return { __html: htmlString };
  //   };

  return (
    <section style={{ marginBottom: "2rem" }}>
      {data.sections.map((section, sIdx) => (
        <div key={sIdx}>
          {section.prompt?.map((p, i) =>
            typeof p === "string" ? (
              <p key={i}>
                <strong>{data.title}. </strong>
                {formatText(p)}
                {/* <span dangerouslySetInnerHTML={renderHTML(p)} /> */}
                {/* <SafeHTML html={p} /> */}
              </p>
            ) : null
          )}
          <form>
            <p style={{ textAlign: "justify", lineHeight: "2rem" }}>
              {Array.isArray(section.content?.sentences) &&
                section.content.sentences.map((sentence, idx) => {
                  const parts = sentence.mkd.split("___");

                  return (
                    <React.Fragment key={idx}>
                      {parts.map((part, i) =>
                        typeof part === "string" ? (
                          <React.Fragment key={i}>
                            <span>{formatText(part)}</span>
                            {/* <span dangerouslySetInnerHTML={renderHTML(part)} /> */}
                            {/* <SafeHTML html={part} /> */}

                            {i < sentence.answer.length && (
                              <input
                                type="text"
                                autoComplete="off"
                                className={styles.exerciseInput}
                                value={inputs[idx]?.[i] ?? ""}
                                onChange={(e) =>
                                  handleChange(e.target.value, idx, i)
                                }
                                style={{
                                  ...highlightInput(
                                    inputs[idx]?.[i] ?? "",
                                    sentence.answer[i],
                                    showAnswers
                                  ),
                                }}
                              />
                            )}
                          </React.Fragment>
                        ) : null
                      )}
                    </React.Fragment>
                  );
                })}
            </p>
          </form>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "end" }}>
            <button
              className={styles.exerciseButton}
              type="button"
              onClick={() => setShowAnswers(true)}
            >
              Показать
            </button>
            <button
              className={styles.exerciseButton}
              type="button"
              onClick={() => {
                setInputs((prev) => prev.map((row) => row.map(() => "")));
                setShowAnswers(false);
              }}
            >
              Очистить
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
