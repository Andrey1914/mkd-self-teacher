"use client";

import React, { useState, useMemo } from "react";
import { formatText, compareTexts, parseSentences } from "@/utils";
import { ControlButtons } from "./ControlButtons";
import type { ExercisesProps } from "@/types";
import { parseSentenceInPart } from "@/utils/core";

import { styles, getWordStatusClass } from "./styles";

type SelectedAnswers = {
  [sentenceIndex: number]: {
    [optionIndex: number]: string | null;
  };
};

export const SelectOptionExercise = ({ data }: { data: ExercisesProps }) => {
  const [selected, setSelected] = useState<SelectedAnswers>({});
  const [isChecked, setIsChecked] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const { correct, incorrect } = styles.highlightWords;
  const section = data.sections[0];

  const parsedSentences = useMemo(() => {
    return parseSentences(section.content.sentences ?? []);
  }, [section.content.sentences]);

  const handleSelect = (sIdx: number, oIdx: number, val: string) => {
    if (isChecked || showAnswers) return;
    setSelected((prev) => ({
      ...prev,
      [sIdx]: { ...prev[sIdx], [oIdx]: val },
    }));
  };

  const handleCheck = () => setIsChecked(true);
  const handleClear = () => {
    setSelected({});
    setIsChecked(false);
    setShowAnswers(false);
  };
  const handleRevealAnswers = () => {
    setShowAnswers(true);
    setIsChecked(false);
  };

  const cursor = isChecked || showAnswers ? "default" : "pointer";

  return (
    <section style={{ margin: "2rem 0" }}>
      {section.prompt?.map((text, i) => (
        <ul key={i} style={{ marginBottom: "1rem" }}>
          <li style={{ listStyle: "none" }}>
            <p>
              <strong>{data.title}. </strong>
            </p>
          </li>
          {formatText(text, true)}
        </ul>
      ))}

      <ul style={{ padding: "0 12px" }}>
        {parsedSentences.map((sentenceParts, sIdx) => (
          <li
            key={sIdx}
            style={{
              display: "inline",
              marginRight: "0.5ch",
              lineHeight: "1.8",
            }}
          >
            {sentenceParts.map((part, pIdx) => {
              if (part.isOption) {
                return (
                  <span key={pIdx} style={{ fontStyle: "italic" }}>
                    {part.options?.map((opt, optIdx) => {
                      const userChoice = selected[sIdx]?.[part.optionIndex!];
                      const isSelected = userChoice === opt.raw;
                      const isCorrectOption = compareTexts(
                        opt.raw,
                        part.correctAnswer!,
                      );

                      let statusClass = "";
                      if (isChecked || showAnswers) {
                        if (showAnswers && isCorrectOption) {
                          statusClass = getWordStatusClass("correct", {
                            correct,
                            incorrect,
                          });
                        } else if (isSelected) {
                          statusClass = getWordStatusClass(
                            isCorrectOption ? "correct" : "incorrect",
                            { correct, incorrect },
                          );
                        }
                      }

                      const backgroundColor = isSelected
                        ? "rgba(255,255,255,0.15)"
                        : "transparent";

                      return (
                        <React.Fragment key={optIdx}>
                          <span
                            className={statusClass}
                            style={{
                              cursor: cursor,
                              padding: "0 2px",
                              backgroundColor: backgroundColor,
                              borderRadius: "3px",
                            }}
                            onClick={() =>
                              handleSelect(sIdx, part.optionIndex!, opt.raw)
                            }
                          >
                            {formatText(opt.formatted)}
                          </span>
                          {optIdx < part.options!.length - 1 && " / "}
                        </React.Fragment>
                      );
                    })}
                  </span>
                );
              }

              const { unstyledPrefix, styledText, unstyledSuffix } =
                parseSentenceInPart(part.text || "");

              return (
                <React.Fragment key={pIdx}>
                  {unstyledPrefix}
                  {<span>{formatText(styledText)}</span>}
                  {unstyledSuffix}
                </React.Fragment>
              );
            })}
          </li>
        ))}
      </ul>

      <ControlButtons
        onCheck={handleCheck}
        onReveal={handleRevealAnswers}
        onClear={handleClear}
        showAnswers={showAnswers}
      />
    </section>
  );
};
