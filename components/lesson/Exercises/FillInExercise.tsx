"use client";

import React, { useEffect, useState } from "react";
import { ExercisesProps } from "@/types";
import { formatText, highlightInput, getTextWidth } from "@/utils";

import { styles } from "./styles";

export const FillInExercise = ({ data }: { data: ExercisesProps }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [inputs, setInputs] = useState<string[][]>([]);
  const [isAutoFilled, setIsAutoFilled] = useState<boolean[][]>([]);

  const { buttonContainer, exerciseButton } = styles.buttons;
  const { fillInInput } = styles.inputs;

  useEffect(() => {
    setHasMounted(true);

    const initialInputs =
      data.sections?.[0]?.content?.sentences?.map((sentence) =>
        new Array(sentence.answer?.length).fill("")
      ) ?? [];

    const initialFlags =
      data.sections?.[0]?.content?.sentences?.map((sentence) =>
        new Array(sentence.answer?.length).fill(false)
      ) ?? [];

    setInputs(initialInputs);
    setIsAutoFilled(initialFlags);
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

    setIsAutoFilled((prev) => {
      const updated = [...prev];
      updated[sentenceIdx][wordIdx] = false;
      return updated;
    });
  };

  const revealAnswers = () => {
    const filled =
      data.sections?.[0]?.content?.sentences?.map((sentence) => [
        ...(sentence.answer ?? []),
      ]) ?? [];

    const filledFlags =
      data.sections?.[0]?.content?.sentences?.map((sentence) =>
        new Array(sentence.answer?.length).fill(true)
      ) ?? [];

    setInputs(filled);
    setIsAutoFilled(filledFlags);
    setShowAnswers(false);
  };

  return (
    <section style={{ margin: "2rem 0" }}>
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
          {section.content?.text && (
            <p style={{ textAlign: "center" }}>
              {formatText(section.content.text)}
            </p>
          )}
          <form>
            <p style={{ textAlign: "left", lineHeight: "2rem" }}>
              {Array.isArray(section.content?.sentences) &&
                section.content.sentences.map((sentence, idx) => {
                  const parts = sentence.mkd?.split("___");

                  return (
                    <React.Fragment key={idx}>
                      {parts?.map((part, i) =>
                        typeof part === "string" ? (
                          <React.Fragment key={i}>
                            {/^\d+\.\s/.test(part) ? (
                              <>
                                {part.match(/^(\d+\.\s*)/)?.[1]}
                                <span>
                                  {formatText(part.replace(/^(\d+\.\s*)/, ""))}
                                </span>
                              </>
                            ) : (
                              <span>{formatText(part)}</span>
                            )}

                            {sentence.answer && i < sentence.answer.length && (
                              <input
                                id={`input-${sIdx}-${idx}-${i}`}
                                name={`input-${sIdx}-${idx}-${i}`}
                                autoComplete="off"
                                type="text"
                                className={fillInInput}
                                value={inputs[idx]?.[i] ?? ""}
                                onChange={(e) =>
                                  handleChange(e.target.value, idx, i)
                                }
                                readOnly={isAutoFilled[idx]?.[i]}
                                onCopy={(e) => {
                                  if (isAutoFilled[idx]?.[i])
                                    e.preventDefault();
                                }}
                                onFocus={(e) => {
                                  if (isAutoFilled[idx]?.[i]) e.target.blur();
                                }}
                                style={{
                                  width: `${Math.min(
                                    Math.max(
                                      getTextWidth(inputs[idx]?.[i] ?? ""),
                                      60
                                    ),
                                    250
                                  )}px`,
                                  ...(isAutoFilled[idx]?.[i] || !showAnswers
                                    ? {}
                                    : highlightInput(
                                        inputs[idx]?.[i] ?? "",
                                        sentence.answer[i],
                                        showAnswers
                                      )),
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

          <div className={buttonContainer}>
            <button
              className={exerciseButton}
              type="button"
              onClick={() => setShowAnswers(true)}
            >
              Проверить мою работу
            </button>
            <button
              className={exerciseButton}
              type="button"
              onClick={revealAnswers}
            >
              Показать правильные ответы
            </button>
            <button
              className={exerciseButton}
              type="button"
              onClick={() => {
                setInputs((prev) => prev.map((row) => row.map(() => "")));
                setIsAutoFilled((prev) =>
                  prev.map((row) => row.map(() => false))
                );
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
};
