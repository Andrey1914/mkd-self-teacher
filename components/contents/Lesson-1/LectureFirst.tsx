// import Link from "next/link";
import { LectureGenerator } from "@/components/contents/generator";
// import { lesson1 } from "@/prisma/lessons/lesson-1";
// import { lectureLesson1 } from "@/prisma/lessons/paragraph";
import lectureConfigs from "@/components/contents/config";

export const Lesson1LectureFirstPart = () => {
  return (
    <>
      <LectureGenerator config={lectureConfigs()["1_part1"]} />
      {/* Какая-то разметка между ними */}
      {/* <LectureGenerator config={lectureConfigs()["1_part2"]} /> */}
    </>
  );
  // const section = lesson1.sections?.[0];

  // const sectionSubtitle = section?.subtitle as
  //   | { ru: string; mkd: string }
  //   | undefined;

  // const partIntro = lectureLesson1.lectureIntro;
  // const introduction = partIntro?.content?.intro?.subtitle as
  //   | { ru: string; mkd: string }
  //   | undefined;

  // return (
  //   <>
  //     <Link
  //       href="/lesson/1#lesson-1_airport"
  //       style={{ display: "flex", gap: "8px", alignItems: "baseline" }}
  //     >
  //       <h3 style={{ display: "flex", gap: "8px", textIndent: 0 }}>
  //         {sectionSubtitle?.ru}
  //         <span>{sectionSubtitle?.mkd}</span>
  //       </h3>
  //     </Link>
  //     <ul style={{ listStyle: "none" }}>
  //       <li>
  //         <Link href="/lesson/1#lesson-1_introduction">
  //           <p>{introduction?.ru}</p>
  //         </Link>
  //       </li>
  //     </ul>
  //   </>
  // );
};
