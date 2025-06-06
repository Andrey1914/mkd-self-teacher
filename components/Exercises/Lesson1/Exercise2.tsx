"use client";

import React, { useState, useEffect } from "react";
import exercise2 from "@/prisma/lessons/exercises/lesson-1/exercise-2";
import { formatText } from "@/utils/textFormat";
import styles from "@/app/page.module.css";

export function Exercise2({ render = true }: { render?: boolean }) {
  const [hasMounted, setHasMounted] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [inputs, setInputs] = useState<string[][]>([]);

  useEffect(() => {
    setHasMounted(true);
    const initialInputs = exercise2.sections[0].content.sentences.map((s) =>
      new Array(s.answer.length).fill("")
    );
    setInputs(initialInputs);
  }, []);

  if (!render || !hasMounted) return null;

  const handleChange = (
    value: string,
    sentenceIdx: number,
    wordIdx: number
  ) => {
    setInputs((prevInputs) => {
      const updated = [...prevInputs];
      updated[sentenceIdx][wordIdx] = value;
      return updated;
    });
  };

  const handleClear = () => {
    setInputs((prev) => prev.map((row) => row.map(() => "")));
    setShowAnswers(false);
  };

  const handleReveal = () => {
    setShowAnswers(true);
  };

  const highlightInput = (input: string, correct: string, show: boolean) => {
    if (!show || input === "") return {};

    const isCorrect = input.trim().toLowerCase() === correct.toLowerCase();

    return {
      boxShadow: isCorrect ? "0 0 8px 3px #00c150" : "0 0 8px 3px #ffa347",
    };
  };

  return (
    <section style={{ marginBottom: "2rem" }}>
      {exercise2.sections.map((section, sIdx) => (
        <div key={sIdx}>
          {section.prompt?.map((paragraph, i) => (
            <p key={i} style={{ textIndent: 0 }}>
              <strong>{exercise2.title}. </strong>
              {formatText(paragraph)}
            </p>
          ))}

          <form>
            <p
              style={{
                padding: "0 20px",
                lineHeight: "2rem",
                textAlign: "justify",
              }}
            >
              {section.content.sentences.map((sentence, idx) => {
                const parts = sentence.mkd.split("___");

                return (
                  <React.Fragment key={idx}>
                    {parts.map((part, i) => (
                      <React.Fragment key={i}>
                        <span>{formatText(part)}</span>
                        {i < sentence.answer.length && hasMounted && (
                          <input
                            className={styles.exerciseInput}
                            type="text"
                            autoComplete="off"
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
                    ))}{" "}
                  </React.Fragment>
                );
              })}
            </p>
          </form>

          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: "1rem",
              justifyContent: "end",
            }}
          >
            <button className={styles.exerciseButton} onClick={handleReveal}>
              Показать
            </button>
            <button className={styles.exerciseButton} onClick={handleClear}>
              Очистить
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
