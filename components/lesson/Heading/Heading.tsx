import Image from "next/image";
import { MultiFormatHeading } from "./MultiFormatHeading";
import type { LessonIntroProps } from "@/types";
import { styles } from "./styles";

export const HeadingLesson = ({
  lessonData,
  TitleIconSrc = "/grammar.webp",
  TitleIconSize = 72,
  SubtitleIconSrc = "/lecture.webp",
  SubtitleIconSize = 62,
}: LessonIntroProps) => {
  const { title, sections } = lessonData;
  const {
    lessonTitle,
    sectionSubtitle,
    divider,
    containerTitle,
    containerImage,
    bgImage,
    container,
  } = styles.heading;

  return (
    <>
      <div className={container}>
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
        <div className={containerImage}>
          <Image
            src="/bg-image-v2.webp"
            alt="Background"
            fill
            priority
            className={bgImage}
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
      </div>
      <div className={divider} />
    </>
  );
};
