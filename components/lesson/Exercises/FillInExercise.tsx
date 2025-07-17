"use client";

import React, { useEffect, useState } from "react";
import type { FillInExerciseData } from "@/types/exerciseTypes";
import { formatText, highlightInput, getTextWidth } from "@/utils";
import styles from "@/app/page.module.css";

export default function FillInExercise({ data }: { data: FillInExerciseData }) {
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

  return (
    <section style={{ marginBottom: "1rem" }}>
      {data.sections.map((section, sIdx) => (
        <div key={sIdx}>
          {section.prompt?.map((p, i) =>
            typeof p === "string" ? (
              <p key={i}>
                <strong>{data.title}. </strong>
                {formatText(p)}
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
                                  minWidth: "60px",
                                  maxWidth: "100px",
                                  width: `${Math.min(
                                    Math.max(
                                      getTextWidth(inputs[idx]?.[i] ?? ""),
                                      60
                                    ),
                                    100
                                  )}px`,
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
                      )}{" "}
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
