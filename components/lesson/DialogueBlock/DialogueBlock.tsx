import { MultiFormatHeading } from "@/components/lesson/Heading";
import { formatText } from "@/utils";
import type { DialogueBlockProps } from "@/types";

import { styles } from "./styles";

export const DialogueBlock = ({ data }: { data: DialogueBlockProps }) => {
  const { sections } = data;

  const {
    dialogueWrap,
    subtitleWrap,
    sectionContainer,
    header,
    noIndent,
    dialogueContainer,
    dialoguePair,
    languageColumn,
    emptyColumn,
    dialogueText,
    dialogueTextMkd,
  } = styles.dialogue;

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
          <div key={`section-${idx}`} className={sectionContainer}>
            <div className={header}>
              {title && typeof title === "object" && !Array.isArray(title) && (
                <MultiFormatHeading as="h3" data={title} />
              )}

              {subtitle &&
                typeof subtitle === "object" &&
                !Array.isArray(subtitle) && (
                  <MultiFormatHeading as="h3" data={subtitle} />
                )}
            </div>

            {(description?.mkd ||
              description?.ru ||
              contentSubtitle?.mkd ||
              contentSubtitle?.ru) && (
              <div className={dialogueWrap}>
                {/* mkd */}
                {(contentSubtitle?.mkd || description?.mkd) && (
                  <div className={subtitleWrap}>
                    {contentSubtitle?.mkd && (
                      <h3 lang="mk" className={noIndent}>
                        {formatText(`<em>${contentSubtitle.mkd}</em>`)}
                      </h3>
                    )}
                    {description?.mkd && (
                      <p lang="mk" className={noIndent}>
                        {formatText(`<em>${description.mkd}</em>`)}
                      </p>
                    )}
                  </div>
                )}
                {/* ru */}
                {(contentSubtitle?.ru || description?.ru) && (
                  <div className={subtitleWrap}>
                    {contentSubtitle?.ru && (
                      <h3 lang="ru" className={noIndent}>
                        {formatText(`<em>${contentSubtitle.ru}</em>`)}
                      </h3>
                    )}
                    {description?.ru && (
                      <p lang="ru" className={noIndent}>
                        {formatText(`<em>${description.ru}</em>`)}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* dialogue */}
            {dialogue && dialogueOrder && (
              <div className={dialogueContainer}>
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
                        className={dialoguePair}
                      >
                        <div className={languageColumn}>
                          <ul
                            lang="mk"
                            className={`${dialogueText} ${dialogueTextMkd}`}
                          >
                            <li>
                              <p style={{ textIndent: 0 }}>
                                <strong>
                                  {formatText(mkdSpeakerData?.speaker?.mkd)}
                                </strong>{" "}
                                {formatText(mkdText)}
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className={languageColumn}>
                          {ruText ? (
                            <ul lang="ru" className={dialogueText}>
                              <li>
                                <p style={{ textIndent: 0 }}>
                                  <strong>{ruSpeakerData?.speaker?.ru}</strong>{" "}
                                  {formatText(ruText)}
                                </p>
                              </li>
                            </ul>
                          ) : (
                            <div className={emptyColumn} />
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
