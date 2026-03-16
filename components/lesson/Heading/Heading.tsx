"use client";

import Image from "next/image";
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
  const {
    lessonTitle,
    sectionSubtitle,
    // contanerImg,
    // gradient,
    containerTitle,
    bgImage,
    container,
  } = styles.heading;

  return (
    <div className={container}>
      {/* <div className={contanerImg}> */}
      {/* <div className={gradient}></div> */}
      <div className={containerTitle}>
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
      <Image
        src="/bg-image-v2.png"
        alt="Background"
        width={500}
        height={600}
        className={bgImage}
      />
      {/* <div className={contanerImg}></div> */}
    </div>
    // </div>
  );
};
