import Link from "next/link";

import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-1";
import { vocabulary1 } from "@/prisma/lessons/vocabulary/lesson-1";
import { countriesNationalitiesTable } from "@/prisma/lessons/tables";

export const Lesson1LectureSecondPart = () => {
  const sectionDialogue = dialogueBlock.sections?.[0];

  const title = sectionDialogue?.title as { ru: string; mkd: string };

  const dialogue = sectionDialogue?.subtitle as
    | { ru: string; mkd: string }
    | undefined;

  const vocabulary = vocabulary1.title as { ru: string; mkd: string };

  const countriesNationalities =
    countriesNationalitiesTable.subtitle as string[];

  return (
    <>
      <Link
        href="/lesson/1#dialogue-1"
        style={{ display: "flex", gap: "8px", alignItems: "baseline" }}
      >
        <h3 style={{ display: "flex", gap: "8px", textIndent: 0 }}>
          {title?.ru}
          <span>{title?.mkd}</span>
        </h3>
      </Link>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link
            href="/lesson/1#dialogue-1"
            style={{ display: "flex", gap: "8px", alignItems: "baseline" }}
          >
            <p>{dialogue?.ru}</p>
            <span>{dialogue?.mkd}</span>
          </Link>
        </li>
        <li>
          <Link href="/lesson/1#vocabulary-1">
            <p>{vocabulary?.ru}</p>
            <span style={{ paddingLeft: "20px" }}>{vocabulary?.mkd}</span>
          </Link>
        </li>
        <li>
          <Link href="/lesson/1#countries-nationalities">
            <p>{countriesNationalities}</p>
          </Link>
        </li>
      </ul>
    </>
  );
};
