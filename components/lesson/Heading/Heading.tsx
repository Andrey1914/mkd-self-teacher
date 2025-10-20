"use client";

import { MultiFormatHeading } from "./MultiFormatHeading";
import type { LessonData } from "@/types";
import { styles } from "./styles";

interface LessonIntroProps {
  lessonData: LessonData;
  TitleIconSrc?: string;
  TitleIconSize?: number;
  SubtitleIconSrc?: string;
  SubtitleIconSize?: number;
}

export const HeadingLesson = ({
  lessonData,
  TitleIconSrc = "/grammar.png",
  TitleIconSize = 72,
  SubtitleIconSrc = "/lecture.png",
  SubtitleIconSize = 62,
}: LessonIntroProps) => {
  const { title, sections } = lessonData;
  const { lessonTitle, sectionSubtitle } = styles.heading;

  return (
    <>
      <MultiFormatHeading as="h1" data={title} className={lessonTitle} />

      {sections?.map((section, i) => (
        <section key={i} style={{ marginBottom: "2rem" }}>
          <MultiFormatHeading
            as="h2"
            data={section.title}
            iconSrc={TitleIconSrc}
            iconSize={TitleIconSize}
          />
          <MultiFormatHeading
            as="h2"
            data={section.subtitle}
            className={sectionSubtitle}
            iconSrc={SubtitleIconSrc}
            iconSize={SubtitleIconSize}
          />
        </section>
      ))}
    </>
  );
};
