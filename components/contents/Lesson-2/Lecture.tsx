import Link from "next/link";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-2";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-2";
import { lesson2 } from "@/prisma/lessons/lesson-2";

export const Lecture = () => {
  const section = lesson2.sections?.[0];

  const sectionSubtitle = section?.subtitle as
    | { ru: string; mkd: string }
    | undefined;

  const sectionDialogue = dialogueBlock.sections?.[0];

  const dialogue = sectionDialogue?.subtitle as
    | { ru: string; mkd: string }
    | undefined;

  const vocabularyTitle = vocabulary.title as { ru: string; mkd: string };

  return (
    <>
      <Link
        href="/lesson/2#lesson-2_taxi-hotel"
        style={{ display: "flex", gap: "8px", alignItems: "baseline" }}
      >
        <h3 style={{ display: "flex", gap: "8px", textIndent: 0 }}>
          {sectionSubtitle?.ru}
          <span>{sectionSubtitle?.mkd}</span>
        </h3>
      </Link>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link
            href="/lesson/2#dialogue-2"
            style={{ display: "flex", gap: "8px", alignItems: "baseline" }}
          >
            <p>{dialogue?.ru}</p>
            <span>{dialogue?.mkd}</span>
          </Link>
        </li>
        <li>
          <Link href="/lesson/2#vocabulary-2">
            <p>{vocabularyTitle?.ru}</p>
            <span style={{ paddingLeft: 20 }}>{vocabularyTitle?.mkd}</span>
          </Link>
        </li>
      </ul>
    </>
  );
};
