import { HeadingLesson } from "@/components/lesson/Heading";

import { lesson1 } from "@/prisma/lessons/lesson-1";

export const Intro = () => {
  return (
    <>
      <HeadingLesson lessonData={lesson1} TitleIconSrc="/airport.png" />

      {lesson1.sections?.map((section, i) => (
        <section key={i} style={{ marginBottom: "2rem" }}>
          {"content" in section && section.content?.intro && (
            <>
              {section.content.intro.subtitle && (
                <>
                  {typeof section.content.intro.subtitle === "string" ? (
                    <p>{section.content.intro.subtitle}</p>
                  ) : Array.isArray(section.content.intro.subtitle) ? (
                    section.content.intro.subtitle.map((sub, idx) => (
                      <p key={idx}>{sub}</p>
                    ))
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {section.content.intro.subtitle.ru && (
                        <p>{section.content.intro.subtitle.ru}</p>
                      )}
                      {section.content.intro.subtitle.mkd && (
                        <p>{section.content.intro.subtitle.mkd}</p>
                      )}
                    </div>
                  )}
                </>
              )}

              <p
                lang="ru"
                style={{
                  marginBottom: 0,
                  overflowWrap: "break-word",
                  whiteSpace: "normal",
                  hyphens: "auto",
                }}
              >
                {section.content.intro.intro}
              </p>
            </>
          )}
        </section>
      ))}
    </>
  );
};
