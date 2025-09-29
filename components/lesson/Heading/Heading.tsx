"use client";

import type { LessonData, SectionWithTables } from "@/types";
import { formatText } from "@/utils";

interface LessonIntroProps {
  lessonData: LessonData;
}

export const HeadingLesson = ({ lessonData }: LessonIntroProps) => {
  const { title, sections } = lessonData;

  const renderTitle = (titleData: LessonData["title"]) => {
    if (!titleData) return null;

    if (typeof titleData === "string") {
      return <h1>{formatText(titleData)}</h1>;
    }

    if (Array.isArray(titleData)) {
      return <h1>{formatText(titleData.join(", "))}</h1>;
    }

    return (
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>{formatText(titleData.ru)}</span>
        <span style={{ fontWeight: 300 }}>{formatText(titleData.mkd)}</span>
      </h1>
    );
  };

  const renderSectionTitle = (titleData: SectionWithTables["title"]) => {
    if (!titleData) return null;

    if (typeof titleData === "string") {
      return <h2>{formatText(titleData)}</h2>;
    }

    if (Array.isArray(titleData)) {
      return <h2>{formatText(titleData.join(", "))}</h2>;
    }

    return (
      <h2
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {formatText(titleData.ru)}
        <span>{formatText(titleData.mkd)}</span>
      </h2>
    );
  };

  const renderSectionSubtitle = (
    subtitleData: SectionWithTables["subtitle"]
  ) => {
    if (!subtitleData) return null;

    if (typeof subtitleData === "string") {
      return <h3 style={{ margin: "2rem 0" }}>{formatText(subtitleData)}</h3>;
    }

    if (Array.isArray(subtitleData)) {
      return (
        <h3 style={{ margin: "2rem 0" }}>
          {formatText(subtitleData.join(", "))}
        </h3>
      );
    }

    return (
      <h3
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "2rem 0",
        }}
      >
        {formatText(subtitleData.ru)}
        <span>{formatText(subtitleData.mkd)}</span>
      </h3>
    );
  };

  return (
    <>
      {renderTitle(title)}

      {sections?.map((section, i) => (
        <section key={i} style={{ marginBottom: "2rem" }}>
          {renderSectionTitle(section.title)}
          {renderSectionSubtitle(section.subtitle)}
        </section>
      ))}
    </>
  );
};
