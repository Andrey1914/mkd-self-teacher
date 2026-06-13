import {
  HeadingGenerator,
  LectureGenerator,
  GrammarGenerator,
} from "@/components/contents/generator";
import { lectureConfigs, grammarConfigs } from "../config";
import { LessonConfig, CustomBlock, LessonBlockConfig } from "../types";

import { styles } from "../styles";

interface ContentsGeneratorProps {
  config: LessonConfig[];
  splitAt?: number;
}

export const ContentsGenerator = ({
  config,
  splitAt = 10,
}: ContentsGeneratorProps) => {
  const lectures = lectureConfigs();
  const grammars = grammarConfigs();

  const { mobileOnly, desktopColumns, columnLeft, columnRight } =
    styles.contentGeneratorStyles;

  const renderBlocks: Record<
    "lecture" | "grammar" | "custom",
    (block: LessonBlockConfig) => React.ReactNode
  > = {
    lecture: (block) => {
      const targetConfig = lectures[(block as { configKey: string }).configKey];
      return targetConfig ? <LectureGenerator config={targetConfig} /> : null;
    },
    grammar: (block) => {
      const targetConfig = grammars[(block as { configKey: string }).configKey];
      return targetConfig ? <GrammarGenerator config={targetConfig} /> : null;
    },
    custom: (block) => {
      const Component = (block as CustomBlock).component;
      return <Component />;
    },
  };

  const renderLesson = (lesson: LessonConfig) => {
    const lectureBlock = lesson.blocks.find((b) => b.type === "lecture") as
      | { type: "lecture"; configKey: string }
      | undefined;

    const targetLectureConfig = lectureBlock
      ? lectures[lectureBlock.configKey]
      : null;

    const currentLessonData = targetLectureConfig?.lessonData;

    return (
      <ul key={lesson.lessonId} style={{ listStyle: "none" }}>
        {currentLessonData && (
          <li>
            <HeadingGenerator lesson={currentLessonData} />
          </li>
        )}

        {lesson.blocks.map((block, index) => {
          const blockKey = `${lesson.lessonId}-${block.type}-${index}`;
          const renderer = renderBlocks[block.type];

          return renderer ? <li key={blockKey}>{renderer(block)}</li> : null;
        })}
      </ul>
    );
  };

  const firstColumn = config.filter((lesson) => lesson.lessonId < splitAt);
  const secondColumn = config.filter((lesson) => lesson.lessonId >= splitAt);

  return (
    <>
      <div className={mobileOnly}>{config.map(renderLesson)}</div>

      <div className={desktopColumns}>
        <div className={columnLeft}>{firstColumn.map(renderLesson)}</div>
        <div className={columnRight}>{secondColumn.map(renderLesson)}</div>
      </div>
    </>
  );
};
