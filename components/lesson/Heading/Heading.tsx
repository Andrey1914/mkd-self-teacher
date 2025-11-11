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
    <div
      style={{
        position: "relative",
        backgroundImage: 'url("/flag.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "auto",
        overflow: "hidden",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at center,
                rgba(0, 0, 0, 0.30) 0%,      /* центр */
                rgba(0, 0, 0, 0.85) 60%,     /* переход */
                rgba(0, 0, 0, 1) 100%     /* края */
            )
          `,
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 2,
          // padding: "2rem 1rem",
        }}
      >
        <MultiFormatHeading as="h1" data={title} className={lessonTitle} />

        {sections?.map((section, i) => (
          <section key={i}>
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
      </div>
    </div>
  );
};
