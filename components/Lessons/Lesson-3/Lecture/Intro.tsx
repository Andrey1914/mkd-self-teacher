import React from "react";

import lesson3 from "@/prisma/lessons/lesson-3";

import { formatText } from "@/utils";

export default function Intro() {
  const handledTypes = ["pay-attention"];

  return (
    <>
      {Array.isArray(lesson3.title) && lesson3.title.length > 0 && (
        <h1>{formatText(lesson3.title.join(", "))}</h1>
      )}
      {lesson3.sections?.map((section, i) => (
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
        </section>
      ))}
    </>
  );
}
