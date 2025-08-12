"use client";
import { formatText } from "@/utils";
import type { DialogueBlockProps } from "@/types";

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

            {(description?.mkd ||
              description?.ru ||
              contentSubtitle?.mkd ||
              contentSubtitle?.ru) && (
              <div
                style={{
                  padding: "5px",
                  display: "flex",
                  gap: "2rem",
                  background:
                    "linear-gradient(to right, var(--thead-bg), var(--background))",
                }}
              >
                {/* mkd */}
                {(contentSubtitle?.mkd || description?.mkd) && (
                  <div style={{ flex: 1 }}>
                    {contentSubtitle?.mkd && (
                      <h3>{formatText(contentSubtitle.mkd)}</h3>
                    )}
                    {description?.mkd && (
                      <p
                        lang="mk"
                        style={{
                          hyphens: "auto",
                          overflowWrap: "break-word",
                          whiteSpace: "normal",
                        }}
                      >
                        {formatText(description.mkd)}
                      </p>
                    )}
                  </div>
                )}
                {/* ru */}
                {(contentSubtitle?.ru || description?.ru) && (
                  <div style={{ flex: 1 }}>
                    {contentSubtitle?.ru && (
                      <h3>{formatText(contentSubtitle.ru)}</h3>
                    )}
                    {description?.ru && (
                      <p
                        lang="ru"
                        style={{
                          hyphens: "auto",
                          overflowWrap: "break-word",
                          whiteSpace: "normal",
                        }}
                      >
                        {formatText(description.ru)}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* dialogue */}
            {dialogue && dialogueOrder && (
              <div
                style={{
                  padding: "5px",
                  marginBottom: "1rem",
                  background:
                    "linear-gradient(to right, var(--thead-bg), var(--background))",
                }}
              >
                {/* Группируем реплики по парам */}
                {dialogueOrder
                  .filter(({ language }) => language === "mkd")
                  .map((mkdItem, i) => {
                    const ruItem = dialogueOrder.find(
                      (item, index) =>
                        item.language === "ru" &&
                        Math.floor(index / 2) ===
                          Math.floor(dialogueOrder.indexOf(mkdItem) / 2)
                    );

                    const mkdSpeakerData = dialogue.find(
                      (line) => line.speaker.id === mkdItem.speakerId
                    );
                    const mkdText = mkdSpeakerData?.mkd?.[mkdItem.replyIndex];

                    const ruSpeakerData = ruItem
                      ? dialogue.find(
                          (line) => line.speaker.id === ruItem.speakerId
                        )
                      : null;
                    const ruText = ruSpeakerData?.ru?.[ruItem?.replyIndex || 0];

                    if (!mkdText) return null;

                    return (
                      <div
                        key={`dialogue-pair-${idx}-${i}`}
                        style={{
                          display: "flex",
                          gap: "2rem",
                          marginBottom: "0.5rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <div style={{ display: "flex", flex: 1 }}>
                          <p
                            lang="mk"
                            style={{
                              margin: 0,
                              padding: "0.5rem",
                              overflowWrap: "break-word",
                              wordBreak: "break-word",
                              whiteSpace: "normal",
                              hyphens: "auto",
                              flex: 1,
                            }}
                          >
                            <strong>{mkdSpeakerData?.speaker?.mkd}</strong>{" "}
                            {formatText(mkdText)}
                          </p>
                        </div>
                        <div style={{ display: "flex", flex: 1 }}>
                          {ruText ? (
                            <p
                              lang="ru"
                              style={{
                                margin: 0,
                                padding: "0.5rem",
                                overflowWrap: "break-word",
                                whiteSpace: "normal",
                                hyphens: "auto",
                                flex: 1,
                              }}
                            >
                              <strong>{ruSpeakerData?.speaker?.ru}</strong>{" "}
                              {formatText(ruText)}
                            </p>
                          ) : (
                            <div style={{ flex: 1 }} />
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
