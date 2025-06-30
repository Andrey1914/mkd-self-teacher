"use client";

import React from "react";
import { formatText } from "@/utils";
import { DialogueBlockProps } from "@/types";

export const DialogueBlock = ({ data }: { data: DialogueBlockProps }) => {
  const { sections } = data;

  return (
    <>
      {sections.map((section, idx) => {
        const {
          title,
          subtitle,
          content: {
            subtitle: contentSubtitle,
            description,
            dialogue,
            dialogueOrder,
          },
        } = section;

        return (
          <div key={`section-${idx}`} style={{ marginBottom: "2rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              {Array.isArray(title) && title.length > 0 && (
                <h2>{formatText(title.join(", "))}</h2>
              )}
              {Array.isArray(subtitle) && subtitle.length > 0 && (
                <h3>{formatText(subtitle.join(", "))}</h3>
              )}
            </div>

            {description && contentSubtitle && (
              <div
                style={{
                  padding: "5px",
                  display: "flex",
                  gap: "2rem",
                  background:
                    "linear-gradient(to right, var(--thead-bg), var(--background))",
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3>{formatText(contentSubtitle.mkd || "")}</h3>
                  <p>{formatText(description.mkd || "")}</p>
                </div>
                <div style={{ flex: 1 }}>
                  <h3>{formatText(contentSubtitle.ru || "")}</h3>
                  <p>{formatText(description.ru || "")}</p>
                </div>
              </div>
            )}

            {/* dialogue */}
            {dialogue && dialogueOrder && (
              <div
                style={{
                  padding: "5px",
                  display: "flex",
                  gap: "2rem",
                  marginBottom: "1rem",
                  background:
                    "linear-gradient(to right, var(--thead-bg), var(--background))",
                }}
              >
                {/* mkd */}
                <div style={{ flex: 1 }}>
                  {dialogueOrder
                    .filter(({ language }) => language === "mkd")
                    .map(({ speakerId, replyIndex }, i) => {
                      const speakerData = dialogue.find(
                        (line) => line.speaker.id === speakerId
                      );
                      const text = speakerData?.mkd?.[replyIndex];
                      if (!text) return null;

                      return (
                        <p
                          key={`dialogue-mkd-${idx}-${i}`}
                          style={{ marginBottom: "1rem" }}
                        >
                          <strong>{speakerData?.speaker?.mkd}</strong>{" "}
                          {formatText(text)}
                        </p>
                      );
                    })}
                </div>

                {/* ru */}
                <div style={{ flex: 1 }}>
                  {dialogueOrder
                    .filter(({ language }) => language === "ru")
                    .map(({ speakerId, replyIndex }, i) => {
                      const speakerData = dialogue.find(
                        (line) => line.speaker.id === speakerId
                      );
                      const text = speakerData?.ru?.[replyIndex];
                      if (!text) return null;

                      return (
                        <p
                          key={`dialogue-ru-${idx}-${i}`}
                          style={{ marginBottom: "1rem" }}
                        >
                          <strong>{speakerData?.speaker?.ru}</strong>{" "}
                          {formatText(text)}
                        </p>
                      );
                    })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
