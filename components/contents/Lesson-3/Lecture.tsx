import Link from "next/link";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-3";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-3";
import { lesson3 } from "@/prisma/lessons/lesson-3";
import { glossary } from "@/prisma/lessons/tables";

export const Lecture = () => {
  const section = lesson3.sections?.[0];

  const sectionSubtitle = section?.subtitle as
    | { ru: string; mkd: string }
    | undefined;

  const sectionDialogue = dialogueBlock.sections?.[0];

  const dialogue = sectionDialogue?.subtitle as
    | { ru: string; mkd: string }
    | undefined;

  const vocabularyTitle = vocabulary.title as { ru: string; mkd: string };

  const occupation = glossary.occupationTable.title as {
    ru: string;
    mkd: string;
  };

  return (
    <>
      <Link
        href="/lesson/3#lesson-3_acquaintance"
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
            href="/lesson/3#dialogue-3"
            style={{ display: "flex", gap: "8px", alignItems: "baseline" }}
          >
            <p>{dialogue?.ru}</p>
            <span>{dialogue?.mkd}</span>
          </Link>
        </li>
        <li>
          <Link href="/lesson/3#vocabulary-3">
            <p>{vocabularyTitle?.ru}</p>
            <span style={{ paddingLeft: 20 }}>{vocabularyTitle?.mkd}</span>
          </Link>
        </li>
        <li>
          <Link href="/lesson/3#occupation-3">
            <p>{occupation?.ru}</p>
            <span style={{ paddingLeft: 20 }}>{occupation?.mkd}</span>
          </Link>
        </li>
      </ul>
    </>
  );
};
