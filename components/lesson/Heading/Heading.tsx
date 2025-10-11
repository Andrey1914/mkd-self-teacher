"use client";

import { MultiFormatHeading } from "./MultiFormatHeading";
import type { LessonData } from "@/types";
import { styles } from "./styles";

interface LessonIntroProps {
  lessonData: LessonData;
}

export const HeadingLesson = ({ lessonData }: LessonIntroProps) => {
  const { title, sections } = lessonData;
  const { lessonTitle, sectionSubtitle } = styles.heading;

  return (
    <>
      <MultiFormatHeading as="h1" data={title} className={lessonTitle} />

      {sections?.map((section, i) => (
        <section key={i} style={{ marginBottom: "2rem" }}>
          <MultiFormatHeading as="h2" data={section.title} />

          <MultiFormatHeading
            as="h3"
            data={section.subtitle}
            className={sectionSubtitle}
          />
        </section>
      ))}
    </>
  );
};
