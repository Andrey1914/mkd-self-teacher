import React from "react";

import { Heading } from "@/components/lesson/Heading/Heading";

import lesson1 from "@/prisma/lessons/lesson-1";
import { lectureLesson1 } from "@/prisma/lessons/heading/lesson-1/headings";

import { formatText } from "@/utils";

export default function Intro() {
  const handledTypes = ["pay-attention"];

  return (
    <>
      <Heading level={lectureLesson1.level}>{lectureLesson1.title}</Heading>

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

          {"content" in section && section.content?.intro && (
            <>
              {(section.content.intro.subtitle ?? []).map((sub, idx) => (
                <p key={idx}>{sub}</p>
              ))}

              <p
                lang="ru"
                style={{
                  marginBottom: 0,
                  overflowWrap: "break-word",
                  whiteSpace: "normal",
                  hyphens: "auto",
                }}
              >
                {section.content.intro.intro}
              </p>
            </>
          )}
        </section>
      ))}
    </>
  );
}
