import React from "react";

import lesson2 from "../../prisma/lessons/lesson-1";
import { Heading } from "@/components/lesson/Heading/Heading";

import { lectureLesson1 } from "@/prisma/lessons/heading/lesson-1/headings";

import { formatText } from "@/utils";

export function Lesson2() {
  const handledTypes = ["pay-attention"];

  return (
    <>
      <p>TEST LESSON START</p>
      <Heading level={lectureLesson1.level}>{lectureLesson1.title}</Heading>

      {lesson2.sections?.map((section, i) => (
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
            </>
          )}
        </section>
      ))}
      <p>TEST LESSON FINISH</p>
    </>
  );
}
