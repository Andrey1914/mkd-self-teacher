"use client";

import React, { useEffect, useState, useMemo, useRef } from "react";
import { ExercisesProps } from "@/types";
import {
  formatText,
  highlightInput,
  getTextWidth,
  exercisesUtils,
} from "@/utils";

import {
  extractDraggableWords,
  removeWordsFromPrompt,
  hasDraggableWords,
} from "@/utils/exerciseUtils/fillInExercise/drag-and-drop";
import { useDragAndDrop } from "@/hooks/";

import { ControlButtons, AnswerSetNavigator } from "./ControlButtons";
import { DraggableWord } from "./DraggableWord";
import { DragGhost } from "./DragGhost";

import { motion, AnimatePresence } from "framer-motion";

import { styles } from "./styles";
import { inputVariants } from "./motion";

import { createFillInExerciseHandlers } from "./handlers";

export interface FillInExerciseProps {
  data: ExercisesProps;
  onSwiperLock?: (locked: boolean) => void;
}

export const FillInExercise = ({ data, onSwiperLock }: FillInExerciseProps) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [checked, setChecked] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [inputs, setInputs] = useState<string[][]>([]);
  const [isAutoFilled, setIsAutoFilled] = useState<boolean[][]>([]);

  const section = data.sections?.[0];
  const sentences = section?.content?.sentences;
  const answerSet = section?.answerSet;
  const hasMultipleAnswerSets = !!answerSet;

  const [activeIndex, setActiveIndex] = useState(0);

  const inputRefs = useRef<(HTMLDivElement | null)[]>([]);

  const {
    initializeFillInState,
    getCorrectFillInAnswers,
    parseFillInPart,
    prepareActiveSentences,
  } = exercisesUtils;

  const { fillInInput } = styles.inputs;
  const { containerDraggableWords, containerExampleText } = styles.containers;

  const activeSentences = useMemo(
    () => prepareActiveSentences(sentences, answerSet, activeIndex),
    [sentences, answerSet, activeIndex, prepareActiveSentences]
  );

  const draggableWords = useMemo(() => {
    const prompt = section?.prompt?.[0];
    if (typeof prompt === "string" && hasDraggableWords(prompt)) {
      return extractDraggableWords(prompt);
    }
    return null;
  }, [section?.prompt]);

  const { dragState, usedWords, handleDragStart, resetUsedWords, returnWord } =
    useDragAndDrop({
      availableWords: draggableWords || [],
      onWordUsed: (word, index) => {
        console.log("Word used:", word, "at index:", index);
      },
      onSwiperLock,
    });

  const getInputWidth = (value: string): number => {
    // return Math.min(Math.max(getTextWidth(value), 60), 850);
    return Math.max(getTextWidth(value), 60);
  };

  const {
    handlePrev,
    handleNext,
    handleCheck,
    handleRevealAnswers,
    handleClear,
    handleChange,
  } = createFillInExerciseHandlers({
    sentences,
    activeSentences,
    draggableWords,
    answerSet,
    activeIndex,
    setActiveIndex,
    inputRefs,
    initializeFillInState,
    getCorrectFillInAnswers,
    getInputWidth,
    returnWord,
    resetUsedWords,
    setInputs,
    setIsAutoFilled,
    setChecked,
    setShowAnswers,
  });

  useEffect(() => {
    setHasMounted(true);
    const { initialInputs, initialFlags } =
      initializeFillInState(activeSentences);

    setInputs(initialInputs);
    setIsAutoFilled(initialFlags);
    setChecked(false);
    setShowAnswers(false);
  }, [activeIndex, activeSentences, initializeFillInState]);

  if (!hasMounted || !data || !data.sections || data.sections.length === 0) {
    return null;
  }

  return (
    <section style={{ margin: "2rem 0" }}>
      {data.sections.map((section, sIdx) => (
        <div key={sIdx}>
          {section.prompt?.map((text, i) =>
            typeof text === "string" ? (
              <ul key={i}>
                <li style={{ listStyle: "none" }}>
                  <p>
                    <strong>{data.title}.</strong>
                  </p>
                </li>
                {formatText(removeWordsFromPrompt(text), true)}
              </ul>
            ) : null
          )}

          {draggableWords && draggableWords.length > 0 && (
            <div className={containerDraggableWords}>
              {draggableWords.map((word, idx) => (
                <DraggableWord
                  key={idx}
                  word={word}
                  index={idx}
                  isUsed={usedWords.has(idx)}
                  onDragStart={handleDragStart}
                />
              ))}
            </div>
          )}

          {hasMultipleAnswerSets && (
            <AnswerSetNavigator
              answerSet={answerSet}
              activeIndex={activeIndex}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          )}
          {section.content?.text && (
            <div lang="ru" className={containerExampleText}>
              {formatText(section.content.text, true)}
            </div>
          )}
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ textAlign: "left", lineHeight: "2rem" }}>
              {Array.isArray(activeSentences) &&
                activeSentences.map((sentence, idx) => {
                  const parts = sentence.mkd?.split("___");
                  return (
                    <React.Fragment key={idx}>
                      {parts?.map((part, i) => {
                        const { unstyledPrefix, styledText, unstyledSuffix } =
                          parseFillInPart(part);
                        return (
                          <React.Fragment key={i}>
                            {unstyledPrefix}
                            <span style={{ padding: "0 5px" }}>
                              {formatText(styledText)}
                            </span>
                            {unstyledSuffix}

                            {sentence.answer &&
                              i < sentence.answer.length &&
                              i < (parts?.length ?? 0) - 1 && (
                                <AnimatePresence>
                                  {!isAutoFilled[idx]?.[i] && !showAnswers ? (
                                    <motion.div
                                      layout
                                      ref={(el) => {
                                        inputRefs.current[idx * 10 + i] = el;
                                      }}
                                      id={`input-${sIdx}-${idx}-${i}`}
                                      className={fillInInput}
                                      contentEditable={true}
                                      onInput={(e) =>
                                        handleChange(
                                          e.currentTarget.innerText,
                                          idx,
                                          i
                                        )
                                      }
                                      initial="hidden"
                                      animate="visible"
                                      exit="exit"
                                      variants={inputVariants}
                                      style={{
                                        width: `${getInputWidth(
                                          inputs[idx]?.[i] ?? ""
                                        )}px`,
                                        ...(checked && !showAnswers
                                          ? highlightInput(
                                              inputs[idx]?.[i] ?? "",
                                              sentence.answer[i].replace(
                                                /\*\*/g,
                                                ""
                                              ),
                                              true
                                            )
                                          : {}),
                                      }}
                                    />
                                  ) : (
                                    <motion.div
                                      layout
                                      ref={(el) => {
                                        inputRefs.current[idx * 10 + i] = el;
                                      }}
                                      id={`input-${sIdx}-${idx}-${i}`}
                                      className={fillInInput}
                                      contentEditable={false}
                                      dangerouslySetInnerHTML={{
                                        __html: inputs[idx]?.[i] ?? "",
                                      }}
                                      initial="hidden"
                                      animate="visible"
                                      exit="exit"
                                      variants={inputVariants}
                                      style={{
                                        width: `${getInputWidth(
                                          inputs[idx]?.[i] ?? ""
                                        )}px`,
                                        willChange: "transform, opacity",
                                      }}
                                    />
                                  )}
                                </AnimatePresence>
                              )}
                          </React.Fragment>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
            </div>
          </form>

          <ControlButtons
            onCheck={handleCheck}
            onReveal={handleRevealAnswers}
            onClear={handleClear}
            showAnswers={showAnswers}
          />
        </div>
      ))}
      <DragGhost dragState={dragState} />
    </section>
  );
};
