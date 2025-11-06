"use client";

import React, { useEffect, useState, useMemo, useRef } from "react";
import { ExercisesProps } from "@/types";
import {
  formatText,
  highlightInput,
  getTextWidth,
  exercisesUtils,
} from "@/utils";

import { ControlButtons, AnswerSetNavigator } from "./ControlButtons";

import { motion, AnimatePresence } from "framer-motion";

import { styles } from "./styles";
import { inputVariants } from "./motion";

export const FillInExercise = ({ data }: { data: ExercisesProps }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [checked, setChecked] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [inputs, setInputs] = useState<string[][]>([]);
  const [isAutoFilled, setIsAutoFilled] = useState<boolean[][]>([]);
  // const [animationClass, setAnimationClass] = useState("");

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

  const {
    fillInInput,
    // revealAnimation, hideAnimation
  } = styles.inputs;

  const activeSentences = useMemo(
    () => prepareActiveSentences(sentences, answerSet, activeIndex),
    [sentences, answerSet, activeIndex, prepareActiveSentences]
  );

  useEffect(() => {
    setHasMounted(true);
    const { initialInputs, initialFlags } =
      initializeFillInState(activeSentences);

    setInputs(initialInputs);
    setIsAutoFilled(initialFlags);
    setChecked(false);
    setShowAnswers(false);
    // setAnimationClass("");
  }, [activeIndex, activeSentences, initializeFillInState]);

  if (!hasMounted || !data || !data.sections || data.sections.length === 0) {
    return null;
  }

  const handleNext = () => {
    if (
      answerSet &&
      Array.isArray(answerSet.labels) &&
      activeIndex < answerSet.labels.length - 1
    ) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const revealAnswers = () => {
    const target = (activeSentences ?? sentences) || [];
    const { correctInputs: rawCorrectInputs, correctFlags } =
      getCorrectFillInAnswers(target);

    const cleanCorrectInputs = rawCorrectInputs.map((sentenceAnswers) =>
      sentenceAnswers.map((answer) =>
        typeof answer === "string"
          ? answer
              .replace(/\*\*(.*?)\*\*/g, "$1")
              .replace(/\((.*?)\)/g, "$1")
              .replace(/\s+/g, " ")
              .trim()
          : answer
      )
    );

    cleanCorrectInputs.forEach((sentence, sIdx) => {
      sentence.forEach((answer, wIdx) => {
        const ref = inputRefs.current[sIdx * 10 + wIdx];
        if (ref) {
          const newWidth = getInputWidth(answer);
          ref.style.setProperty("--input-width", `${newWidth}px`);
        }
      });
    });

    // setAnimationClass(revealAnimation);
    setInputs(cleanCorrectInputs);
    setIsAutoFilled(correctFlags);
    setChecked(false);
    setShowAnswers(true);
  };

  // const revealAnswers = () => {
  //   setAnimationClass(revealAnimation);

  //   requestAnimationFrame(() => {
  //     requestAnimationFrame(() => {
  //       const target = (activeSentences ?? sentences) || [];

  //       const { correctInputs: rawCorrectInputs, correctFlags } =
  //         getCorrectFillInAnswers(target);

  //       const cleanCorrectInputs = rawCorrectInputs.map((sentenceAnswers) => {
  //         return sentenceAnswers.map((answer) => {
  //           if (typeof answer === "string") {
  //             return answer
  //               .replace(/\*\*(.*?)\*\*/g, "$1")
  //               .replace(/\((.*?)\)/g, "$1")
  //               .replace(/\s+/g, " ")
  //               .trim();
  //           }
  //           return answer;
  //         });
  //       });

  //       setInputs(cleanCorrectInputs);
  //       setIsAutoFilled(correctFlags);
  //       setChecked(false);
  //       setShowAnswers(true);
  //       setAnimationClass(revealAnimation);
  //     });
  //   });
  // };

  const handleChange = (
    value: string,
    sentenceIdx: number,
    wordIdx: number
  ) => {
    if (checked) setChecked(false);
    if (showAnswers) setShowAnswers(false);

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

    const ref = inputRefs.current[sentenceIdx * 10 + wordIdx];
    if (ref) {
      ref.style.setProperty("--input-width", `${getInputWidth(value)}px`);
    }
    // setTimeout(() => {
    //   const input = document.getElementById(
    //     `input-${sentenceIdx}-${sentenceIdx}-${wordIdx}`
    //   );
    //   if (input) {
    //     input.style.setProperty("--input-width", `${getInputWidth(value)}px`);
    //   }
    // }, 5);
  };

  const handleCheck = () => {
    setChecked(true);
    setShowAnswers(false);
    // setAnimationClass("");
  };

  const handleClear = () => {
    // setAnimationClass(hideAnimation);

    inputRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.setProperty("--input-width", "60px");
      }
    });

    setInputs([]);
    setIsAutoFilled([]);
    setChecked(false);
    setShowAnswers(false);

    // setTimeout(() => {
    //   const target = (activeSentences ?? sentences) || [];
    //   const { initialInputs, initialFlags } = initializeFillInState(target);

    //   setInputs(initialInputs);
    //   setIsAutoFilled(initialFlags);
    //   setChecked(false);
    //   setShowAnswers(false);
    //   setAnimationClass("");

    //   inputRefs.current.forEach((ref) => {
    //     if (ref) ref.innerText = "";
    //   });
    // }, 200);
  };

  const getInputWidth = (value: string): number => {
    return Math.min(Math.max(getTextWidth(value), 60), 850);
  };

  return (
    <section style={{ margin: "2rem 0" }}>
      {data.sections.map((section, sIdx) => (
        <div key={sIdx}>
          {section.prompt?.map((text, i) =>
            typeof text === "string" ? (
              <ul key={i}>
                <li>
                  <p>
                    <strong>{data.title}.</strong>
                  </p>
                </li>
                {formatText(text, true)}
              </ul>
            ) : null
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
            <p style={{ textAlign: "center" }}>
              {formatText(section.content.text)}
            </p>
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

                            {sentence.answer && i < sentence.answer.length && (
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
                                            sentence.answer[i],
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
          {/* <form>
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

                            <span>{formatText(styledText)}</span>

                            {unstyledSuffix}

                            {sentence.answer && i < sentence.answer.length && (
                              <input
                                id={`input-${sIdx}-${idx}-${i}`}
                                name={`input-${sIdx}-${idx}-${i}`}
                                autoComplete="off"
                                type="text"
                                className={`${fillInInput} ${animationClass}`}
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
                                  ["--input-width" as string]: `${getInputWidth(
                                    inputs[idx]?.[i] ?? ""
                                  )}px`,
                                  ...(isAutoFilled[idx]?.[i]
                                    ? {}
                                    : checked && !showAnswers
                                    ? highlightInput(
                                        inputs[idx]?.[i] ?? "",
                                        sentence.answer[i],
                                        true
                                      )
                                    : {}),
                                }}
                              />
                            )}
                          </React.Fragment>
                        );
                      })}{" "}
                    </React.Fragment>
                  );
                })}
            </div>
          </form> */}

          <ControlButtons
            onCheck={handleCheck}
            onReveal={revealAnswers}
            onClear={handleClear}
            showAnswers={showAnswers}
          />
        </div>
      ))}
    </section>
  );
};
